import React, { useEffect, useState, useContext } from "react"
import { Context } from "../store/appContext"
import { Card } from "./Cards.jsx"
import {FoodList} from ".FoodList.jsx"

const RecipesbyFood = () => {
  const [foodData, setFoodData] = useState([])
  const { store, actions } = useContext(Context)

  useEffect(() => {
    console.log("foods", store.RecipesbyFood.foods)
  }, [store.RecipesbyFood])

  return (
      <main>
          {store.recipesbyFood.foods && store.recipesbyFood.foods.map((food, index) => {
            return (
                 <Food/>
              )
          })}     
      </main>
      
  )
}

export default RecipesbyFood