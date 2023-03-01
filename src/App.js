import './App.css';
import { useState, useEffect } from 'react';
import PlanetDie from './Die/PlanetDie';

function App() {
  const [question, setQuestion] = useState('');
  const [planetDie, setPlanetDie] = useState(1);

  // useEffect(() => {
  //   setPlanetDie(planetDie);
  // }, [])

  // function handleDiceRoll() {
  //   const result = Math.floor(Math.random() * 12);
  //   console.log('result', result);
  //   setPlanetDie(result);
  // }

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
        <button onClick={ () => setPlanetDie(Math.floor(Math.random() * 12))}>Roll the dice</button>
      </section>
      <section className="horoscope-template">
        <h3>{question}</h3>
        
      </section>
      <button>Reset</button>
    </div>
  );
}

export default App;
