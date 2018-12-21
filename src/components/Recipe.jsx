import React, { Component } from "react";
import "./../App.css";
const API_KEY = "b6aef83e8433051ffdd6be59d1774cf6";

class Recipe extends Component {
  state = {
    recipe: []
  };
  componentDidMount = async () => {
    const title = this.props.location.state.title;
    const req = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`
    );
    const res = await req.json();
    this.setState({ recipe: res.recipes[0] });
    console.log(this.state.recipe);
  };

  render() {
    const recipe = this.state.recipe;
    return (
      <div className="container">
        <div className="recipe-box">
          <div className="img-box">
            <img src={recipe.image_url} alt={recipe.title} />
          </div>
          <div className="content-box">
            <h4>{recipe.title}</h4>
            <h5>Publisher: {recipe.publisher}</h5>
            <button className="btn">
              <a href={recipe.source_url}>Link to Website</a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Recipe;
