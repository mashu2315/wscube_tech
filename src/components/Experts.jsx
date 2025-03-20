import React from "react";
import Laptop from "/src/assets/laptop.jpg"
 
export default function Experts(){
    return (
        <div className="max-w-[1240px] mx-auto my-10 p-2 md:grid grid-cols-2">
                <div className="col-span-1 md:w-[80%]">
                    <img src={Laptop} alt="" className="inline" />
                </div>
                <div className="col-span-1 flex flex-col justify-center text-center">
                    <h1 className="text-[#00df9a] font-bold my-2">LEARN FROM EXPERTS</h1>
                    <p className="my-2 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reprehenderit ut, magnam maiores esse rerum fugiat, laborum tenetur blanditiis enim facere vel, delectus nemo et iure doloribus repellendus. Rerum, obcaecati?</p>
                    <button className="w-[30%] bg-black text-white p-3 rounded inline">Get Started</button>
                </div>
        </div>
    )
}