import React, { Component } from "react";
import { Link } from "react-router-dom";

const Recipes = ({ recipes }) => {
  return (
    <div className="container">
      <div className="row">
        {recipes.map(recipe => {
          return (
            <div className="col-md-4" key={recipe.recipe_id}>
              <div className="recipes-box">
                <div className="img-box">
                  <img src={recipe.image_url} />
                </div>
                <div className="content-box">
                  <h4>
                    {recipe.title.length < 20
                      ? `${recipe.title}`
                      : `${recipe.title.substring(0, 25)}...`}
                  </h4>
                  <h5>Publisher: {recipe.publisher}</h5>
                  <button className="btn">
                    <Link
                      to={{
                        pathname: `/recipe/${recipe.recipe_id}`,
                        state: { title: recipe.title }
                      }}
                    >
                      View Recipe
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recipes;
