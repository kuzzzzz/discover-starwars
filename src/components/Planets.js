import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Search from './Search'
import DisplayPlanet from './DisplayPlanet'
import { Link } from 'react-router-dom';

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
            try {
                const res = await axios.get(
                    `https://swapi.dev/api/planets/?page=${query}`
                );
                setData(res.data);
                setPlanets(res.data.results);
            } catch (error) {
                setIsError(true)
            }
            setIsLoading(false)
        };
        fetchData();
    }, [query]);

    const search = searchValue => {
        setIsLoading(true)
        fetch(`https://swapi.dev/api/planets/?search=${searchValue}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPlanets(data.results)
                setIsLoading(false)
            })

    }

    return (
        <>
            <Search search={search} />

            {isError && <div className="alert alert-danger" role="alert">
                The Repulic Won Check Your Connection and
                <Link to="/" className="alert-link">Refresh</Link>.
                 To Rebel</div>}

            {isloading ? (
                <div className="Spinner-wrapper">
                    <span className="Spinner Spinner--radar"></span>
                </div>) :
                (<div className="container">
                    <p>Showing List {planets.length} out of {data.count}</p>
                    {planets.length === 0 && isError === false ? (
                        <div className="alert alert-danger" role="alert">
                            There are no Planets With that Name
                         <Link to='/' className="alert-link">Refresh and </Link>
                            enter a valid name Ex:Hoth</div>) : (
                            planets.map(item => (
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
                                />)
                            ))}

                    <div className="button">
                        <div className="previousButton">
                            <button
                                className="btn btn-primary btn-lg"
                                type="text"
                                value={query}
                                onClick={event => { if (query > 1) { setQuery(query - 1); } }}>
                                Previous </button></div>

                        <div className="nextButton">
                            <button
                                className="btn btn-primary btn-lg"
                                type="text"
                                value={query}
                                onClick={event => { if (query < 6) { setQuery(query + 1); } }}>
                                Next</button></div>
                    </div>

                </div>
                )}
        </>
    )
}
