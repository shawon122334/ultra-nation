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

  const [add,setAdd]=useState([]);
  const handleAdd =(country)=>{
    console.log('button is clicked',country);
  }
  return (
    <div className="App">
      <h2>total country : {countries.length}</h2>
      <h2>Country Addeded: </h2>
      {countries.map(country => <Country handleAdd={handleAdd} country={country}></Country> )}

      
    </div>
  );
}

export default App;
