import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    const [name, value] = e.target;
    setCredential({ ...credential, [name]: value });
  };

  const onSubmit = () => {};

  return (
    <div className=" w-full h-screen flex items-center justify-center">
      <div className="border w-[70%] md:w-[40%] rounded">
        <div>
          <h2 className="bg-gray-700 text-white text-2xl md:text-3xl text-center py-4 font-semibold rounded-t">
            Login
          </h2>
        </div>
        <div className="p-6">
          <div>
            <label className="text-base md:text-lg font-semibold">Email</label>
            <input
              className="w-full py-2 px-3 border shadow rounded mt-2 focus:outline-none"
              value={credential.email}
              onChange={onChange}
              type="text"
              placeholder="Enter Your Email"
              name="email"
            />
          </div>
          <div className="mt-3">
            <label className="text-base md:text-lg font-semibold" htmlFor="">
              Password
            </label>
            <input
              className="w-full py-2 px-3 border shadow rounded mt-2 focus:outline-none"
              value={credential.password}
              onChange={onchange}
              type="password"
              placeholder="Enter Your Password"
              name="password"
            />
            <Link
              className="text-sm text-blue-600 hover:text-blue-700 font-semibold"
              to="/foregot-password"
            >
              Foregot Password?
            </Link>
          </div>

          <div className="mt-5 text-center">
            <button
              className="w-full border p-2 shadow text-lg text-white bg-blue-500 font-semibold rounded"
              type="button"
              onClick={onSubmit}
            >
              Sign In
            </button>
            <Link
              className="text-base text-blue-600 hover:text-blue-700 font-semibold"
              to="/signup"
            >
              Create New Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
