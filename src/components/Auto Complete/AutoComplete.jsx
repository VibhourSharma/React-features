import React, { useState } from "react";
import "./Autocomplete.css";

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
];

const Autocomplete = () => {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleChange = (event) => {
    const input = event.target.value;
    setInputValue(input);
    updateFilteredSuggestions(input);
  };

  const handleSelect = (selectedSuggestion) => {
    setInputValue(selectedSuggestion);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
  };

  const handleInputFocus = () => {
    setShowSuggestions(true);
  };

  const handleInputBlur = () => {
    setTimeout(() => setShowSuggestions(false), 200);
  };

  const updateFilteredSuggestions = (input) => {
    const filtered = suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredSuggestions(filtered);
    setShowSuggestions(true);
  };

  return (
    <div className="autocomplete-container">
      <h3>/ Auto Complete </h3>
      <div className="autocomplete">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          placeholder="Type to search..."
        />
        {showSuggestions && (
          <ul>
            {filteredSuggestions.map((suggestion, index) => (
              <li key={index} onClick={() => handleSelect(suggestion)}>
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Autocomplete;
