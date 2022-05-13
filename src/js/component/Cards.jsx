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
    <div className="card" style={{width: "18rem"}}>
  <img src="categoryData./images/media/meals/llcbn01574260722.jpg/preview" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{categoryData.strCategory}</h5>
    <Link to="/"> <button className="btn btn-primary">See all recipes </button></Link>
      </div>

</div>
        </>
 );
};

