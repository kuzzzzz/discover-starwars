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
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)
      try {
        const res = await axios.get(
          `https://swapi.dev/api/people/?page=${query}`
        );
        setData(res.data);
        setPeople(res.data.results);
      } catch (error) {
        setIsError(true)
      }
      setIsLoading(false)

    };
    fetchData();
  }, [query]);
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
      {isError && <div className="alert alert-danger" role="alert">
        The Repulic Won Check Your Connection and <a href="#" className="alert-link">Refresh</a>. To Rebel
</div>}
      {isloading ? (
        <div className="search">
          <span className="Spinner Spinner--radar"></span>
        </div>
      ) : (<div>
          <h1>Showing List 10 out of {data.count}</h1>

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
