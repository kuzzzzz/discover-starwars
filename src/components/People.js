import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Search from './Search';
import Filter from './filter';
import DisplayPerson from './DisplayPerson';
import "../App.scss";

function People() {
  const [isloading, setIsLoading] = useState(false);
  const filterd = useRef([])
  const [data, setData] = useState([]);
  const [people, setPeople] = useState([]);
  const [query, setQuery] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)

      const res = await axios.get(
        `https://swapi.dev/api/people/?page=${query}`
      );
      setData(res.data);
      setPeople(res.data.results);
      setIsLoading(false)

    };
    fetchData();
  }, [query]);
  console.log(data)
  // https://swapi.dev/api/people/?search=r2


  const search = searchValue => {
    setIsLoading(true)
    fetch(`https://swapi.dev/api/people/?search=${searchValue}`)
      .then(res => res.json())
      .then(data => {
        setPeople(data.results)
        setIsLoading(false)

      })
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
      {isloading ? (
        <div className="search">
          <span className="Spinner Spinner--radar"></span>
        </div>
      ):(<div>
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
      <div className="button">
     <div className="previousButton">
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
      </div>
      <div className="nextButton">
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
        </div>
      </div>
        </div>)}
    </>
  );
}

export default People;
