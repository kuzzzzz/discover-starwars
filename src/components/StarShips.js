import React, {useEffect,useState}from 'react'
import axios from 'axios'
import Search from './Search';
import DisplayStarShip from './DisplayStarShip'
import '../styles/spinner.scss'


export default function StarShips() {
    const [Isloading,setIsLoading] = useState(false)
    const [data, setData] = useState([]);
    const [starhips, setShips] = useState([]);
    const [query, setQuery] = useState(1);

    // console.log(data)
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            const res = await axios.get(
                `https://swapi.dev/api/starships/?page=${query}`
            );
            setData(res.data);
            setShips(res.data.results);
            setIsLoading(false)
        };
        fetchData();
    }, [query]);


    // https://swapi.dev/api/people/?search=r2


    const search = searchValue => {
        setIsLoading(true)
        fetch(`https://swapi.dev/api/starships/?search=${searchValue}`)
            .then(res => res.json())
            .then(data =>{

            setShips(data.results)
            setIsLoading(false)
        })
    }

    return (
        <>
<Search search={search}/>
            
            {Isloading ? (
            <div className="search">
                <span className="Spinner Spinner--radar"></span>
            </div>
            ):(<div>
                {starhips.map(item => (
                    <DisplayStarShip
                     key={item.name}
                     name={item.name}
                     manufacturer={item.name}
                     cost_in_credits={item.cost_in_credits}
                     cargo_capacity={item.cargo_capacity}
                     hyperdrive_rating={item.hyperdrive_rating}
                     crew={item.crew}
                     passengers={item.passengers}
                     films={item.films.length}
                    />
                ))}
            
            <button
                type="text"
                value={query}
                onClick={event => {
                    if (query > 1) {
                        setQuery(query - 1);
                    }
                }}
            >
                Previous
      </button>
            <button
                type="text"
                value={query}
                onClick={event => {
                    if (query < 4) {
                        setQuery(query + 1);
                    }
                }}
            >
                Next
      </button>
                </div>)}
        </>
    )
}
