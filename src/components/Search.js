import React, { useState } from 'react'
import "../styles/card.scss"

export default function Search({search}) {
const [searchValue, setSearchValue] = useState('');

    const handleSearchInputChanges =(e) => {
        setSearchValue(e.target.value)
    }

    const resetInputField =() => {
        setSearchValue('')
    }
    const callSearchFunction = (e)=>{
        e.preventDefault()
        search(searchValue)
        resetInputField();
    }
    return (
        <div className="contact-card">
            <form>
                <input
                value={searchValue}
                onChange={handleSearchInputChanges}
                type="text"
                
                />
                <input onClick={callSearchFunction} type="submit" value="search"/>
            </form>
        </div>
    )
}
