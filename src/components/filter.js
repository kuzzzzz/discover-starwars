import React, { useState } from 'react'
import "../styles/search.scss"

export default function Filter(props) {
    const [FilterValue, setFilterValue] = useState('');

    const handlefilterInput = (e) => {
        setFilterValue(e.target.value)
    }
    const resetInput = () => {
        setFilterValue('')
    }
    const callFilterFunction = (e) => {
        e.preventDefault()
        props.fileter(FilterValue)
        resetInput();
    }
    return (

        <form >
            <select name="gender" id="gender" onChange={handlefilterInput} >
                <option defaultValue="">filter List</option>
                <option value="male"> Male</option>
                <option value="female">Female</option>
                <option value="n/a">Robot</option>
                <option value="none">Alien</option>
                <option value="hermaphrodite">Hemaphrodite</option>
            </select>
            <input onClick={callFilterFunction} className="btn btn-primary " type="submit" value="Filter" />
        </form>

    )
}
