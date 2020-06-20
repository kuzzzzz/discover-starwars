import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Search from './Search'
import DisplayPlanet from './DisplayPlanet'

export default function Planets() {
    const [isloading, setIsLoading] = useState(false)
    const [data, setData] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [query, setQuery] = useState(1);
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false)
            setIsLoading(true)
            try{
            const res = await axios.get(
                `https://swapi.dev/api/planets/?page=${query}`
            );
            setData(res.data);
            setPlanets(res.data.results);
            }catch(error){
                setIsError(true)
            }
            setIsLoading(false)
        };
        fetchData();
    }, [query]);

    // console.log(data)
    const search = searchValue => {
        setIsLoading(true)
        fetch(`https://swapi.dev/api/planets/?search=${searchValue}`)
            .then(res => res.json())
            .then(data => {
                setPlanets(data.results)
                setIsLoading(false)

            })

    }


    return (
        <>
            <Search search={search} />
            {isError && <div className="alert alert-danger" role="alert">
                The Repulic Won Check Your Connection and <a href="#" className="alert-link">Refresh</a>. To Rebel
</div>}
            {isloading ? (
                <div className="search">
                    <span className="Spinner Spinner--radar"></span>
                </div>
            ) : (<div>
                <h1>Showing List 10 out of {data.count}</h1>
                {planets.map(item => (
                    <DisplayPlanet
                        key={item.name}
                        name={item.name}
                        climate={item.climate}
                        population={item.population}
                        rotation_period={item.rotation_period}
                        surface_water={item.surface_water}
                        terrain={item.terrain}
                        orbital_period={item.orbital_period}
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
                        if (query < 6) {
                            setQuery(query + 1);
                        }
                    }}
                >
                    Next
      </button>
            </div>
                )}
        </>
    )
}
