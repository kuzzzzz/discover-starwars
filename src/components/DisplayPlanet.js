import React, { useState } from 'react'
import "../styles/planetcard.scss"
import "../App.scss"

export default function DisplayPlanet({
    name, population, climate, rotation_period,
    surface_water, orbital_period, films, terrain }) {

    const [planetdetails, setDetails] = useState(false)

    return (


        <div className="planet-card container">
            <div class="meta">
                <div class="photo">

                </div>
            </div>
            <div className="description">
                <h1>name:{name}</h1>
                <p>climate:{climate}</p>
                <p>population:{population}</p>

                <div className="readmore">
                    <button onClick={() => setDetails(!planetdetails)} >full-details</button>
                    {planetdetails && <p>
                        surface-water:{surface_water}<br />
                        terrain:{terrain}<br />
                        No-of-Movies:{films}<br />
                        orbital-period:{orbital_period}<br />
                        rotation-period:{rotation_period}</p>}
                </div>
            </div>
        </div>

    )
}
