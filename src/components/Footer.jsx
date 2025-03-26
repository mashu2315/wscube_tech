import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className=' bg-[#2699fb] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white'>
      <div>
        <h1 className='w-full text-3xl font-bold text-black'>WsCube Tech.</h1>
        <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
          <FaFacebookSquare size={30}  className=' hover:text-blue-200 hover:scale-105'/>
          <FaInstagram size={30}  className=' hover:text-blue-200 hover:scale-105'/>
          <FaTwitterSquare size={30} className=' hover:text-blue-200 hover:scale-105' />
          <FaGithubSquare size={30}  className=' hover:text-blue-200 hover:scale-105'/>
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
          <h6 className='font-medium text-black'>Solutions</h6>
          <ul>
            <li className='py-2 text-sm hover:text-blue-200 hover:scale-105 '>Analytics</li>
            <li className='py-2 text-sm  hover:text-blue-200 hover:scale-105'>Marketing</li>
            <li className='py-2 text-sm  hover:text-blue-200 hover:scale-105'>Commerce</li>
            <li className='py-2 text-sm  hover:text-blue-200 hover:scale-105'>Insights</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-black'>Support</h6>
          <ul>
            <li className='py-2 text-sm  hover:text-blue-200 hover:scale-105'>Pricing</li>
            <li className='py-2 text-sm  hover:text-blue-200 hover:scale-105'>Documentation</li>
            <li className='py-2 text-sm  hover:text-blue-200 hover:scale-105'>Guides</li>
            <li className='py-2 text-sm  hover:text-blue-200 hover:scale-105'>API Status</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-black'>Company</h6>
          <ul>
            <li className='py-2 text-sm  hover:text-blue-200 hover:scale-105'>About</li>
            <li className='py-2 text-sm  hover:text-blue-200 hover:scale-105'>Blog</li>
            <li className='py-2 text-sm  hover:text-blue-200 hover:scale-105'>Jobs</li>
            <li className='py-2 text-sm  hover:text-blue-200 hover:scale-105'>Press</li>
            <li className='py-2 text-sm  hover:text-blue-200 hover:scale-105'>Careers</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-black'>Legal</h6>
          <ul>
            <li className='py-2 text-sm  hover:text-blue-200 hover:scale-105'>Claim</li>
            <li className='py-2 text-sm  hover:text-blue-200 hover:scale-105'>Policy</li>
            <li className='py-2 text-sm  hover:text-blue-200 hover:scale-105'>Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;