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
        </>
    );
};

