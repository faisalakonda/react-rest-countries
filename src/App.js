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
      <nav className='manu'>
      <a href="/home">Home</a>
    <a href="/shop">Shop</a>
    <a href="/about">About</a>
      </nav>
      <div className='country-container'>
        {
          countries.map(country => <Country country={country}key={country.cca3}></Country>)
        }
      </div>
    </div>
  )
}

function Country(props){
  const {continents, name, capital, population, timezones, flags} = props.country
  return(
    <div className='container'>
      <h2>Continents: {continents}</h2>
      <img src={flags.png} alt="" />
      <h3>Country: {name.common}</h3>
     <h4>Capital: {capital}</h4>
     <h5>Populations: {population}</h5>
     <h6>Time Zone: {timezones}</h6> 
    </div>
  )
}
export default App;
