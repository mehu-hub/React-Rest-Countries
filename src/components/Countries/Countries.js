import React, { useEffect, useState } from 'react';

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
            {
                countries.map(country => console.log(country))
            }
        </div>
    );
};

export default Countries;