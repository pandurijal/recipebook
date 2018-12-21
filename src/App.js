import React, { Component } from "react";
import Search from "./components/Search";
import Recipes from "./components/Recipes";
import "./App.css";

const API_KEY = "b6aef83e8433051ffdd6be59d1774cf6";

class App extends Component {
  state = {
    recipes: []
  };

  getRecipes = async e => {
    const getRecipes = e.target.elements.inputRecipes.value;
    e.preventDefault();
    const api_call = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${getRecipes}&count=6`
    );
    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
    console.log(this.state);
  };

  render() {
    return (
      <div className="App">
        <Search searchRecipes={this.getRecipes} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
