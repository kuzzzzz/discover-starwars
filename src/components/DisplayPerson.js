import React, { useState } from 'react'
import "../App.scss"
import "../styles/card.scss"


export default function DisplayCard({
    name, birth_year, gender, eye_color,
    mass, skin_color, films, hair_color, height }) {

    const [fulldetails, setDetails] = useState(false)


    return (

        <div className="contact-card">
            <div >
                <p>Name:{name}</p>
                <p>Birth-Year:{birth_year}</p>
                <p>Gender:{gender}</p>

            </div>
            <button onClick={() => setDetails(!fulldetails)} >full-details</button>
            {fulldetails && <div><p>
                Eye-color:{eye_color}<br/>
                Mass:{mass}<br />
                Skin:{skin_color}<br />
                No of Movies Seen:{films}<br />
                Hair-Color:{hair_color}<br />
                Height:{height}</p></div>}

        </div>


    )
}
