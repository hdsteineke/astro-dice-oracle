import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import DetailPage from './DetailPage';
import AskTheOracle from './AskTheOracle';


function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AskTheOracle />}/>
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
