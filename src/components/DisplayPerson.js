import React, { useState } from 'react'
import "../App.scss"


export default function DisplayCard({
    name, birth_year, gender, eye_color,
    mass, skin_color, films, hair_color, height }) {

    const [fulldetails, setDetails] = useState(false)


    return (

        <div>
            <div className="contact-card">
                <p>{name}</p>
                <p>{birth_year}</p>
                <p>{gender}</p>

            </div>
            <button onClick={() => setDetails(!fulldetails)} >full-details</button>
            {fulldetails && <p>
                eye:{eye_color}
                mass:{mass}
                skin:{skin_color}
                No of Movies:{films}
                hair:{hair_color}
                height:{height}</p>}

        </div>


    )
}
