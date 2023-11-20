import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, population, area } = props.country;
    return (
        <div className='country'>
            <h2>{name.common}</h2>
            <h5>Population: {population}</h5>
            <p>Area: {area}</p>
        </div>
    );
};

export default Country;