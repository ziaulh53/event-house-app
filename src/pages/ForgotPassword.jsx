import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api, auth } from "../api";
import { useDispatch } from "react-redux";
import { notify } from "../utils";

const ForgotPassword = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [forgotpassword, setForgotpassword] = useState({
    email: "",
  });

  const onChange = (e) => {
    const {name, value} = e.target;
    setForgotpassword({ ...forgotpassword, email: value });
  };

  const onSubmit = async() => {
    try {
      const result = await api.post(auth.forgotPassword, forgotpassword);
        notify(result);
        if(result.success){
          notify(result);
      }else{
        notify(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" w-full h-screen flex items-center justify-center">
      <div className="border w-[70%] md:w-[40%] rounded shadow">
        <div>
          <h2 className="bg-gray-700 text-white text-2xl md:text-3xl text-center py-4 font-semibold rounded-t">
            Forgot Password?
          </h2>
        </div>
        <div className="p-6">
          <div>
            <label className="text-base md:text-lg font-semibold">Enter Your Email For Verification</label>
            <input
              className="w-full py-2 px-3 border shadow rounded mt-2 focus:outline-none"
              value={forgotpassword.email}
              onChange={onChange}
              type="text"
              placeholder="Enter Your Email"
              name="email"
            />
          </div>
          
          <div className="mt-5 text-center">
            <button
              className="w-full border p-2 shadow text-lg text-white bg-blue-500 font-semibold rounded"
              type="button"
              onClick={onSubmit}
            >
              Verification 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
