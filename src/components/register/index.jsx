"use client";

import React, { useEffect, useState } from "react";
import { useLineLiff } from "@/app/context/lineliff.context";
import Button from "../shared/button";
import { useForm } from "react-hook-form";
import Select from "react-select"

const RegisterForm = () =>{
    
    const {liffObject} = useLineLiff() 
    const [profileUser,setProfileUser]= useState()
    const {register,formState:{errors},handleSubmit,setValue,getValues,clearErrors,reset} = useForm()
    
    const team_id = [
        { value: '1', label: 'PDKM' },
        { value: '2', label: 'DAY WORK' },
        { value: '3', label: 'DEEPLOY' },
        { value: '4', label: 'NEST8' },
        { value: '5', label: 'OURPOINT' },
    ]

    const position_id = [
        { value: '1', label: 'CEO' },
        { value: '2', label: 'Head of Mobile Developer' },
        { value: '3', label: 'Mobile Developer' },
        { value: '4', label: 'Font-end Developer' },
        { value: '5', label: 'Junior Font-end Developer' },
        { value: '6', label: 'Quality Assurance' },
        { value: '7', label: 'Junior Quality Assurance' },
        { value: '8', label: 'Product Manager' },
        { value: '9', label: 'Back-end Developer' },
        { value: '10', label: 'Junior Back-end Develope' },
        { value: '11', label: 'UX Designer' },
        { value: '12', label: 'UI Designer' },
        { value: '13', label: 'Business Analyst' },
        { value: '14', label: 'Managing Director' },
        { value: '15', label: 'Full-Stack Developer' },
        { value: '16', label: 'Junior Full-Stack Developer' },
        { value: '17', label: 'Business Developer' },
        { value: '18', label: 'Customer Support' },
        { value: '19', label: 'PHP Developer' },
        { value: '20', label: 'Tecnical Director' },
        { value: '21', label: 'General Manager' },
        { value: '22', label: 'Accounting Administrative Assistant' },
        { value: '23', label: 'แม่บ้าน' },

    ]



    const login = ()=>{
        if (liffObject.isLoggedIn()) {
            console.log("login success!!!");
        }else{
            liffObject.login()
        }
    }
    
    const profile = async()=>{
        const profileUser = await liffObject.getProfile()
        setProfileUser(profileUser)
    }
    // console.log("profileUser:" ,profileUser);


    const isSubmit = (data)=>{
        console.log("isdisabled",data);
        
    }

    const sexTypeSelect = (e)=>{
        setValue('sex',e.target.value)
        clearErrors("sex")
    }

    const handleSelectTeam = (e)=>{
        setValue('team_id',e.value) 
        
    }
    
    const handleSelectPosition = (e)=>{
        setValue('position_id',e.value) 

    }

    useEffect(()=>{
        if (liffObject) {
            liffObject.ready.then(()=>{
                login()
                profile()
            })
        }
    },[liffObject])

    useEffect(()=>{
        if (profileUser) {
            reset({
                user_line_id: profileUser.userId
            })
        }
    },[profileUser])

    return(
        <>
            <form onSubmit={handleSubmit(isSubmit)} className="flex flex-col w-96  border mx-auto rounded-lg my-8 shadow-md mb-28"> 
                <div className="flex flex-col mx-5 my-6 ">
                    <label className="after:content-['*'] after:ml-0.5 after:text-red-500 mb-2 ">ชื่อจริง </label>
                    <input placeholder="ชื่อจริง" className="border rounded-lg  h-12 px-5 " {...register("first_name",{required: "* กรุณากรอกข้อมูล"})} aria-invalid={errors.first_name? "true":"false"}></input>
                    {errors.first_name && <p  role="alert" className="text-red-500 ">{errors.first_name?.message}</p>}

                    <label className="after:content-['*'] after:ml-0.5 after:text-red-500 mb-2 mt-4" >นามสกุล </label>
                    <input placeholder="นามสกุล" className="border rounded-lg  h-12 px-5 "  {...register("last_name",{required: "* กรุณากรอกข้อมูล"})} aria-invalid={errors.last_name? "true":"false"}></input>
                    {errors.last_name && <p  role="alert" className="text-red-500 ">{errors.last_name?.message}</p>}

                    <label className="after:content-['*'] after:ml-0.5 after:text-red-500 mb-2 mt-4" >ชื่อเล่น </label>
                    <input placeholder="ชื่อเล่น"  className="border rounded-lg  h-12 px-5 "  {...register("nickname",{required: "* กรุณากรอกข้อมูล"})} aria-invalid={errors.nickname? "true":"false"}></input>
                    {errors.nickname && <p  role="alert" className="text-red-500 ">{errors.nickname?.message}</p>}
                    
                    <div className="mt-4">
                        <label className="after:content-['*'] after:ml-0.5 after:text-red-500 mb-2 ">เพศ </label>
                        <fieldset className="flex flex-row mb-4 justify-evenly ">
                            <input id="female"  type="radio" name="status" className="accent-green-600 "
                            {...register("sex",{required: "* กรุณากรอกข้อมูล"})} aria-checked={errors.sex? "true":"false"}
                            value="หญิง"
                            checked={getValues("value")}
                            onChange={sexTypeSelect}                          
                            />
                            <label htmlFor="female" >หญิง</label>

                            <input id="male" className="accent-green-600" type="radio" name="status" 
                            {...register("sex",{required: "* กรุณากรอกข้อมูล"})} aria-checked={errors.sex? "true":"false"}
                            value="ชาย"
                            checked={getValues("value")}
                            onChange={sexTypeSelect}
                            />
                            <label htmlFor="male" >ชาย</label>

                            <input id="none" className="accent-green-600" type="radio" name="status" 
                            {...register("sex",{required: "* กรุณากรอกข้อมูล"})} aria-checked={errors.sex? "true":"false"}
                            value="ไม่ระบุ"
                            checked={getValues("value")}
                            onChange={sexTypeSelect}
                            />
                            <label htmlFor="none">ไม่ระบุ</label>

                        </fieldset>
                        {errors.sex && <p  role="alert" className="text-red-500 ">{errors.sex?.message}</p>}

                        
                    </div>

                    <div  >
                        <p className="mb-3">ทีม</p>                     
                            <Select 
                            options={team_id}
                            checked={getValues()}
                            onChange={handleSelectTeam}  />        
                    </div>
                    <div >
                        <p className="mb-3 mt-4">ตำแหน่ง</p>
                        <Select 
                        options={position_id}
                        checked={getValues()}
                        onChange={handleSelectPosition} />
 
                    </div>
                    <div className="border-b-2 mt-10 border-extar-light-grey "></div>
                    <div className="flex items-center mb-4 mt-4 ">
                        <input type="checkbox" className="accent-black" {...register("checkbox",{required: "* กรุณากรอกข้อมูล"})} aria-checked={errors.checkbox? "true":"false"} />
                        <label htmlFor="checkbox" className="ml-2 text-sm font-medium text-mid-grey after:content-['*'] after:ml-0.5 after:text-red-500 ">
                                ฉันได้อ่านและยอมรับเงื่อนไขการเป็นสมาชิกและนโยบายความเป็นส่วนตัว </label>

                    </div>
                        {errors.checkbox && <p  role="alert" className=" text-red-500 mb-2 pl-3 ">{errors.checkbox?.message}</p>}
                   
                   <Button disabled={errors.checkbox} isSubmit={isSubmit} title="ยืนยัน" color="secondary"/>
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