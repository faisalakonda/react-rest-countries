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
    .then(data=>console.log(data))
  },[])
  return (
    <div>
      <h3>Visiting every country of the world</h3>
    </div>
  )
}

export default App;
