import React, { useState } from "react";
import "./App.css";
import lists from "./Data.jsx";
// Assuming the list of companies is stored in a separate file named 'companies.js'
// Make sure to replace './companies' with the correct path to your file

const SearchCompany = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = () => {
    // Search for the company in the list
    const result = lists.find((list) =>
      list.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    setSearchResult(result);
    const showResult = document.querySelector(".result");
    const container = document.querySelector(".container");
    container.style.display = "block";
    showResult.style.display = "block";
  };

  return (
    <>
      <div>
        <h1 className="title">Lista firm importujących zboże z Ukrainy</h1>
        <input
          className="search"
          type="text"
          placeholder="Wpisz nazwę firmy..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="search-button"
          onClick={handleSearch}
          disabled={!searchTerm}
        >
          Szukaj
        </button>
        <div className="container">
          {searchResult ? (
            <p>Znaleziono firmę : {searchResult}</p>
          ) : (
            <p className="result">Brak takiej firmy na liście!</p>
          )}
        </div>
        <p className="frame">Lista wszystkich firm:</p>

        <div className="result-table">
          <ul>
            {lists.map((list) => (
              <li>{list}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SearchCompany;
