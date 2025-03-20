import React from "react";

export default function NewsLetter(){
    return (
        <div className='bg-[#2699fb] p-4 flex justify-center md:block'>
            <div className="mx-w-[1240px] md:flex justify-evenly py-[50px]">
                <div>
                    <h1 className="font-bold text-[25px] md:text-[40px] text-white">Want to learn IT Skills?</h1>
                    <span className="text-white text-m md:text-l">Sign up to our newsletters and stay up to date.</span>
                </div>
                <div className="mt-5">
                    <input type="email" placeholder="Enter Email " className="p-3 rounded mr-2 mb-2 text-slate-600" />
                    <button className="bg-black text-white p-3 mt-3 rounded ">Get Started</button>
                    <br />
                    <p className="text-white">
                        We care about the protection of your data. Read our <br />
                        <a href="#" className="text-[#000000]">Privacy Policy. </a> 
                    </p>
                </div>
            </div>
        </div>
    )
}