import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext.js";
import RecipesbyCategory from "./RecipesByCategory.jsx";


export const Card = () => {

  const { store, actions } = useContext(Context)
  return (
    <>
      {store.recipesbyCategory.categories &&
        store.recipesbyCategory.categories.map((categoryData, index) => {
          return (
            <div key={index} className="card" style={{ width: "18rem" }}>
              <img src={categoryData.strCategoryThumb} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{categoryData.strCategory}</h5>
                <Link to={`categories/${categoryData.strCategory}`}> <button className="btn btn-primary">See all recipes </button></Link>
              </div>

            </div>)
        })}


    </>
  );
};

