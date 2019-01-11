import React from 'react';

import './StarWars.css'

function StarWars(props) {
    return (
        <div className='char-cont'>
        <h2>{props.char.name}</h2>
            <h3>Gender:</h3>
                <p>{props.char.gender}</p>
            <h3>Birth Year:</h3>
                <p>{props.char.birth_year}</p>
            <h3>Height:</h3>
                <p>{props.char.height}</p>
            <h3>Eye Color:</h3>
                <p>{props.char.eye_color}</p>
            <h3>Hair Color:</h3>
                <p>{props.char.hair_color}</p>
            <h3>Skin Color:</h3>
                <p>{props.char.skin_color}</p>
            <h3>Mass:</h3>
                <p>{props.char.mass}</p>
            <div className='list'>
            <li>Starships:</li>
                <ul>{props.char.starships[0]}</ul>
                <ul>{props.char.starships[1]}</ul>
            </div>
        </div>
    );
}

export default StarWars;