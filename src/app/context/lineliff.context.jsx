"use client";


import { useState, createContext,useEffect ,useContext} from "react";

import {liff} from '@line/liff'



export const LineLiffContext = createContext({
  liffObject: [],
  profileUser:[]
});

export const LineliffContextProvider = ({ children }) => {
  const [liffObject, setLiffObject] = useState();
  const [profileUser,setProfileUser]= useState()

  
  const initialLineLiff = async() =>{
    liff.init({liffId:'1661154757-WJvw9kP6'
    }).then(()=>{
      setLiffObject(liff)
    })
    
  }
  const getLineProfile = async()=>{
    liff.getProfile()
    .then((profile)=>{
      setProfileUser(profile)
    })
  }
  // console.log("profileUser : ",profileUser);


useEffect(()=>{
  initialLineLiff()
  
},[])

useEffect(()=>{
  if(!liffObject) return;
  getLineProfile()
},[liffObject])

  return (
    <LineLiffContext.Provider value={{ liffObject ,profileUser}}>
      {children}
    </LineLiffContext.Provider>
  );
};

export const useLineLiff = () => useContext(LineLiffContext)
