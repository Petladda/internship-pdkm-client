"use client";
import React from "react";


const Button = ({disabled})=>{

    const isSubmit = ()=>{
       disabled = false
        
    }
    
    console.log("setdisable");
    
    return(
        <button disabled={isSubmit}  type="submit" className="border rounded-xl bg-secondary h-12 text-white ">ยืนยัน</button>
    )
}

export default Button;