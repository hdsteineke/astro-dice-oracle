import './App.css';
import { useState, useEffect } from 'react';
// import PlanetDie from './Dice/PlanetDie';
import { getHoroscopes } from './services/fetch-utils';
import ListPage from './ListPage';


function App() {
  const [question, setQuestion] = useState('');
  const [planetDie, setPlanetDie] = useState('♂');
  const [planetHoroscope, setPlanetHoroscope] = useState('');
  const [zodiacDie, setZodiacDie] = useState('♈︎');
  const [zodiacHoroscope, setZodiacHoroscope] = useState('');
  const [houseDie, setHouseDie] = useState(1);
  const [houseHoroscope, setHouseHoroscope] = useState('');
  // const [horoscopeCollection, setHoroscopeCollection] = useState([]);


  // useEffect(() => {
  //   async function fetch() {
  //     const horoscopeData = await getHoroscopes();

  //     setHoroscopeCollection(horoscopeData);
  //   }
  //   fetch();

    
  // }, []);

  // fetch()


  function handlePlanetDie() {
    let planetResult = Math.ceil(Math.random() * 12);
    let planetText = ''
    if (planetResult === 1) {
      planetResult = '♂';
      planetText = 'Take action'
    } else if (planetResult === 2) {
      planetResult = '♀';
      planetText = 'Receive'
    } else if (planetResult === 3) {
      planetResult = '☿';
      planetText = 'Communicate';
    } else if (planetResult === 4) {
      planetResult = '☽';
      planetText = 'Rest';
    } else if (planetResult === 5) {
      planetResult = '☉';
      planetText = 'Awaken';
    } else if (planetResult === 6) {
      planetResult = '☊';
      planetText = 'Align';
    } else if (planetResult === 7) {
      planetResult = '☋';
      planetText = 'Realign';
    } else if (planetResult === 8) {
      planetResult = '♇';
      planetText = 'Release';
    } else if (planetResult === 9) {
      planetResult = '♃';
      planetText = 'Expand';
    } else if (planetResult === 10) {
      planetResult = '♄';
      planetText = 'Commit';
    } else if (planetResult === 11) {
      planetResult = '♅';
      planetText = 'Innovate';
    } else if (planetResult === 12) {
      planetResult = '♆';
      planetText = 'Dream';
    }
    setPlanetDie(planetResult);
    setPlanetHoroscope(planetText);
  }
  function handleZodiacDie() {
    let zodiacResult = Math.ceil(Math.random() * 12);
    let zodiacText =''
    if (zodiacResult === 1) {
      zodiacResult = '♈︎';
      zodiacText = 'Empowerment';
    } else if (zodiacResult === 2) {
      zodiacResult = '♉︎';
      zodiacText = 'Investment';
    } else if (zodiacResult === 3) {
      zodiacResult = '♊︎';
      zodiacText = 'Curiosity';
    } else if (zodiacResult === 4) {
      zodiacResult = '♋︎';
      zodiacText = 'Care';
    } else if (zodiacResult === 5) {
      zodiacResult = '♌︎';
      zodiacText = 'Expression';
    } else if (zodiacResult === 6) {
      zodiacResult = '♍︎';
      zodiacText = 'Refinement';
    } else if (zodiacResult === 7) {
      zodiacResult = '♎︎';
      zodiacText = 'Collaboration';
    } else if (zodiacResult === 8) {
      zodiacResult = '♏︎';
      zodiacText = 'Loyalty';
    } else if (zodiacResult === 9) {
      zodiacResult = '♐︎';
      zodiacText = 'Quest';
    } else if (zodiacResult === 10) {
      zodiacResult = '♑︎';
      zodiacText = 'Mastery';
    } else if (zodiacResult === 11) {
      zodiacResult = '♒︎';
      zodiacText = 'Networking';
    } else if (zodiacResult === 12) {
      zodiacResult = '♓︎';
      zodiacText = 'Healing';
    }
    setZodiacDie(zodiacResult);
    setZodiacHoroscope(zodiacText);
  }

  function handleHouseDie() {
    let houseResult = Math.ceil(Math.random() * 12);
    let houseText = '';
    if (houseResult === 1) {
      houseResult = 1;
      houseText = 'Identity';
    } else if (houseResult === 2) {
      houseResult = 2;
      houseText = 'Resources';
    } else if (houseResult === 3) {
      houseResult = 3;
      houseText = 'Local Community';
    } else if (houseResult === 4) {
      houseResult = 4;
      houseText = 'Sense of Belonging';
    } else if (houseResult === 5) {
      houseResult = 5;
      houseText = 'Creativity';
    } else if (houseResult === 6) {
      houseResult = 6;
      houseText = 'Routines';
    } else if (houseResult === 7) {
      houseResult = 7;
      houseText = 'Partnerships + Agreements';
    } else if (houseResult === 8) {
      houseResult = 8;
      houseText = 'Transformation';
    } else if (houseResult === 9) {
      houseResult = 9;
      houseText = 'Higher Learning';
    } else if (houseResult === 10) {
      houseResult = 10;
      houseText = 'Legacy';
    } else if (houseResult === 11) {
      houseResult = 11;
      houseText = 'Interconnectedness';
    } else if (houseResult === 12) {
      houseResult = 12;
      houseText = 'Karmic Cycles';
    }
    setHouseDie(houseResult);
    setHouseHoroscope(houseText);
  }

  function handleRollDice() {
    handlePlanetDie();
    handleZodiacDie();
    handleHouseDie();
  }

  // function saveHoroscope() {

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
          <div className="zodiac-dice">{zodiacDie}</div>
          <div className="zodiac-dice">{houseDie}</div>
        </div>
        <button onClick={() => handleRollDice()}>Roll the dice</button>
      </section>

      <section className="horoscope-template">
        <h3>{question}</h3>
        <p>{planetHoroscope} {zodiacHoroscope} {houseHoroscope}</p>
        
      </section>
      <button>Save to Journal</button>
      <button>Reset</button>

      <section className="horoscope-journal">
        Saved Horoscopes Here
        <div className="horoscope-template"><ListPage /></div>
        <div className="horoscope-template">Horoscopes</div>
      </section>
    </div>
  );
}

export default App;
