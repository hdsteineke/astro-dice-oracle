import './App.css';
import { useState, useEffect } from 'react';
import PlanetDie from './Dice/PlanetDie';

function App() {
  const [question, setQuestion] = useState('');
  const [planetDie, setPlanetDie] = useState(1);


  function handlePlanetDieRoll() {
    let result = Math.ceil(Math.random() * 12);
    if (result === 1) {
      result = '♂'
    } else if (result === 2) {
      result = '♀'
    } else if (result === 3) {
      result = '☿'
    } else if (result === 4) {
      result = '☽'
    } else if (result === 5) {
      result = '☉'
    } else if (result === 6) {
      result = '☊'
    } else if (result === 7) {
      result = '☋'
    } else if (result === 8) {
      result = '♇'
    } else if (result === 9) {
      result = '♃'
    } else if (result === 10) {
      result = '♄'
    } else if (result === 11) {
      result = '♅'
    } else if (result === 12) {
      result = '♆'
    }
    setPlanetDie(result);
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
        </div>
        <button onClick={() => handlePlanetDieRoll()}>Roll the dice</button>
      </section>
      <section className="horoscope-template">
        <h3>{question}</h3>
        
      </section>
      <button>Reset</button>
    </div>
  );
}

export default App;
