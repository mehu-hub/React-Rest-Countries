import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() { 
  return (
    <div className="App">
      <Countires></Countires>
    </div>
  );
}


function Countires() {
  
  const [countries, setCountries] = useState([]); 
  useEffect(() => {
    const url = 'https://restcountries.com/v3.1/all'
    fetch(url)
      .then(res => res.json())
      .then(data => setCountries(data))

  }, [])

  return (
    <div>
      <h2>Visiting Every Country of the World</h2>
      <h4>Avilable Country: {countries.length}</h4>
      {
        countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
      }
    </div>
  )
}


function Country(props){
  return(
    <div>
      <h2>{props.name}</h2>
      <h4>{props.population}</h4>
    </div>
  )
}
export default App;
