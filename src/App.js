import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [country,setCountry] = useState([])
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response=>response.json())
    .then(data=>setCountry(data))
  },[])
  return (
    <div className="App">
      <h2>total country : {country.length}</h2>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
