import React, { useEffect, useState, useContext } from "react"
import { Context } from "../store/appContext"
import { Card } from "./Cards.jsx"

const RecipesbyCategory = () => {
  const [categoryData, setCategoryData] = useState([])
  const { store, actions } = useContext(Context)

  useEffect(() => {
    console.log("categories", store.recipesbyCategory.categories)
  }, [store.recipesbyCategory])

  return (
      <main>
          {store.recipesbyCategory.categories && store.recipesbyCategory.categories.map((recipe, index) => {
            return (
                 <Card/>
              )
          })}     
      </main>
      
  )
}

export default RecipesbyCategory
