import './App.css';
import { useState, useEffect } from 'react';
import PlanetDie from './Dice/PlanetDie';

function App() {
  const [question, setQuestion] = useState('');
  const [planetDie, setPlanetDie] = useState('♂');
  const [zodiacDie, setZodiacDie] = useState('♈︎');
  const [houseDie, setHouseDie] = useState(1);


  function handlePlanetDie() {
    let planetResult = Math.ceil(Math.random() * 12);
    if (planetResult === 1) {
      planetResult = '♂'
    } else if (planetResult === 2) {
      planetResult = '♀'
    } else if (planetResult === 3) {
      planetResult = '☿'
    } else if (planetResult === 4) {
      planetResult = '☽'
    } else if (planetResult === 5) {
      planetResult = '☉'
    } else if (planetResult === 6) {
      planetResult = '☊'
    } else if (planetResult === 7) {
      planetResult = '☋'
    } else if (planetResult === 8) {
      planetResult = '♇'
    } else if (planetResult === 9) {
      planetResult = '♃'
    } else if (planetResult === 10) {
      planetResult = '♄'
    } else if (planetResult === 11) {
      planetResult = '♅'
    } else if (planetResult === 12) {
      planetResult = '♆'
    }
    setPlanetDie(planetResult);
  }
  function handleZodiacDie() {
    let zodiacResult = Math.ceil(Math.random() * 12);
    if (zodiacResult === 1) {
      zodiacResult = '♈︎'
    } else if (zodiacResult === 2) {
      zodiacResult = '♉︎'
    } else if (zodiacResult === 3) {
      zodiacResult = '♊︎'
    } else if (zodiacResult === 4) {
      zodiacResult = '♋︎'
    } else if (zodiacResult === 5) {
      zodiacResult = '♌︎'
    } else if (zodiacResult === 6) {
      zodiacResult = '♍︎'
    } else if (zodiacResult === 7) {
      zodiacResult = '♎︎'
    } else if (zodiacResult === 8) {
      zodiacResult = '♏︎'
    } else if (zodiacResult === 9) {
      zodiacResult = '♐︎'
    } else if (zodiacResult === 10) {
      zodiacResult = '♑︎'
    } else if (zodiacResult === 11) {
      zodiacResult = '♒︎'
    } else if (zodiacResult === 12) {
      zodiacResult = '♓︎'
    }
    setZodiacDie(zodiacResult);
  }

  function handleHouseDie() {
    let houseResult = Math.ceil(Math.random() * 12);
    setHouseDie(houseResult);
  }

  function handleRollDice() {
    handlePlanetDie();
    handleZodiacDie();
    handleHouseDie();
  }
  return (
    <div className="App">
      <h1>Consult the Oracle:</h1>
      <section className="ask-the-oracle">
        <label>
          Ask a question: 
        </label>
        <input value={question} onChange={e => setQuestion(e.target.value)}></input>
        <div className="dice-container">
          <div className="zodiac-dice">{planetDie}</div>
          <div className="zodiac-dice">{zodiacDie}</div>
          <div className="zodiac-dice">{houseDie}</div>
        </div>
         <button onClick={() => handleRollDice()}>Roll the dice</button>
      </section>
      <section className="horoscope-template">
        <h3>{question}</h3>
        
      </section>
      <button>Reset</button>
    </div>
  );
}

export default App;
