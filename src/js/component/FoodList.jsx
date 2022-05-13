import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext.js";
import RecipesbyCategory from "./RecipesByCategory.jsx";
import RecipesbyFood from "./RecipesbyFood.jsx";


export const List = () => {
  
    const { store, actions } = useContext(Context)
console.log(store.recipesbyFood)
    return (
        <>   
    {store.recipesbyFood &&
    store.recipesbyFood.map((foodData,index)=>{
        console.log (foodData)
    })}
 <div className="card" style="width: 18rem;">
  <img  src="..." className={foodData.strMealThumb} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{foodData.strMeal}</h5>
    <Link to="/">  <button  className="btn btn-primary">Take me to the recipe </button> </Link>
  </div>
</div>
        </>
 );
};

