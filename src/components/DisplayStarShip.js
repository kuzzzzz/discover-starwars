import React, { useState } from 'react'
import '../App.css'
export default function DisplayStarShip({
        name,manufacturer,cost_in_credits,cargo_capacity,
        hyperdrive_rating,crew,passengers,films
    }) {

        const[shipdetails,setDetails] = useState(false)

    return (
        <div>
            <div className="contact-card">
                <p>name:{name}</p>
                <p>manufacturer:{manufacturer}</p>
                <p>cost_in_credits:{cost_in_credits}</p>

            </div>
            <button onClick={() => setDetails(!shipdetails)} >full-details</button>
            {shipdetails && <p>
                cargo_capacity:{cargo_capacity}
                hyperdrive_rating:{hyperdrive_rating}
                No of Movies:{films}
                crew:{crew}
                passengers:{passengers}</p>}
</div>
         
    
    )
}
