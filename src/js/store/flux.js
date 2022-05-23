const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      recipesbyCategory: [],
     FoodList:[]
    },
    actions: {
      getCategories: () => {
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
          .then((response) => response.json())
          .then((result) => {
            setStore({ recipesbyCategory: result });
          })
          .catch((error) => console.log("error", error));
      },
      
        getFoodList: (id,name) => {
          fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
            .then((response) => response.json())
            .then((result) => {
              setStore({ FoodList: result });
            })
            .catch((error) => console.log("error", error));
        },

      
    },
  }
}

export default getState;
