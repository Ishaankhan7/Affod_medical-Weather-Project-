import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        required 
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;