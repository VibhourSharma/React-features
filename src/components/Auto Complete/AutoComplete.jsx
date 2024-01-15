import React, { useState } from "react";
import "./Autocomplete.css";

const Autocomplete = () => {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const suggestions = [
    "Apple",
    "Banana",
    "Orange",
    "Grapes",
    "Pineapple",
    "Strawberry",
    "Watermelon",
    "Mango",
    "Kiwi",
    "Peach",
    "Pear",
    "Cherry",
    "Blueberry",
    "Raspberry",
    "Blackberry",
    "Avocado",
    "Pomegranate",
    "Plum",
    "Apricot",
  ];

  const handleChange = (event) => {
    const input = event.target.value;
    setInputValue(input);
    const filtered = suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredSuggestions(filtered);
  };

  const handleSelect = (selectedSuggestion) => {
    setInputValue(selectedSuggestion);
    setFilteredSuggestions([]);
  };

  return (
    <div className="autocomplete-container">
      <h3>/ Auto Complete </h3>
      <div className="autocomplete">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Type to search..."
        />
        <ul>
          {filteredSuggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSelect(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Autocomplete;
