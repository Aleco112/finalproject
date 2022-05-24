import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import fireBaseConfig from "../index.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const SignUp = () => {
  const [currentUser, setCurrentUser] = useState(null);   
  const history=useHistory() 
  const handleSubmit = (e) => {
    e.preventDefault();    
    const { email, password } = e.target.elements;
    try {
     return createUserWithEmailAndPassword(getAuth(), email.value, password.value);      
      
    } catch (error) {
      alert(error);
    }
  };
 /* if (currentUser) {
      return history.push("/login")
  }*/
  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label for="email">Email</label>
        <input type="email" name="email" placeholder="Email" />
        <label for="password">Password</label>
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

