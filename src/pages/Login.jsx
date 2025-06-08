import { Player } from "@lottiefiles/react-lottie-player";
import React, { useContext, useEffect, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { Authcontext } from "../Provider/Authprovider";
import { toast } from "react-toastify";

const Login = () => {
  const [ShowPassword, setShowPassword] = useState(false);
  const { login, googleLogin } = useContext(Authcontext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    document.title = "Login page | Legacy Vault";
  }, []);

  const googlelogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        toast.success("Logged in with Google successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error("Google login error: " + error.message);
      });
  };

  const handalelogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((userCredential) => {
        toast.success("login successful");
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#faf4ec] px-4 py-12 gap-10 md:gap-20">
      {/* lottie-animation */}
      <Player
        autoplay
        loop
        src="/lottie_login.json"
        className="w-60 h-60 md:w-72 md:h-72"
      ></Player>

      <div className="w-full max-w-md bg-white bg-opacity-90 rounded-2xl shadow-lg p-8 border border-[#ddd]">
        <h2 className="text-2xl font-semibold text-[#2f2e2e] text-center mb-6">
          Login to Your Account
        </h2>

        <form onSubmit={handalelogin} className="space-y-5 relative">
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

          <div className="relative">
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
              className="w-full px-4 py-2 border border-[#ddd] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b5e3c]"
              placeholder="Enter your password"
            />
            <span
              onClick={() => setShowPassword(!ShowPassword)}
              className="absolute top-10 right-3 text-xl text-[#8b5e3c] cursor-pointer select-none"
              aria-label={ShowPassword ? "Hide password" : "Show password"}
            >
              {ShowPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-[#8b5e3c] text-[#f5f5f5] py-2 rounded-lg font-semibold hover:bg-[#a97442] transition-colors duration-300"
          >
            Login
          </button>
        </form>

        <button
          onClick={googlelogin}
          className="w-full flex gap-3 mt-5 items-center justify-center bg-[#8b5e3c] text-[#f5f5f5] py-2 rounded-lg font-semibold hover:bg-[#a97442] transition-colors duration-300"
        >
          Login with <FcGoogle />
        </button>

        <p className="text-center text-sm mt-5">
          Don't have an account?
          <Link
            to="/Register"
            className="ml-1 text-[#8b5e3c] hover:text-green-500"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
