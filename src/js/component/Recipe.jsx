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
      <Navbar />
      {store.recipe.meals &&
        store.recipe.meals.map((ndata, index) => {
          return (
            <div key={index} className="img-fluid rounded-circle ms-2" style={{ width: "30rem" }}>
              <img src={ndata.strMealThumb} className="img-fluid rounded-circle ms-2" />
              <h5 className="card-title">{ndata.strMeal}</h5>
              <ul>
                {ndata.strIngredient1} {ndata.strMeasure1}
                {ndata.strIngredient2} {ndata.strMeasure2}
                {ndata.strIngredient3} {ndata.strMeasure3}
                {ndata.strIngredient4} {ndata.strMeasure4}
                {ndata.strIngredient5} {ndata.strMeasure5}
                {ndata.strIngredient6} {ndata.strMeasure6}
                {ndata.strIngredient7} {ndata.strMeasure7}
                {ndata.strIngredient8} {ndata.strMeasure8}
                {ndata.strIngredient9} {ndata.strMeasure9}
                {ndata.strIngredient10} {ndata.strMeasure10}
                {ndata.strIngredient11} {ndata.strMeasure11}
                {ndata.strIngredient12} {ndata.strMeasure12}
                {ndata.strIngredient13} {ndata.strMeasure13}
                {ndata.strIngredient14} {ndata.strMeasure14}
                {ndata.strIngredient15} {ndata.strMeasure15}
                {ndata.strIngredient16} {ndata.strMeasure16}
                {ndata.strIngredient17} {ndata.strMeasure17}
                {ndata.strIngredient18} {ndata.strMeasure18}
                {ndata.strIngredient20} {ndata.strMeasure20}
              </ul>
             <p>{ndata.strInstructions}</p>
             <span>Tags:{ndata.strTags}</span>    
            </div>


          )
        })

      }
    </>
  )
}

