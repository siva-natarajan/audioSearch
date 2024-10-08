import React, { useState } from 'react';
import './homePage.css';

const HomePage = () => {
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    setSubmittedValue(inputValue);
  };

  return (
    <div className="homePageContainer">
      <div className="searchArea">
        <input
          title="Enter voice input"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter Voice input"
        />
        <button onClick={handleSubmit}>
          {' '}
          {}
          <img src="/images/voice.png" alt="Voice input" />
        </button>
      </div>
      {submittedValue && (
        <div className="resultBox">
          <p>{submittedValue}</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
