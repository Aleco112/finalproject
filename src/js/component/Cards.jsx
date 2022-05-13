import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext.js";
import RecipesbyCategory from "./RecipesByCategory.jsx";


export const Card = () => {
  
    const { store, actions } = useContext(Context)
console.log(store.recipesbyCategory)
    return (
        <>   
    {store.recipesbyCategory &&
    store.recipesbyCategory.map((categoryData,index)=>{
        console.log (categoryData)
    })}
    <div class="card" style="width: 18rem;">
  <img src="{categoryData./images/media/meals/llcbn01574260722.jpg/preview" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{categoryData.strCategory}</h5>
    <Link to="/" <a href="#" class="btn btn-primary">See all recipes</a> <Link/>
  </div>
</div>
        </>
 );
};

