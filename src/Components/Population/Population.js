import React from 'react';

const Population = (props) => {
    // console.log(props.add);
    const add = props.add;
    // let totalPopulation=0;
    // for (let i = 0; i < add.length; i++) {
    //     const country = add[i];
    //     totalPopulation=totalPopulation+country.population; }
    const totalPopulation= add.reduce((sum,country)=>sum+country.population,0)
        
    
    return (
        <div>
            <h2>This is population : {totalPopulation}</h2>
        </div>
    );
};

export default Population;