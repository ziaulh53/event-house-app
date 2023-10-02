import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { api, auth } from "../api";
import { notify } from "../utils";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const token = searchParams.get('token');//getting token from url
  const email = searchParams.get('email');//getting email from url

  const [resetPassword, setResetPassword] = useState({
    newPassword: "",
    cNewPassword: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setResetPassword({ ...resetPassword, [name]: value });
  };

  const onSubmit = async () => {
    try {
      const result = await api.post(auth.resetPassword, {token,email,password:resetPassword.newPassword});
      if (result.success) {
        notify(result);
        navigate('/signin');
      }else{
      notify(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const disable= resetPassword.cNewPassword !== resetPassword.newPassword;

  return (
    <div className=" w-full h-screen flex items-center justify-center">
      <div className="border w-[70%] md:w-[40%] rounded shadow">
        <div>
          <h2 className="bg-gray-700 text-white text-2xl md:text-3xl text-center py-4 font-semibold rounded-t">
          Reset Password
          </h2>
        </div>
        <div className="p-6">
          <div className="mt-3">
            <label className="text-base md:text-lg font-semibold">
              New Password
            </label>
            <input
              className="w-full py-2 px-3 border shadow rounded mt-2 focus:outline-none"
              value={resetPassword.newPassword}
              onChange={onChange}
              type="password"
              placeholder="Enter Your New Password"
              name="newPassword"
            />
          </div>

          <div className="mt-3">
            <label className="text-base md:text-lg font-semibold">
              Confirm New Password
            </label>
            <input
              className="w-full py-2 px-3 border shadow rounded mt-2 focus:outline-none"
              value={resetPassword.cNewPassword}
              onChange={onChange}
              type="password"
              placeholder="Confirm New Password"
              name="cNewPassword"
            />
          </div>

          <div className="mt-5 text-center">
            <button
              className="w-full border p-2 shadow text-lg text-white bg-blue-500 font-semibold rounded"
              type="button"
              disabled={disable}
                onClick={onSubmit}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
