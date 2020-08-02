import React, { Component } from "react";
import RecipeDetails from "./RecipeDetails";

class Recipe extends Component  {

    state={
        show:false
    }
 
  render(){
    const { label, image, url, ingredients } = this.props.recipe.recipe;
    return (
        <div className="recipe">
          <h2>{label}</h2>
          <img src={image} alt={label} />
          <a href={url} target="_blank" rel="noopener noreferrer">
            URL
          </a>
          <button onClick={() => this.setState({show:!this.state.show})}>Ingredients</button>
          {this.state.show && <RecipeDetails ingredients={ingredients} />}
        </div>
      );

  }
 
};

export default Recipe;
