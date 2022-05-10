import React, { useEffect, useState, useContext } from "react"
import { Context } from "../store/appContext"

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
              <p key={index}>{recipe.strCategory}</p>
            )
          })}     
      </main>
      
  )
}

export default RecipesbyCategory
