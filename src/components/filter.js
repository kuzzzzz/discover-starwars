import React, { useState } from 'react'

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
        <div>
            <form>
                <select  name="gender" id="gender" onChange={handlefilterInput} >
                    <option value="male"> Male</option>
                    <option value="female">Female</option>
                    <option value="n/a">Robot</option>
                    <option value="none">Alien</option>
                    <option value="hermaphrodite">Hemaphrodite</option>

                </select>
                <input onClick={callFilterFunction} type="submit" value="Submit" />

            </form>
        </div>
    )
}
