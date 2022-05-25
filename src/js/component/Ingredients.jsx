import React,{useContext} from 'react';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Navbar } from "./navbar";

export const Ingredients=()=> {
    const { store, actions } = useContext(Context)
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

