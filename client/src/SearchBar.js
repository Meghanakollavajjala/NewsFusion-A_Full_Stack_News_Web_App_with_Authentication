import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');

  // Voice recognition
  const handleVoiceSearch = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Your browser does not support voice recognition.');
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();

    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript;
      setInput(speechResult);
      onSearch(speechResult);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error', event.error);
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Search news by text or voice..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: '10px', width: '80%' }}
      />
      <button type="submit" style={{ padding: '10px' }}>
        Search
      </button>
      <button
        type="button"
        onClick={handleVoiceSearch}
        style={{ padding: '10px', marginLeft: '10px' }}
        title="Voice Search"
      >
        🎤
      </button>
    </form>
  );
};

export default SearchBar;
