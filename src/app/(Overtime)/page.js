"use client"
import { useEffect } from "react"
import { useLineLiff } from "../context/lineliff.context"
import { useForm } from "react-hook-form";

export default function Overtime() {

    const {profileUser} = useLineLiff()
    const {reset} = useForm()
     
    
    const handleLogin = async() =>{
        
    }
    
    
    useEffect(()=>{
        if (profileUser) {
            reset({
                user_line_id: profileUser.userId
            })
        }
    },[profileUser])
    return <>
    </>
}