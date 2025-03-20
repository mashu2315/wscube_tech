import React from "react";
import { ReactTyped } from "react-typed";

export default function Banner (){
    return (
        <div className='bg-[#2699fb] w-full py-[100px]'>
            <div className="max-w-[1240px] my-[100px] mx-auto text-center font-bold">
                <div className="text-xl md:text-3xl">
                    Learn With Us
                </div>
                <h2 className="text-white text-3xl md:text-[60px] md:pt-[10px]"> 
                    Grow With Us.
                </h2>
                <div className="text-[20px] md:text-[30px] md:pt-[10px] text-white">
                    Learn <ReactTyped strings={["Web Developement","Ethical Hacking","Cyber Security","Machine Learning","Data Science"]} typeSpeed={80} backSpeed={40} loop={true} />
                </div>
                <button className="bg-black text-white p-3 mt-3 rounded ">Get Started</button>
            </div>
        </div>
    )
} 