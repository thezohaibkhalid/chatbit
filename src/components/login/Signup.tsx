import { useState } from "react";
import Login from "./Login";
import { FaCamera } from "react-icons/fa"; // Importing a camera icon

const Signup = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const [showLogin, setShowLogin] = useState(false);

  if (showLogin) {
    return <Login />;
  }

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-md p-8 bg-black/60 rounded-2xl shadow-lg">
      <h1 className="text-3xl font-extrabold text-gray-200 mb-6">Create an Account</h1>
      <form className="w-full space-y-4">
        <div className="text-center">
          <label
            className="block mb-2 text-sm font-semibold text-gray-100 cursor-pointer"
            htmlFor="imageUpload"
          >
            <span className="flex items-center justify-center gap-2 text-blue-500">
              <FaCamera className="text-xl" /> Click to Upload Profile Picture
            </span>
          </label>
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleAvatar}
          />
          <img
            src={avatar.url || "./image.jpeg"}
            alt="Uploaded"
            className="w-24 h-24 mt-4 rounded-full shadow-lg object-cover mx-auto"
          />
        </div>
        <input
          type="text"
          placeholder="Username"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none text-black"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none text-black"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none text-black"
        />
        <button
          type="submit"
          className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300 shadow-lg"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-100">
        Already have an account?{" "}
        <span
          onClick={() => setShowLogin(true)}
          className="cursor-pointer text-green-500 hover:underline"
        >
          Log in
        </span>
      </p>
    </div>
  );
};

export default Signup;
