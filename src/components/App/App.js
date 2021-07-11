import React, { useState } from 'react';
import { Header } from './../Header/Header';
import { SearchBox } from '../SearchBox/SearchBox';
import { ResultsContainer } from '../ResultsContainer/ResultsContainer';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

function App() {

  const [inputText, setInputText] = useState("");
  const [headerExpanded, setHeaderExpanded] = useState(true);
  const [suggestedNames, setSuggestedNames] = useState([]);

  const handleInputChange = (input) => {
    setInputText(input);
    setHeaderExpanded(!input.length);
    setSuggestedNames(input.length ? name(input) : []);
  }

  return (
    <div className="App">
      <Header headerExpanded={headerExpanded} />
      <SearchBox onInputChange={handleInputChange} />
      <ResultsContainer suggestedNames={suggestedNames} />
    </div>
  );
}

export default App;
