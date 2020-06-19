import React, {useEffect,useState}from 'react'
import axios from 'axios'
import Search from './Search';
import DisplayStarShip from './DisplayStarShip'


export default function StarShips() {
    const [loading,setLoading] = useState(true)
    const [data, setData] = useState([]);
    const [starhips, setShips] = useState([]);
    const [query, setQuery] = useState(1);

    // console.log(data)
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(
                `https://swapi.dev/api/starships/?page=${query}`
            );
            setData(res.data);
            setShips(res.data.results);
        };
        fetchData();
    }, [query]);


    // https://swapi.dev/api/people/?search=r2


    const search = searchValue => {
        setLoading(true)
        fetch(`https://swapi.dev/api/starships/?search=${searchValue}`)
            .then(res => res.json())
            .then(data => setShips(data.results))
    }

    return (
        <>
<Search search={search}/>
            <ul>
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
            </ul>
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
        </>
    )
}
