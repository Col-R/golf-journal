import React from 'react'

import './Card.css'

// icon

import map_icon from '../img/map-icon.png'
import checkmark from '../img/checkmark.png'

const Card = (props) => {

    return (
        <section class = "card">
            <div className = "card__left">
                <img class = "card__img" src={props.course.imageUrl} alt="golf course"/>
            </div>
            <div className = "card__right">
                <p className="card__location"> <img id = "map__icon" src = {map_icon} alt = "map"/>{props.course.location} <a href={props.course.googleMapsUrl} className="card__mapsUrl" target="_blank" rel="noreferrer">View on Google Maps</a></p>
                <h1 className="card__title">{props.course.title}</h1>
                {/*Only displays if isPlayed == true in data.js*/}
                {props.course.isPlayed && <p className="card__played">Played <img src = {checkmark} alt = "checkmark" id="checkmark"/></p> }
                <p className="description">{props.course.description}</p>
            </div>
        </section>
  )
}

export default Card