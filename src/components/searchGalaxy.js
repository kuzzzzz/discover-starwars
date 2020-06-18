import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

function SearchGalaxy() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('luke');
  const [category,setCategory] = useState('people')
  const [url, setUrl] = useState(
    `http://swapi.dev/api/${category}/?search=${query}`
  );

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios(url
      );

      setData(res.data.results);
    };

    fetchData();
  }, [url]);
  console.log(data);
  return (
    <>
      <input
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <button
        type="button"
        onClick={() => setUrl(`http://swapi.dev/api/${category}/?search=${query}`)}
      >
        Search
      </button>
      <ul>
        {data.map(item => (
          <li key={item.name}>
            <a href={item.url}>{item.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default SearchGalaxy;
