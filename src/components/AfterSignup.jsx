import React, { useState } from "react";
import { EventButton } from "./Shared/EventButton";
import { api, auth } from "../api";
import { notify } from "../utils";
import { useNavigate } from "react-router-dom";

const AfterSignup = ({ userData, setUserData, handleComponentVisible }) => {
  const navigate = useNavigate();
  const onChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // for api call
  const onRegister = async () => {
    try {
      const result = await api.post(auth.reg, userData);

      if (result.success) {
        notify(result);
        navigate("/signin");
      } else {
        notify(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const disabled =
    !userData?.name ||
    !userData?.phone ||
    !userData?.email ||
    !userData?.password ||
    userData?.password !== userData?.cPassword;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="col-start-2">
        <span onClick={handleComponentVisible}>
          <i className="fa-solid fa-arrow-left mb-5 text-lg cursor-pointer"></i>
        </span>
        <h2 className="bg-gray-700 text-white text-2xl md:text-3xl text-center py-4 font-semibold rounded-t">
          Registration
        </h2>
        <div className="border w-full rounded shadow p-6">
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
            <label className="text-base md:text-lg font-semibold">
              Password
            </label>
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
          <EventButton
            btnText="SUBMIT"
            className="event-btn-primary w-full mt-5 py-2"
            onClick={onRegister}
            disabled={disabled || !userData?.role}
          />
        </div>
      </div>
    </div>
  );
};

export default AfterSignup;
