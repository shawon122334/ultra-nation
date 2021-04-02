import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Components/Country/Country';


function App() {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.log(error))
  }, [])
  return (
    <div className="App">
      <h2>total country : {countries.length}</h2>

      {countries.map(country => <Country country={country}></Country> )}

      
    </div>
  );
}

export default App;
