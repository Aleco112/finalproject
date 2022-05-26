import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { Footer } from "./component/footer";
import RecipesByCategory from "./component/RecipesByCategory.jsx";
import {Login}  from "./component/Login.jsx";
import {FoodList} from "./component/FoodList.jsx";
import {SignUp} from "./component/Signup.jsx"
import RecipesbyFood from "./component/RecipesbyFood.jsx";
//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          
          <Switch>
            <Route exact path="/">
              <SignUp/>
            </Route>
            <Route exact path="/login">
              <Login/>
            </Route>
            <Route exact path="/home">
              <Home/>
            </Route>
            <Route exact path="/categories">
              <RecipesByCategory />
            </Route>
            <Route exact path="/recipe/:theid">
              <RecipesbyFood/>
            </Route>
            <Route exact path="/categories/:theid">
              <FoodList />
            </Route>
            <Route exact path="/demo">
              <Demo />
            </Route>
            <Route exact path="/single/:theid">
              <Single />
            </Route>
            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
