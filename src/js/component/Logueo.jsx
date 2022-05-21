import React, { useState } from "react";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithRedirect, GoogleAuthProvider
} from "firebase/auth";
const googleProvider=newGoogleProvider();
export const Logueo = () => {
  const [isSignUp, setSignUp] = useState(false);
  async function submitHandler(e) {
    e.preventDefault();
    const email = e.target.staticEmail2.value;
    const password = e.target.inputPassword2.value;
    console.log(email, password);

    if (isSignUp) {
      //si se esta registrando crea cuenta
      const user = await createUserWithEmailAndPassword(getAuth(), email, password) ;
      console.log(user,email,password)
    }
    //si inicia sesion
    signInWithEmailAndPassword(getAuth(), email, password);
  }

  return (
    <form className="row g-3 " onSubmit={submitHandler}>
      <div className="col-auto">
        <label htmlFor="staticEmail2" className="visually-hidden">
          Email
        </label>
        <input
          type="text"
          className="form-control-plaintext"
          id="staticEmail2"
         
          placeholder="email"
         
        />
      </div>
      <div className="col-auto">
        <label htmlFor="inputPassword2" className="visually-hidden">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="inputPassword2"
          placeholder="Password"
        />
      </div>
      <div className="col-auto">
        <button type="submit" className="btn btn-primary mb-3">
          {isSignUp ? "Sign Up" : "Start Sesion"}
        </button>
      </div>

      <div>
        
        <button onClick={()=>signInWithRedirect(getAuth,googleProvider)} type="button" className="btn btn-primary btn-lg">
          Google Access
        </button>
        
        <button
          className="btn btn-secondary btn-lg"
          onClick={() => setSignUp(!isSignUp)}
        >
          {isSignUp
            ? "Ya tienes cuenta? Inicia Sesion"
            : "No tienes cuenta? Sign Up "}
        </button>{" "}
      </div>
    </form>
  );
};
