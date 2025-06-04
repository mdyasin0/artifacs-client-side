import { Player } from '@lottiefiles/react-lottie-player';
import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
import { Link } from 'react-router';

const Register = () => {

    const [ShowPassword ,setShowPassword]= useState(false);
    return (
       <div className="min-h-screen flex items-center justify-center bg-[#faf4ec] px-4 py-12">
      {/* lottie-animation */}
      <Player
        autoplay
        loop
        src="/Register_lottie.json"
        style={{ height: "300px", width: "300px" }}
      >
       
      </Player>

      <div className="w-full max-w-md bg-white bg-opacity-90 rounded-2xl shadow-lg p-8 border border-[#ddd]">
        <h2 className="text-2xl font-semibold text-[#2f2e2e] text-center mb-2">
          Register now
        </h2>
        

        <form className="space-y-5">
             <div>
            <label
              htmlFor="name"
              className="block text-[#3a3a3a] font-medium mb-1"
            >
              Name 
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-2 border border-[#ddd] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b5e3c]"
              placeholder="enter your name"
            />
          </div>
           <div>
            <label
              htmlFor="email"
              className="block text-[#3a3a3a] font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 border border-[#ddd] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b5e3c]"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="url"
              className="block text-[#3a3a3a] font-medium mb-1"
            >
              photo URL
            </label>
            <input
              type="url"
              id="url"
              required
              className="w-full px-4 py-2 border border-[#ddd] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b5e3c]"
              placeholder="enter your photo url"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-[#3a3a3a] font-medium mb-1"
            >
              Password
            </label>
            <input
              type={ShowPassword ? "text" : "password"}
              id="password"
              required
              className="w-full relative px-4 py-2 border border-[#ddd] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b5e3c]"
              placeholder="Enter your password"
               

            />
            <span onClick={()=>setShowPassword(!ShowPassword)} className="absolute  mt-3 -ml-7 text-sm cursor-pointer">{ ShowPassword ? <FaRegEye /> : <FaRegEyeSlash />}</span>
          </div>

          <button
            type="submit"
            className="w-full bg-[#8b5e3c] text-[#f5f5f5] py-2 rounded-lg font-semibold hover:bg-[#a97442] transition-colors duration-300"
          >
            Register
          </button>
        </form>
        <p className="text-center text-sm  mt-5">Already have an account ?  
        <Link to="/login" className="hover:text-green-500"> Login </Link>
        </p>
      </div>
    </div>
    );
};

export default Register;