import React, {useState} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import {signIn} from "../utilities/signin";
import { useHistory } from "react-router-dom";

    export const Logueo = () => {
      const history=useHistory()
      const [email, setEmail]= useState("");
      const [password , setPassword] =useState("");
      return(
<form>
  <div className="mb-3">
    <label for="exampleInputEmail1" 
    className="form-label">Email address</label>
    <input type="email" 
    className="form-control" 
    id="exampleInputEmail1" 
    aria-describedby="emailHelp"
   onChange={(event)=>{setEmail(event.target.value)}}
   value={email}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label"
    >Password</label>
    <input type="password" 
    className="form-control"
     id="exampleInputPassword1"
     onChange={(event)=>{setPassword(event.target.value)}}
   value={password}/>
     
  </div>
  
  <div className="mb-3 form-check">
    <input type="checkbox" 
    className="form-check-input" 
    id="exampleCheck1"/>

    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button onClick={(event)=>{

    if (email !=="" && password !== ""){
      signIn(email,password)
      history.push("/categories")
      event.preventDefault()
    }
  }
  }>
    signIn
 
  </button>
  
</form>
)};
