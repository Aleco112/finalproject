import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const signIn = (email, password)=>{
    return signInWithEmailAndPassword (getAuth(), email, password)
     .then((userCredential) => {
        console.log(userCredential)
       
    }) .catch((error) => {
       console.log(error.message)
    });
}