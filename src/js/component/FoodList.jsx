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
                        <Link to="/">  <button className="btn btn-primary">Take me to the recipe </button> </Link>
                    </div>
                </div>
                    )
                })}
           
        </>
    );
};

