/* eslint-disable @typescript-eslint/no-unused-vars */

import Image from 'next/image';
import React from 'react';

export default function page() {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center flex-wrap p-5">

      {/* Left side */}
      <div className="text-3xl w-full md:w-1/2 px-5 mb-5 md:mb-0">
        <Image width={300} height={100} src="/pictures/facebook.svg" alt="Facebook Logo" />
        <p className="ml-8 -mt-3">Facebook helps you connect and share with the people in your life.</p>
      </div>

      {/* Right side */}
      <div className="bg-white flex flex-col p-5 rounded-xl w-full sm:w-3/4 md:w-1/3">
        <input 
          className="my-2 border-2 border-gray-100 p-3 rounded-md focus:outline-1 outline-blue-600 w-full"  
          type="text" 
          placeholder="Email address or phone number"
        />
        <input 
          className="my-3 border-2 border-gray-100 p-3 rounded-md focus:outline-1 outline-blue-600 w-full" 
          type="password" 
          placeholder="Password"
        />
        <button className="bg-blue-600 my-2 py-2 rounded-md text-white text-lg font-bold hover:bg-blue-700 w-full">
          Log in
        </button>
        <p className="text-blue-600 text-sm my-2 text-center hover:underline cursor-pointer">
          Forgotten password?
        </p>

        <span className="my-2">
          <hr />
        </span>
        <button className="bg-[#42b72a] rounded-md my-2 py-2 px-2 text-lg text-white font-bold hover:bg-[#3ba626] w-full">
          Create new account
        </button>
      </div>
      
    </div>
  );
}
