import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
     <LoadCountries></LoadCountries> 
    </div>
  );
}
function LoadCountries(){
  const [countries, setCountries] = useState([]);
  useEffect( ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>setCountries(data))
  },[])
  return (
    <div>
      <h1>Visiting every country of the world</h1>
      <h3>Available countries: {countries.length}</h3>
      {
        countries.map(country => <Country name={country.name.common} continents={country.continents} capital={country.capital}></Country>)
      }
    </div>
  )
}

function Country(props){
  return(
    <div className='container'>
      <h2>Continents: {props.continents
}
</h2>
      <h3>Country: {props.name}</h3>
     <h4>Capital: {props.capital}</h4> 
    </div>
  )
}
export default App;
