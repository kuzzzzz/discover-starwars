import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Search from './Search'
import DisplayPlanet from './DisplayPlanet'

export default function Planets() {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [query, setQuery] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(
                `https://swapi.dev/api/planets/?page=${query}`
            );
            setData(res.data);
            setPlanets(res.data.results);
        };
        fetchData();
    }, [query]);

    // console.log(data)
    const search = searchValue => {
        setLoading(true)
        fetch(`https://swapi.dev/api/planets/?search=${searchValue}`)
            .then(res => res.json())
            .then(data => setPlanets(data.results))
    }


    return (
        <>
            <Search search={search} />

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
        </>
    )
}
