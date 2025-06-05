import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
 export const Authcontext = createContext();
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { onAuthStateChanged } from 'firebase/auth/cordova';


const auth = getAuth(app);
export const Authprovider = ({children}) => {
const [user,setuser] = useState(null);
// register user

const register = (email,password)=>{
 return createUserWithEmailAndPassword(auth,email,password);
}

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
    console.log(currentuser);
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
    };
    return <Authcontext value={Authdata}>
{children}
    </Authcontext>;
};

export default Authprovider;