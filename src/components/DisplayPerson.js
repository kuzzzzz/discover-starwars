import React, { useState } from 'react'
import "../App.scss"
import "../styles/card.scss"
import Background from '../assets/img/character-3.jpg';


export default function DisplayCard({
    name, birth_year, gender, eye_color,
    mass, skin_color, films, hair_color, height }) {

    const [fulldetails, setDetails] = useState(false)


    return (

        <div className="display-card container">
            <div className="meta">
                <div className="photo"
                style={{backgroundImage:`url(${Background})`}}>

                </div>
            </div>
            <div className="description" >
                <h1>Name:{name}</h1>
                <p>Birth-Year:{birth_year}</p>
                <p>Gender:{gender}</p>
                <div className="readmore">
                    <button onClick={() => setDetails(!fulldetails)} >full-details</button>
                    {fulldetails && <p>
                        Eye-color:{eye_color}<br />
                        Mass:{mass}<br />
                        Skin:{skin_color}<br />
                        No of Movies Seen:{films}<br />
                        Hair-Color:{hair_color}<br />
                        Height:{height}</p>}
                </div>
            </div>

        </div>


    )
}
