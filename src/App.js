import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Consult the Oracle:</h1>
      <section className="ask-the-oracle">
        <label>
          Ask a question: 
        </label>
        <input type="text"></input>
        <div className="dice-container">
          <div className="zodiac-dice">Zodiac</div>
          <div className="zodiac-dice">Planet</div>
          <div className="zodiac-dice">House</div>
        </div>
        <button>Roll the dice</button>
      </section>
      <section className="horoscope-template">
        <p>There once was a <span>______</span> that lived in the sky and fell in love with a <span>______</span>. He decided he loved it so much he wanted to live there and build his own <span>______</span>.
        </p>
      </section>
      <section className="horoscope-log">
        <div className="horoscope-entry">One</div>
        <div className="horoscope-entry">Two</div>
        <div className="horoscope-entry">Three</div>
      </section>
    </div>
  );
}

export default App;
