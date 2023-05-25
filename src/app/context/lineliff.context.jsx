"use client";

import { Imprima } from "next/font/google";
import { useState, createContext,useEffect ,useContext} from "react";

import {liff} from '@line/liff'



export const LineLiffContext = createContext({
  liffObject: []
});

export const LineliffContextProvider = ({ children }) => {
  const [liffObject, setLiffObject] = useState();
  
  const initialLineLiff = async() =>{
    liff.init({liffId:'1661154757-WJvw9kP6'
    }).then(()=>{
      setLiffObject(liff)
    })
    
}
// console.log("lineliff : ",liffObject);

useEffect(()=>{
  initialLineLiff()
},[])

  return (
    <LineLiffContext.Provider value={{ liffObject }}>
      {children}
    </LineLiffContext.Provider>
  );
};

export const useLineLiff = () => useContext(LineLiffContext)
