import React from "react";
import "../../styles/home.css";
import Recipes  from "./RecipesByCategory.jsx";
import { getAuth,signOut } from "firebase/auth";
import { FirebaseApp } from "@firebase/app";
const auth=getAuth(FirebaseApp);

const Home = () => {
  return <div className="text-center mt-5">Hello Sesion Iniciada
  <Button onClick={()=> signOut(auth)}>Cerrar sesion</Button>
  </div>
};
export default Home;

///CODIGO PARA MOSTRAR QUE LA SESION ESTA INICIADA Y PARA CERRAR SESION