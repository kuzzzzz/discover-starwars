import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

function SearchGalaxy({entity,searchTerm}) {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState(searchTerm);
  const [category,setCategory] = useState(entity)
  const [url, setUrl] = useState(
    `http://swapi.dev/api/${category}/?search=${query}`
  );

  const [isLoading,setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
        setIsLoading(true);
      const res = await axios(url
      );

      setData(res.data.results);
      setIsLoading(false)
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
        onClick={() =>
          setUrl(`http://swapi.dev/api/${category}/?search=${query}`)
        }
      >
        Search
      </button>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <ul>
          {data.map(item => (
            <li key={item.name}>
              <a href={item.url}>{item.name}</a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default SearchGalaxy;
