import { useEffect, useState } from 'react';
import HoroscopeComponent from './HoroscopeComponent';
import { getHoroscopes } from './services/fetch-utils';


export default function ListPage() {
  const [horoscopeCollection, setHoroscopeCollection] = useState([]);

  useEffect(() => {
    async function fetch() {
      const horoscopeData = await getHoroscopes();
      console.log('horoscopeData', horoscopeData);
      setHoroscopeCollection(horoscopeData);
    }
    fetch();
  }, []);

  return (
    <div>THIS IS A LIST PAGE!!!
      {horoscopeCollection.map(horoscope => 
        <HoroscopeComponent key={horoscope.dice} horoscope={horoscope} />
      )}
    </div>
  );
}