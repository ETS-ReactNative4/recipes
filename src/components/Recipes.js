import React from 'react';
import { Link } from "react-router-dom";
const Recipes = props =>(
    <div className="container">
    <div className="row">
    {props.recipes1.map((r)=>{
    return(
       <div key={r.title} className="col-md-4" style={{ marginBottom:"2rem"}}>
         <div className="recipes__box">
          <img
            className="recipes_box-img"
            src={r.image_url}
            alt={r.title}/>
            <div className="recipe__text">
               <h5 className="recipes__title">
                 {r.title.length<20 ? `${r.title}`:`${r.title.substring(0,25)}...`}</h5>
               <p className="recipes__subtitle">Publisher: <span>
                 {r.publisher}
               </span> </p>
            </div>
            <button className="recipe_buttons">
            <Link to={{
              pathname:`/recipe/${r.recipe_id}`,
              state: {recipe: r.title}
          }}>view</Link>
            </button>
          </div>
         </div>
    );

    }
    )}


    </div>
    </div>
)

export default Recipes;
