import './App.css';
import { useState } from 'react';

function App() {
  const [question, setQuestion] = useState('');
  const [zodiacDie, setZodiacDie] = useState('');
  const [planetDie, setPlanetDie] = useState('');
  const [houseDie, setHouseDie] = useState('');
  const [horoscope, setHoroscope] = useState('');

  async function handleDiceRoll(e) {
    e.preventDefault();
    setQuestion(e.target.value);
  }

  async function handleSaveHoroscope() {

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
          <div className="zodiac-dice">Zodiac</div>
          <div className="zodiac-dice">Planet</div>
          <div className="zodiac-dice">House</div>
        </div>
        <button onSubmit={handleDiceRoll()}>Roll the dice</button>
      </section>
      <section className="horoscope-template">
        <h3>{question}</h3>
        <p>There once was a <span>______</span> that lived in the sky and fell in love with a <span>______</span>. He decided he loved it so much he wanted to live there and build his own <span>______</span>.
        </p>
      </section>
      <section className="horoscope-log">
        <div className="horoscope-entry">
          <h4>(entry 1)</h4>
        </div>
        <div className="horoscope-entry">
          <h4>(entry 2)</h4>
        </div>
        <div className="horoscope-entry">
        <h4>(entry 3)</h4>
        </div>
      </section>
    </div>
  );
}

export default App;
