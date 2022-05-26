import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext.js";
import RecipesbyCategory from "./RecipesByCategory.jsx";
import RecipesbyFood from "./RecipesbyFood.jsx";
import { useParams,Link } from "react-router-dom";



export const FoodList = () => {     

    const { store, actions } = useContext(Context)
    let { foodtype } = useParams();
    console.log(store)
    return (
        <>
        <h1>{foodtype}</h1>
            {store.FoodList.meals &&
                store.FoodList.meals.map((foodData, index) => {
                    return(
                    <div key={index} className="card" style={{width:"18rem"}}>
                    <img src={foodData.strMealThumb} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{foodData.strMeal}</h5>
                        <Link to={"/recipe/"+foodData.idMeal}>  <button className="btn btn-primary">Take me to the recipe </button> </Link>
                    </div>
                </div>
                    )
                })}
           
        </>
    );
};

////use history and onclick in the button, inside the onclick the actions on flux to get the recipe, 
//after the call the action you going to send to the page instead to use link, use use history (Contactlist)

