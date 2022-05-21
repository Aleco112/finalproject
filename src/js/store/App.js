import React, {useState, useEffect} from "react";
import Logueo from "../component/Logueo.jsx";
import { FirebaseApp } from "@firebase/app";
import {getAuth, onAuthStateChanged} from "firebase/auth";
const auth=getAuth(FirebaseApp);

function App(){
    const [userGlobal,setUserGlobal]=userState(null);
    onAuthStateChanged(auth,(userFirebase)=>{
        if(userFirebase){
            //cod en caso de que haya sesion iniciada
            setUserGlobal(userFirebase);
        }else{
            //cod en caso de que no haya sesion inciada
            setUserGlobal(null)
        }
    })
    return <>{userGlobal ? <Home/>:<Logueo/>}</>;
}

