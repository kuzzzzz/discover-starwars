import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Search from './Search';
import Filter from './filter';
import DisplayPerson from './DisplayPerson';
import "../App.scss";

function People() {
  const [loading, setLoading] = useState(true);
  const filterd = useRef([])
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
  console.log(data)
  // https://swapi.dev/api/people/?search=r2


  const search = searchValue => {
    setLoading(true)
    fetch(`https://swapi.dev/api/people/?search=${searchValue}`)
      .then(res => res.json())
      .then(data => setPeople(data.results))
  }

  const fileter = filterValue => {
    let men = [];
    people.filter(item => {
      if (item.gender === filterValue) {
        men.push(item)
      }
    })
    filterd.current = men
    setPeople(filterd.current)
    // console.log(filterd)
  }

  return (
    <>

      <Search search={search} />
      <Filter fileter={fileter} />
      <ul>
        {people.map(item => (
          <DisplayPerson
            key={item.name}
            name={item.name}
            birth_year={item.birth_year}
            gender={item.gender}
            eye_color={item.eye_color}
            hair_color={item.hair_color}
            skin_color={item.skin_color}
            mass={item.mass}
            films={item.films.length}
            height={item.height}
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
