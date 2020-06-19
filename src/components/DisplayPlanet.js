import React, { useState } from 'react'
import "../App.css"

export default function DisplayPlanet({
    name, population, climate, rotation_period,
    surface_water, orbital_period, films, terrain }) {

    const [planetdetails, setDetails] = useState(false)

    return (


        <div>
            <div className="contact-card">
                <p>name:{name}</p>
                <p>climate:{climate}</p>
                <p>population:{population}</p>

            </div>
            <button onClick={() => setDetails(!planetdetails)} >full-details</button>
            {planetdetails && <p>
                surface_water:{surface_water}
                terrain:{terrain}
                No of Movies:{films}
                orbital_period:{orbital_period}
                rotation_period:{rotation_period}</p>}

        </div>

    )
}
