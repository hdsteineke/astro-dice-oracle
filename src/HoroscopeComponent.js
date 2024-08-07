import React from 'react';


export default function HoroscopeComponent({ horoscope }) {
  return (
    <div>
      <p>{horoscope.question}</p>
      <h3>{horoscope.dice}</h3>
      <p>{horoscope.horoscope}</p>
    </div>
  )
}