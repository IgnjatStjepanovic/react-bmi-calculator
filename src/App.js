import './App.css';
import { useEffect, useState } from 'react';

function App() {  
    const [weight, setWeight]=useState(0);
    const [height, setHeight]=useState(0);
    const [bmi, setBMI]=useState(0);

    function handleWeight (e) {
      let w = e.target.value;
      setWeight(w);
    }

    function handleHeight (e) {
      let h = e.target.value;
      setHeight(h);
    }

    useEffect (() => {
      let bmi1 = (weight/(height*2))*100;
      setBMI(bmi1.toFixed(2));      
    }, [height, weight])

    return (
    <div className="App">
      <h1>BMI CALCULATOR</h1>
      <p>WEIGHT in kg</p><input type="number" placeholder="Enter your weight here" onChange={handleWeight}></input>
      <p>HEIGHT in cm</p><input type="number" placeholder="Enter your height here" onChange={handleHeight}></input>
      <h2>BMI : {bmi}</h2>
    </div>
  );
}

export default App;
