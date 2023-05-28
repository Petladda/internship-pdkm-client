"use client";

import React, { useEffect, useState } from "react";
import { useLineLiff } from "@/app/context/lineliff.context";
import Button from "../shared/button";
import { useForm } from "react-hook-form";


const RegisterForm = () =>{
    
    const {liffObject} = useLineLiff() 
    const [profileUser,setProfileUser]= useState()
    const {register,formState:{errors},handleSubmit} = useForm()
    
    
    const Login = ()=>{
        if (liffObject.isLoggedIn()) {
            console.log("login success");
        }else{
            // liffObject.login()
        }
    }
    
    const Profile = async()=>{
        const profileUser = await liffObject.getProfile()
        setProfileUser(profileUser)
    }
    console.log("profile",profileUser);

    const submit = ()=>{
        console.log("submit");
    }

    const isCkeckbox = ()=>{
        console.log("ischeck");
    }

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
            <form onSubmit={handleSubmit(submit)} className="flex flex-col w-96  border mx-auto rounded-lg my-8 shadow-md mb-28"> 
                <div className="flex flex-col mx-5 my-6 ">
                    <label className="after:content-['*'] after:ml-0.5 after:text-red-500 mb-2 " htmlFor="Firstname">ชื่อจริง </label>
                    <input placeholder="ชื่อจริง" className="border rounded-lg  h-12 px-5 " {...register("Firstname",{required: "* กรุณากรอกข้อมูล"})} aria-invalid={errors.Firstname? "true":"false"}></input>
                    {errors.Firstname && <p  role="alert" className="text-red-500 ">{errors.Firstname?.message}</p>}

                    <label className="after:content-['*'] after:ml-0.5 after:text-red-500 mb-2 mt-4" htmlFor="Lastname">นามสกุล </label>
                    <input placeholder="นามสกุล" className="border rounded-lg  h-12 px-5 "  {...register("Lastname",{required: "* กรุณากรอกข้อมูล"})} aria-invalid={errors.Lastname? "true":"false"}></input>
                    {errors.Lastname && <p  role="alert" className="text-red-500 ">{errors.Lastname?.message}</p>}

                    <label className="after:content-['*'] after:ml-0.5 after:text-red-500 mb-2 mt-4" htmlFor="Nickname">ชื่อเล่น </label>
                    <input placeholder="ชื่อเล่น"  className="border rounded-lg  h-12 px-5 "  {...register("Nickname",{required: "* กรุณากรอกข้อมูล"})} aria-invalid={errors.Nickname? "true":"false"}></input>
                    {errors.Nickname && <p  role="alert" className="text-red-500 ">{errors.Nickname?.message}</p>}
                    
                    <div className="mt-4">
                        <label className="after:content-['*'] after:ml-0.5 after:text-red-500 mb-2 " htmlFor="Sex">เพศ </label>
                        <fieldset className="flex flex-row mb-4 justify-evenly ">
                            <input id="women"  type="radio" name="status" className="accent-green-600 " checked />
                            <label for="women" className=" ">หญิง</label>

                            <input id="men" className="accent-green-600" type="radio" name="status" />
                            <label for="men" className="">ชาย</label>

                            <input id="not-specified" className="accent-green-600" type="radio" name="status" />
                            <label for="not-specified" className="">ไม่ระบุ</label>

                        </fieldset>
                        
                    </div>

                    <div >
                        <p className="mb-3">ทีม</p>
                        <select className="border  rounded-lg w-full h-12 px-5  ">
                            
                            <option selected>Paiduay</option>
                            <option>Deeploy</option>
                            <option>Ourpoint</option>
                            <option>Nextate</option>
                            <option>Daywork</option>         
                        </select>
 
                    </div>
                    <div >
                        <p className="mb-3 mt-4">ตำแหน่ง</p>
                        <select className="border rounded-lg w-full  h-12 px-5 ">
                            <option>UI</option>
                            <option>UI</option>
                            <option>UI</option>
                        </select>
 
                    </div>
                    <div className="border-b-2 mt-10 border-extar-light-grey "></div>
                    <div class="flex items-center mb-4 mt-4 ">
                        <input type="checkbox" className="accent-black" {...register("checkbox",{required: "* กรุณากรอกข้อมูล"})} aria-checked={errors.checkbox? "true":"false"} />
                        <label for="default-checkbox" className="ml-2 text-sm font-medium text-mid-grey after:content-['*'] after:ml-0.5 after:text-red-500 ">
                                ฉันได้อ่านและยอมรับเงื่อนไขการเป็นสมาชิกและนโยบายความเป็นส่วนตัว </label>

                    </div>
                        {errors.checkbox && <p  role="alert" className=" text-red-500 mb-2 pl-3 ">{errors.checkbox?.message}</p>}
                   
                   <Button disabled={true} />
                    <div className="font-medium text-center mb-5">
                        <p className="mt-4  text-mid-grey">การสร้างบัญชีหรือการเข้าใช้งาน หมายถึงคุณได้อ่านและยอมรับ</p>
                        <p>เงื่อนไขข้อกำหนด <span className="text-mid-grey">และ</span> นโยบายความเป็นส่วนตัว</p>
                    </div>
                

                </div>
                    
                
            </form>
        </>
    )
}

export default RegisterForm;