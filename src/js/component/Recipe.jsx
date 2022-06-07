import React, { useContext, useEffect } from 'react';
import { useHistory, useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Navbar } from "./navbar";

export const Recipe = () => {
  const { store, actions } = useContext(Context)
  let { theid } = useParams();
  useEffect(() => {
    actions.getRecipe(theid)
    console.log("recipe", store.recipe)
  }, [])
  return (
    <>
      <div id="contentBody">
        <div class="container">
          <div class="view-recipe">
              {store.recipe.meals &&
              store.recipe.meals.map((ndata, index) => {
                return (
                  <div key={index} className="img-fluid rounded-circle ms-2">
                    <div class="vr-img">
                      <img src={ndata.strMealThumb} className="img-fluid rounded-circle ms-2" />
                    </div>
                    <div class="vr-content">
                      <div>
                        <h1 className="card-title">{ndata.strMeal}</h1>
                        <h3>Ingredients</h3>
                        <div class="ingredients">
                          <span>{ndata.strIngredient1} {ndata.strMeasure1}</span>
                          <span>{ndata.strIngredient2} {ndata.strMeasure2}</span>
                          <span>{ndata.strIngredient3} {ndata.strMeasure3}</span>
                          <span>{ndata.strIngredient4} {ndata.strMeasure4}</span>
                          <span>{ndata.strIngredient5} {ndata.strMeasure5}</span>
                          <span>{ndata.strIngredient6} {ndata.strMeasure6}</span>
                          <span>{ndata.strIngredient7} {ndata.strMeasure7}</span>
                          <span>{ndata.strIngredient8} {ndata.strMeasure8}</span>
                          <span>{ndata.strIngredient9} {ndata.strMeasure9}</span>
                          <span>{ndata.strIngredient10} {ndata.strMeasure10}</span>
                          <span>{ndata.strIngredient11} {ndata.strMeasure11}</span>
                          <span>{ndata.strIngredient12} {ndata.strMeasure12}</span>
                          <span>{ndata.strIngredient13} {ndata.strMeasure13}</span>
                          <span>{ndata.strIngredient14} {ndata.strMeasure14}</span>
                          <span>{ndata.strIngredient15} {ndata.strMeasure15}</span>
                          <span>{ndata.strIngredient16} {ndata.strMeasure16}</span>
                          <span>{ndata.strIngredient17} {ndata.strMeasure17}</span>
                          <span>{ndata.strIngredient18} {ndata.strMeasure18}</span>
                          <span>{ndata.strIngredient20} {ndata.strMeasure20}</span>
                        </div>
                        <h3>Instructions</h3>
                        <p>{ndata.strInstructions}</p>
                        <div class="tags">Tags: <span>{ndata.strTags}</span></div>
                      </div>
                    </div>   
                  </div>
                )
              })
              }
          </div>
        </div>
      </div>
    </>
  )
}

