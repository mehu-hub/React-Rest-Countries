import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const url = 'https://restcountries.com/v3.1/all'
        fetch(url)
            .then(res => res.json())
            .then(data => setCountries(data));

    }, [])

    return (
        <div>
            <h1>Countries : {countries.length}</h1>
            <div className='countries'>
                {
                    countries.map(country =>
                        <Country
                            country={country}
                            key={country.cca3}
                        ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;