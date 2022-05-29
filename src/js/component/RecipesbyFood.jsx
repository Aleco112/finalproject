import React, { useEffect, useState, useContext } from "react"
import { Context } from "../store/appContext"
import { Card } from "./Cards.jsx"
import { FoodList } from "../component/FoodList.jsx"
import { useParams } from "react-router"

const RecipesbyFood = () => {
  const [foodData, setFoodData] = useState([])
  const { store, actions } = useContext(Context)
  console.log(store)
  

  return (
    <main>
      {store.recipesbyFood.foods && store.recipesbyFood.foods.map((food, index) => {
        return (
          <p>holamundo</p>
        )
      })}
    </main>

  )
}

export default RecipesbyFood
