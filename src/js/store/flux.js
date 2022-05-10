const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      recipesbyCategory: [],
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
    },
  };
};

export default getState;
