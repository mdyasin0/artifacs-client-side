import { Player } from "@lottiefiles/react-lottie-player";
import React, {  useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { Authcontext } from "../Provider/Authprovider";

const Register = () => {
  const [ShowPassword, setShowPassword] = useState(false);
   const { register , setuser , googleLogin} = useContext(Authcontext);
   const googleregister =()=>{
    googleLogin()
    .then(result => {
      const user = result.user;
      alert("Register with Google successful");
      console.log("Register with Google:", user);
    })
    .catch(error => {
      console.error("Google login error:", error.message);
    });



   }
  const handaleRegister = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const URL = form.url.value;
    const password = form.password.value;

    console.log(name, email, URL, password);
    register(email,password)
    .then(res =>{

      alert("Register successful");
      const result = res.user;

      // console.log(result);
      setuser(result);
    })  .catch((error) => {
  const errorMessage = error.message;
    console.log(errorMessage);
  });

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#faf4ec] px-4 py-12">
      {/* lottie-animation */}
      <Player
        autoplay
        loop
        src="/Register_lottie.json"
        style={{ height: "300px", width: "300px" }}
      ></Player>

      <div className="w-full max-w-md bg-white bg-opacity-90 rounded-2xl shadow-lg p-8 border border-[#ddd]">
        <h2 className="text-2xl font-semibold text-[#2f2e2e] text-center mb-2">
          Register now
        </h2>

        <form onSubmit={handaleRegister} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-[#3a3a3a] font-medium mb-1"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
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
              name="email"
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
              name="url"
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
              name="password"
              required
              className="w-full relative px-4 py-2 border border-[#ddd] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b5e3c]"
              placeholder="Enter your password"
            />
            <span
              onClick={() => setShowPassword(!ShowPassword)}
              className="absolute  mt-3 -ml-7 text-sm cursor-pointer"
            >
              {ShowPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-[#8b5e3c] text-[#f5f5f5] py-2 rounded-lg font-semibold hover:bg-[#a97442] transition-colors duration-300"
          >
            Register
          </button>
        </form>

        <button
          onClick={googleregister}
          className="w-full flex gap-3 mt-5 items-center text-center justify-center bg-[#8b5e3c] text-[#f5f5f5] py-2 rounded-lg font-semibold hover:bg-[#a97442] transition-colors duration-300"
        >
          Register with <FcGoogle />
        </button>
        <p className="text-center text-sm  mt-5">
          Already have an account ?
          <Link to="/login" className="hover:text-green-500">
            {" "}
            Login{" "}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
