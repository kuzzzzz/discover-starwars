import React, { useState } from 'react'
import '../App.scss'
import Background from "../assets/img/starship-6.jpg"
export default function DisplayStarShip({
    name, manufacturer, cost_in_credits, cargo_capacity,
    hyperdrive_rating, crew, passengers, films
}) {

    const [shipdetails, setDetails] = useState(false)

    return (
        <div className="display-card container">
            <div className="meta">
                <div className="photo"
                    style={{ backgroundImage: `url(${Background})` }}>


                </div>
            </div>
            <div className="description">
                <h1>name:{name}</h1>
                <p>manufacturer:{manufacturer}</p>
                <p>cost_in_credits:{cost_in_credits}</p>

                <div className="readmore">
                    <button onClick={() => setDetails(!shipdetails)} >full-details</button>
                    {shipdetails && <p>
                        cargo_capacity:{cargo_capacity}<br />
                        hyperdrive_rating:{hyperdrive_rating}<br />
                        No of Movies:{films}<br />
                        crew:{crew}<br />
                        passengers:{passengers}</p>}
                </div>
            </div>
        </div>

    )
}
