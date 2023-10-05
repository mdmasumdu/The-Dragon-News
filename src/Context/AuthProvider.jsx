/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";


export const AuthContext =createContext()

const AuthProvider = ({children}) => {



    const [user,setUser] = useState(null)

    const [loading,setLoading] = useState(true);
    const auth = getAuth(app);


    // resgister with email and password
   const createuser =(email,password)=>{
    setLoading(true)
    
           return createUserWithEmailAndPassword(auth,email,password)
   }

//    sign in with email and password
const signin =(email,password)=>{
    setLoading(true)

    return signInWithEmailAndPassword(auth,email,password)
}

// signout
const logout =()=>{
    setLoading(true)
  return  signOut(auth)
}

// state change observer
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentuser=>{
        setUser(currentuser)
        setLoading(false)
    });
    return ()=>{
        unsubscribe()
    }
},[auth])

// context value provider
    const authinfo ={
        createuser,
        signin,
        user,
        logout,
        loading

    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;