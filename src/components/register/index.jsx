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
            // liffObject.login()
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
            <form className="w-80 h-full "> 
                <div className="flex flex-col">
                    <label>ชื่อจริง <span className="text-danger">*</span></label>
                    <input placeholder="ชื่อจริง" className="border"></input>

                    <label>นามสกุล <span>*</span></label>
                    <input placeholder="นามสกุล"></input>

                    <label>ชื่อเล่น <span>*</span></label>
                    <input placeholder="ชื่อเล่น"></input>
                    <div>
                        <label>เพศ <span>*</span></label>
                        <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white  rounded-lg sm:flex dark:text-white">
                            <li class="w-full sm:border-b-0 sm:border-r">
                                <div class="flex items-center pl-3">
                                    <input id="vue-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2"></input>
                                    <label for="vue-checkbox-list" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 ">หญิง</label>
                                </div>
                            </li>
                            <li class="w-full  sm:border-b-0 sm:border-r">
                                <div class="flex items-center pl-3">
                                    <input id="react-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2"></input>
                                    <label for="react-checkbox-list" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 ">ชาย</label>
                                </div>
                            </li>
                            <li class="w-full  sm:border-b-0 sm:border-r">
                                <div class="flex items-center pl-3">
                                    <input id="angular-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 "></input>
                                    <label for="angular-checkbox-list" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 ">ไม่ระบุ</label>
                                </div>
                            </li>
                        </ul>

                    </div>

                    <div>

                    </div>
                    <label>ทีม</label>
                    <select>
                        <option selected >select team</option>
                        <option>deploy</option>
                        <option>deploy</option>
                        <option>deploy</option>
                    </select>
                    
                    <label>ทีม</label>
                    <select>
                        <option selected>select</option>
                        <option>UI</option>
                        <option>UI</option>
                        <option>UI</option>
                    </select>
                    
                    <div class="flex items-center mb-4">
                        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700"></input>
                        <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 ">
                            ฉันได้อ่านและยอมรับเงื่อนไขการเป็นสมาชิกและนโยบายความเป็นส่วนตัว <span>*</span></label>
                    </div>

                    <button>ยืนยัน</button>

                    <h5>การสร้างบัญชีหรือการเข้าใช้งาน หมายถึงคุณได้อ่านและยอมรับ</h5>
                    <h5>เงื่อนไขข้อกำหนด และ นโยบายความเป็นส่วนตัว</h5>             
                </div>
            </form>
        </>
    )
}

export default RegisterForm;