import { useState } from "react";

const Login = () => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setUploadedImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="grid grid-cols-1  md:grid-cols-2 h-screen gap-24 ">
      {/* Welcome Back Section */}
      <div className="flex flex-col justify-center items-center   p-8 shadow-md">
        <h1 className="text-3xl font-bold text-gray-100 mb-6">Welcome Back</h1>
        <input
          type="email"
          placeholder="Email"
          className="w-full max-w-sm px-4 py-2 mb-4 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full max-w-sm px-4 py-2 mb-6 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <button className="w-full max-w-sm py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition duration-300">
          Login
        </button>
      </div>

      {/* Create an Account Section */}
      <div className="flex flex-col justify-center items-center   p-8 shadow-md">
        <h1 className="text-3xl font-bold text-gray-100 mb-6">Create an Account</h1>
        <input
          type="text"
          placeholder="Username"
          className="w-full max-w-sm px-4 py-2 mb-4 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full max-w-sm px-4 py-2 mb-4 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full max-w-sm px-4 py-2 mb-6 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <div className="w-full max-w-sm mb-6">
          <label
            className="block mb-2 text-sm font-medium text-gray-600"
            htmlFor="imageUpload"
          >
            Upload Profile Picture
          </label>
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            className="w-full"
            onChange={handleImageUpload}
          />
          {uploadedImage && (
            <img
              src={uploadedImage}
              alt="Uploaded"
              className="w-24 h-24 mt-4 rounded-full shadow-md object-cover"
            />
          )}
        </div>
        <button className="w-full max-w-sm py-2 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition duration-300">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;
