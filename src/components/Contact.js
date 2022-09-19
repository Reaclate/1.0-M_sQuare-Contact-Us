import React from "react";
import logo from '../assets/img/logo-bg.png'

export default function Contact (){
    return(
        <div className="container bg-white mt-4 rounded text-center">
            <img src={logo} alt="logo" className="img-fluid" />
            <h2 className ="text-decoration-underline text-black" > 
            Contact Us 
            </h2>
        </div>
        
    )
}