import React, { useState } from 'react'
import "../styles/search.scss"

export default function Search({ search }) {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value)
    }
    const resetInputField = () => {
        setSearchValue('')
    }
    const callSearchFunction = (e) => {
        e.preventDefault()
        search(searchValue)
        resetInputField();
    }
    return (
        <form className="search">
            <input
                value={searchValue}
                onChange={handleSearchInputChanges}
                type="text"
            />
            <input onClick={callSearchFunction} className="btn btn-primary" type="submit" value="search" />
        </form>

    )
}
