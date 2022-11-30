import React, { useState } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import { app } from '../firebase/firebase.config';
import { useEffect } from 'react';
export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)


    const googleSignIn = (Provider) => {
        setLoading(true)
        return signInWithPopup(auth,Provider)
    }
    const githubSignIn = (Provider)=>{
        setLoading(true)
        return signInWithPopup(auth,Provider)
    }


    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login =(email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
    const updateUserProfile = (profile)=>{
        return updateProfile(auth.currentUser,profile)
    }


    useEffect(()=>{
     const unSubscribe = onAuthStateChanged(auth,(currentUser) =>{
            setUser(currentUser)
            setLoading(false)
        });
        return () =>{
            unSubscribe();
        }

    },[])




    const authInfo ={user,loading , googleSignIn,githubSignIn, logOut,createUser,login,updateUserProfile}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;