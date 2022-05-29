import React,{useContext,useEffect} from 'react';
import { useHistory,useParams,Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Navbar } from "./navbar";

export const  Recipe=()=> {
    const { store, actions } = useContext(Context)
    let { theid } = useParams();
    useEffect(() => {
     actions.getRecipe(theid)
      console.log("recipe",store.recipe)
    }, [])
  return (
    <>
     <Navbar/>
     {store.recipe.meals &&
     store.recipe.meals.map((ndata,index)=>{
         return(
            <div key={index} className="card" style={{ width: "18rem" }}>
           
              <h5 className="card-title">{ndata.strMeal}  </h5>
              <p>{ndata.strIngredient1}</p>
              {ndata.strIngredient16 !== "" && <p>Ingrediente: {ndata.strIngredient16}</p>}
            </div>

         
         )
     })

     }
    </>
  )
}

