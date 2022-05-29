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
            <div key={index} className="img-fluid rounded-circle ms-2" style={{ width: "18rem" }}>
              <img src={ndata.strMealThumb} className="img-fluid rounded-circle ms-2" />
              <h5 className="card-title">{ndata.strMeal}</h5>
              <ul>
                <li>{ndata.strIngredient1} {ndata.strMeasure1}</li>
                <li>{ndata.strIngredient2} {ndata.strMeasure2}</li>
                <li>{ndata.strIngredient3} {ndata.strMeasure3}</li>
                <li>{ndata.strIngredient4} {ndata.strMeasure4}</li>
                <li>{ndata.strIngredient5} {ndata.strMeasure5}</li>
                <li>{ndata.strIngredient6} {ndata.strMeasure6}</li>
                <li>{ndata.strIngredient7} {ndata.strMeasure7}</li>
                <li>{ndata.strIngredient8} {ndata.strMeasure8}</li>
                <li>{ndata.strIngredient9} {ndata.strMeasure9}</li>
                <li>{ndata.strIngredient10} {ndata.strMeasure10}</li>
                <li>{ndata.strIngredient11} {ndata.strMeasure11}</li>
                <li>{ndata.strIngredient12} {ndata.strMeasure12}</li>
                <li>{ndata.strIngredient13} {ndata.strMeasure13}</li>
                <li>{ndata.strIngredient14} {ndata.strMeasure14}</li>
                <li>{ndata.strIngredient15} {ndata.strMeasure15}</li>
                <li>{ndata.strIngredient16} {ndata.strMeasure16}</li>
                <li>{ndata.strIngredient17} {ndata.strMeasure17}</li>
                <li>{ndata.strIngredient18} {ndata.strMeasure18}</li>
                <li>{ndata.strIngredient20} {ndata.strMeasure20}</li>
                <li>{ndata.strIngredient21} {ndata.strMeasure21}</li>
                <li>{ndata.strIngredient22} {ndata.strMeasure22}</li>

              </ul>
              <p>{ndata.strIngredient1}</p>
              {ndata.strIngredient16 !== "" && <p>Ingrediente: {ndata.strIngredient16}</p>}
            </div>


          )
        })

      }
    </>
  )
}

