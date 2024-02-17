import React, { useState } from 'react';

// Assuming the list of companies is stored in a separate file named 'companies.js'
import lists  from './Data.jsx'; // Make sure to replace './companies' with the correct path to your file

const SearchCompany = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = () => {
    // Search for the company in the list
    const result = lists.find(list =>
      list.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResult(result);
  };

  return (
    <div>
        <h1>Lista firm importujących zboże z Ukrainy</h1>
      <input 
        type="text"
        placeholder="Wpisz nazwe firmy..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Szukaj</button>
      <div>
        {searchResult ? (
          <p>Znaleziono firme: {searchResult}</p>
        ) : (
          <p>Brak takiej firmy na liscie!</p>
        )}
      </div>
    </div>
  );
};

export default SearchCompany;
