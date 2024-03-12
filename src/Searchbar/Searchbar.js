import React, { useState } from "react";

export default function Searcbar({onSubmit}){
    
    const [inputValue, setInputValue] = useState('');

    const submitForm = e => {
        e.preventDefault();
        onSubmit(inputValue);

        setInputValue('');
    }

  




     return(
    <header className="Searchbar">
    <form className="SearchForm" onSubmit={submitForm}>
    <button type="submit" className="SearchForm-button">
      <span className="SearchForm-button-label">Search</span>
    </button>

    <input
      className="SearchForm-input"
      type="text"
      autoComplete="off"
      value={inputValue}
      onChange={e => setInputValue(e.target.value)}
    />
  </form>
</header>
     )
}