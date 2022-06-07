import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { useHistory } from "react-router-dom";
import fireBaseConfig from "../index.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const { store, actions } = useContext(Context);
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      createUserWithEmailAndPassword(
        getAuth(),
        email.value,
        password.value
      ).then((credential) => {
        localStorage.setItem("user", credential.user.email);
        actions.user(credential.user.email);
      });
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    store.user ? history.push("/home") : "";
  }, [store.user]);
  return (
    <>
      <div id="contentBody">
        <div class="container">
          <div class="sign-box">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
              <label for="email">Email</label>
              <input type="email" name="email" placeholder="Email" />
              <label for="password">Password</label>
              <input type="password" name="password" placeholder="Password" />
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <div>
              <h5>If you have an account</h5>
              <Link to="/login">
                <button className="btn btn-primary"> Log in </button>
              </Link>
            </div>
          </div>
        </div>        
      </div>
    </>
  );
};
