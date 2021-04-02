import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Components/Country/Country';
import Population from './Components/Population/Population';


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
    // console.log('button is clicked',country);
    const newAdd = [...add,country];
    setAdd(newAdd);
  }
  return (
    <div className="App">
      <h2>total country : {countries.length}</h2>
      <h2>Country Added: {add.length} </h2>
      <Population add={add}></Population>
      
      
      {countries.map(country => <Country handleAdd={handleAdd} country={country}></Country> )}

      
    </div>
  );
}

export default App;
