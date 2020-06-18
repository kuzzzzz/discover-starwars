import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

function People () {
  const [data, setData] = useState([]);
  const [people, setPeople] = useState([]);
  const [query, setQuery] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://swapi.dev/api/people/?page=${query}`
      );
      setData(res.data);
      setPeople(res.data.results);
    };
    fetchData();
  }, [query]);



  return (
    <>
    
      <ul>
        {people.map(item => (
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
          if (query < 9) {
            setQuery(query + 1);
          }
        }}
      >
        Next
      </button>
    </>
  );
}

export default People;
