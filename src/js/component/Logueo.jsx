import React, {useState} from "react";

const Logueo = () => {
  const [isSignUp, setSignUp] =useState(false);
  return (    
    
<form className="row g-3">
  <div class="col-auto">
    <label for="staticEmail2" className="visually-hidden">Email</label>
    <input type="text" readonly className="form-control-plaintext" id="staticEmail2" value="email@example.com"/>
  </div>
  <div className="col-auto">
    <label for="inputPassword2" className="visually-hidden">Password</label>
    <input type="password" className="form-control" id="inputPassword2" placeholder="Password"/>
  </div>
  <div className="col-auto">
    <button type="submit" className="btn btn-primary mb-3">
      {isSignUp ? "Sign Up": "Start Sesion"}
    </button>
  </div>
  
  
  <div> </div>
      <button type="button" className="btn btn-primary">Google Access</button>

      <button  className="btn btn-primary"onClick={()=> setSignUp(!isSignUp)}>
      {isSignUp ? "Ya tienes cuenta? Inicia Sesion": "No tienes cuenta? Sign Up "}</button>
      </form>
  );
};
export default Logueo;
