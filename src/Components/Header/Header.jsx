import React from "react";
import "./header.css";

const Header = ({ handleChange, handleSubmit }) => {
  return (
    <header>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default Header;
