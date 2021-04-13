import React, { useState } from "react";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");
  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(term);
  };
  return (
    <div className="ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Video search</label>
          <input
            type="text"
            onChange={(e) => setTerm(e.target.value)}
            value={term}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
