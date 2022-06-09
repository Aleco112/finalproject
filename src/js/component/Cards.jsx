import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext.js";
import RecipesbyCategory from "./RecipesByCategory.jsx";
import { Navbar } from "./navbar";

export const Card = () => {

  const { store, actions } = useContext(Context)
  console.log(store)
  return (
    <>
    <div id="contentBody">
      <div class="container">
        <div class="categories-listing">
          <h1>Categories</h1>
          <div class="cat-list">
            {store.recipesbyCategory.categories &&
            store.recipesbyCategory.categories.map((categoryData, index) => {
              return (
                <div key={index} className="card" style={{ width: "18rem" }}>
                  <h2>{categoryData.strCategory}</h2>
                  <img src={categoryData.strCategoryThumb} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title"></h5>
                    <Link to={`categories/`+categoryData.idCategory}> 
                    <button 
                    onClick={()=>
                    {
                      actions.getFoodList(categoryData.idCategory,categoryData.strCategory)

                    }} className="btn btn-primary">See all recipes </button></Link>
                  </div>

                </div>)
            })}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

