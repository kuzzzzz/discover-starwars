import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Search from './Search';
import DisplayStarShip from './DisplayStarShip'
import '../styles/spinner.scss';
import { Link } from 'react-router-dom';
import Planets from './Planets';

export default function StarShips() {
    const [Isloading, setIsLoading] = useState(false)
    const [data, setData] = useState([]);
    const [starhips, setShips] = useState([]);
    const [isError, setIsError] = useState(false)
    const [query, setQuery] = useState(1);

    // console.log(data)
    useEffect(() => {
        const fetchData = async () => {
            setIsError(false)
            setIsLoading(true)
            try {
                const res = await axios.get(
                    `https://swapi.dev/api/starships/?page=${query}`
                );
                setData(res.data);
                setShips(res.data.results);
            } catch (error) {
                setIsError(true)
            }
            setIsLoading(false)
        };
        fetchData();
    }, [query]);




    const search = searchValue => {
        setIsLoading(true)
        fetch(`https://swapi.dev/api/starships/?search=${searchValue}`)
            .then(res => res.json())
            .then(data => {

                setShips(data.results)
                setIsLoading(false)
            })
    }

    return (
        <>
            <Search search={search} />
            {isError && <div className="alert alert-danger" role="alert">
                The Repulic Won Check Your Connection and <Link to='/' className="alert-link">Refresh</Link>. To Rebel </div>}
            {Isloading ? (
                <div className="search">
                    <span className="Spinner Spinner--radar"></span>
                </div>
            ) : (<div>
                <h1>Showing List {starhips.length} out of {data.count}</h1>
{starhips.length === 0 && isError ===false ? (
                        <div className="alert alert-danger" role="alert">
                            There are no Starship With that Name <Link to='/' className="alert-link">Refresh and </Link> enter a valid name Ex:star destroyer
</div>):(starhips.map(item => (
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
                    />)
                ))}
                <div className="button">
                    <div className="previousButton">
                        <button
                            className="btn btn-primary btn-lg"
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
                    </div>
                    <div className="nextButton">
                        <button
                            className="btn btn-primary btn-lg"
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
                    </div>
                </div>
            </div>)}
        </>
    )
}
