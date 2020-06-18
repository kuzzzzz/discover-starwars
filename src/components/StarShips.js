import React, {useEffect,useState}from 'react'
import axios from 'axios'

export default function StarShips() {

    const [data, setData] = useState([]);
    const [starhips, setShips] = useState([]);
    const [query, setQuery] = useState(1);

    console.log(data)
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



    return (
        <>

            <ul>
                {starhips.map(item => (
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
