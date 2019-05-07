import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";
import Recipes from "./components/Recipes.js";
const API_KEY ="05ec94f6df94fabd47915b1af892ffac";

class App extends Component {
 state = { recipes : [],
  /// recipeID
 }
  getRecipe = async(event) => {
    event.preventDefault();
    const recipeName = event.target.elements.recipeName.value;
      const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=5`);

     const data = await api_call.json();
     this.setState({ recipes: data.recipes});

     console.log(this.state.recipes);
  }
  componentDidMount = () => {
    if (localStorage.getItem("recipes")){
    const json =localStorage.getItem("recipes");
    const recipes =JSON.parse(json);
    this.setState({ recipes:recipes});}
  }
  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
       <Recipes recipes1= {this.state.recipes}/>

       </div>
    );
  }
}

export default App;
