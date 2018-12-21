import React, { Component } from "react";

const Search = ({ searchRecipes }) => {
  return (
    <form onSubmit={searchRecipes}>
      <input type="text" name="inputRecipes" />
    </form>
  );
};

export default Search;
