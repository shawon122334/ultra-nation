import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name,population,capital,flag,region}=props.country;
    return (
        <div className="country">
            <img src={flag} alt=""/>
            <h2>Country Name : {name}</h2>
            <h5>Population is : {population}</h5>
            <h5>Capital Name is : {capital}</h5>
            <h5>Region is : {region}</h5>
            <button onClick={()=>props.handleAdd(props.country)}>Add Country </button>
        </div>
    );
};

export default Country;