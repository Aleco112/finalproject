import React, { useState, useContext } from "react";
import "../../styles/home.css";
import { useHistory } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Context } from "../store/appContext";


export const Login = () => {
  const {store, actions}=useContext(Context)
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (email, password)=>{
    signInWithEmailAndPassword (getAuth(), email, password)
     .then((userCredential) => {
        localStorage.setItem("user",userCredential.user.email)
        actions.user(userCredential.user.email)
       
    })
    .then(()=>history.push("/home"))
    .catch((error) => {
       console.log(error.message)
    });
}
  return (
    <form>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          value={email}
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          value={password}
        />
      </div>

      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />

        <label className="form-check-label" for="exampleCheck1">
          Check me out
        </label>
      </div>
      <button
        onClick={(event) => {
          if (email !== "" && password !== "") {
            signIn(email, password);
            history.push("/home");
            event.preventDefault();
          }
        }}
      >
        signIn
      </button>
    </form>
  );
};
