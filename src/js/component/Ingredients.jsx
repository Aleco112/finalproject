import React,{useContext,useEffect} from 'react';
import { useHistory,useParams,Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Navbar } from "./navbar";

export const Ingredients=()=> {
    const { store, actions } = useContext(Context)
    let { id } = useParams();
    useEffect(() => {
     actions.getRecipe(id)
      console.log("recipe",store.recipe)
    }, [])
  return (
    <>
     <Navbar/>
     {store.Ingredients.meals &&
     store.Ingredients.meals.map((ndata,index)=>{
         return(
            <div key={index} className="card" style={{ width: "18rem" }}>
           
              <h5 className="card-title">{ndata.strIngredient}  </h5>
              
            </div>

         
         )
     })

     }
    </>
  )
}

