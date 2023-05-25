"use client";

import React, { useEffect, useState } from "react";
import { useLineLiff } from "@/app/context/lineliff.context";

const RegisterForm = () =>{
    
    const {liffObject} = useLineLiff() 
    const [profileUser,setProfileUser]= useState()
    
    const Login = ()=>{
        if (liffObject.isLoggedIn()) {
            console.log("login success");
        }else{
            liffObject.login()
        }
    }
    
    const Profile = async()=>{
        const profileUser = await liffObject.getProfile()
        setProfileUser(profileUser)
    }
    console.log("profile",profileUser);

    useEffect(()=>{
        if (liffObject) {
            liffObject.ready.then(()=>{
                Login()
                Profile()
            })
        }
    },[liffObject])

    return(
        <>
        </>
    )
}

export default RegisterForm;