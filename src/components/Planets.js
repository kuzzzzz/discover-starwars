import React,{useEffect,useState} from 'react';
import axios from 'axios'

export default function Planets() {

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

    return (
        <>

            <ul>
                {planets.map(item => (
                    <li key={item.name}>{item.name}</li>
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
