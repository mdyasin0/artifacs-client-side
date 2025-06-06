import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
 export const Authcontext = createContext();
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { onAuthStateChanged, GoogleAuthProvider } from 'firebase/auth'; //
import axios from 'axios';


const auth = getAuth(app);
export const Authprovider = ({children}) => {
const [user,setuser] = useState(null);
  const [loading, setLoading] = useState(true);
// register user

const register = (email,password)=>{
 return createUserWithEmailAndPassword(auth,email,password);
}
// google login

const googleLogin = () => {
  return signInWithPopup(auth, new GoogleAuthProvider());
};


// login

const login = (email,password)=>{
    return signInWithEmailAndPassword(auth, email, password);
}

// logout
 
const logout =()=>{
    return signOut(auth);
}

useEffect(()=>{
    const authtraker =  onAuthStateChanged(auth,(currentuser)=>{
    setuser(currentuser);
    setLoading(false);
     if(currentuser?. email){
        const userdata = {email:currentuser.email};
        axios.post('http://localhost:3000/jwt',userdata,{
            withCredentials:true
        })
        .then(res=>{
            console.log( 'token after jwt' , res.data)
        })
        .catch(error=>console.log(error))

     }
     console.log('user in auth state change', currentuser);

    // console.log(currentuser);
    });
    return ()=>{
authtraker()
    }
},[])

    const Authdata ={
      user,
      setuser,
      register,
      logout,
      login,
      googleLogin,
        loading,
    };
    return <Authcontext.Provider value={Authdata}>
{children}
    </Authcontext.Provider>;
};

export default Authprovider;