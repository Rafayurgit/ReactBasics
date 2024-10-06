import React from "react";
import {useDispatch} from "react-redux"
import {logIn, logOut} from "../../store/authSlice"
import  authService from "../../appWrite/auth"


function LogOutBtn(){

    const dispatch= useDispatch();
    const handelLogout=()=>{
        authService.logOut.then(()=>{
            dispatch(logOut())
        })
    }

    return(
        <button onClick={handelLogout} className="inline-block px-6 py-2 duration-200 hover:border-y-blue-300 rounded-full">
            LogOut
        </button>
    )
}

export default LogOutBtn;