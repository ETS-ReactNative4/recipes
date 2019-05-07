import React from 'react';
import { Link } from "react-router-dom";

const API_KEY ="05ec94f6df94fabd47915b1af892ffac";
class Recipe extends React.Component{
state ={
  activeRecipe: []
}
componentDidMount = async() =>{
    const title = this.props.location.state.recipe;
    const api_call2 = await fetch
    (`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`);

   const data2 = await api_call2.json();
   this.setState({activeRecipe: data2.recipes[0]});

}
    render(){
      const recipe=this.state.activeRecipe;
      console.log(this.props);
      return(
        <div className="container">
          {this.state.activeRecipe.length !==0 &&
            <div className="active-recipe">
            <img className="active-recipe__img" src={recipe.image_url} alt={recipe.title}/>
            <h3 className="active-recipe__title">{recipe.title}</h3>
            <h4 className="active-recipe__publisher"></h4>
            publisher: <span>{recipe.publisher}</span>
            <p className="active-recipe__website">
              website : <span><a href={recipe.publisher_url}>{recipe.publisher_url}</a></span>
             </p >
             <button className="active-recipe__button"><Link to={{
               pathname:`/`
           }}>home</Link></button>
            </div>}
        </div>
      );
    }
};

export default Recipe;
