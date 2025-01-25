import { useState } from "react";
import Signup from "./Signup";
import {toast} from "react-toastify"
const Login = () => {
  const [showSignin, setShowSignin] = useState(false);

  if (showSignin) {
    return <Signup />;
  }
  const handleLogin = (e)=>{
    e.preventDefault()
    // toast.success("Login Button Clicked")
  }

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-md p-8 bg-black/60 rounded-2xl shadow-lg md:mr-12">
      <h1 className="text-3xl font-extrabold text-gray-200 mb-6">
        Welcome Back
      </h1>
      <form onClick={handleLogin} className="w-full space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300 shadow-lg"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-100 ">
        Don't have an account?{" "}
        <span
          onClick={() => setShowSignin(true)}
          className="text-blue-400 hover:underline cursor-pointer"
        >
          Sign up
        </span>
      </p>
    </div>
  );
};

export default Login;
