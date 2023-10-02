import React, { useState } from "react";
import { Link } from "react-router-dom";

const AfterSignup = ({ userData, setUserData }) => {
  const onChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="border w-full md:w-[400px] rounded shadow">
      <h2 className="bg-gray-700 text-white text-2xl md:text-3xl text-center py-4 font-semibold rounded-t">
        Registration
      </h2>
      <div className="p-6">
        <div>
          <label className="text-base md:text-lg font-semibold">Name</label>
          <input
            className="w-full py-2 px-3 border shadow rounded mt-2 focus:outline-none"
            value={userData?.name}
            onChange={onChange}
            type="text"
            placeholder="Enter Your Name"
            name="name"
          />
        </div>
        <div className="mt-3">
          <label className="text-base md:text-lg font-semibold">Email</label>
          <input
            className="w-full py-2 px-3 border shadow rounded mt-2 focus:outline-none"
            value={userData.email}
            onChange={onChange}
            type="text"
            placeholder="Enter Your Email"
            name="email"
          />
        </div>
        <div className="mt-3">
          <label className="text-base md:text-lg font-semibold">Phone</label>
          <input
            className="w-full py-2 px-3 border shadow rounded mt-2 focus:outline-none"
            value={userData.phone}
            onChange={onChange}
            type="number"
            placeholder="Enter Your Phone"
            name="phone"
          />
        </div>
        <div className="mt-3">
          <label className="text-base md:text-lg font-semibold">Password</label>
          <input
            className="w-full py-2 px-3 border shadow rounded mt-2 focus:outline-none"
            value={userData.password}
            onChange={onChange}
            type="password"
            placeholder="Enter Your Password"
            name="password"
          />
        </div>

        <div className="mt-3">
          <label className="text-base md:text-lg font-semibold">
            Confirm Password
          </label>
          <input
            className="w-full py-2 px-3 border shadow rounded mt-2 focus:outline-none"
            value={userData.cPassword}
            onChange={onChange}
            type="password"
            placeholder="Enter Your Confirm Password"
            name="cPassword"
          />
        </div>
      </div>
    </div>
  );
};

export default AfterSignup;

