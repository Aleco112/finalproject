import React from "react";

import Recipes  from "./RecipesByCategory.jsx";
import { FirebaseApp } from "@firebase/app";
import { getAuth,signOut } from "firebase/auth";

const auth=getAuth(FirebaseApp);

const Home = () => {
  return <div className="text-center mt-5">Hello Sesion Iniciada
  <Button onClick={()=> signOut(auth)}>Cerrar sesion</Button>

  </div>
};
export default Home;

///CODIGO PARA MOSTRAR QUE LA SESION ESTA INICIADA Y PARA CERRAR SESION