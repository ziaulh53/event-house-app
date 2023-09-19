import React, { useState } from "react";
import { AfterSignup, BeforeSignup, Layout } from "../components";
import { notify } from "../utils";

const Signup = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cPassword: "",
    role: "",
  });
  const [visible, setvisible] = useState(false);
  const handleComponentVisible = () => {
    setvisible(!visible);
  };

  // for api call
  const onRegister = async ()=>{
    try {
      const res = await apoi;
      notify(res)
    } catch (error) {
      console.log(error)
    }
  }

  const disabled = !userData.name || !userData.phone || !userData.email || !userData.password || !userData.password !== userData.cPassword;
  return (
    <Layout>
      <div className="w-full min-h-screen flex justify-center items-center">
        <div>
          {visible && (
            <span onClick={handleComponentVisible}>
              <i className="fa-solid fa-arrow-left mb-5 text-lg cursor-pointer"></i>
            </span>
          )}
          {!visible ? (
            <BeforeSignup userData={userData} setUserData={setUserData} />
          ) : (
            <AfterSignup userData={userData} setUserData={setUserData} />
          )}
          <div className="text-center mt-5">
            <button
              type="button"
              onClick={ visible ? onRegister: handleComponentVisible}
              className="text-lg text-white font-semibold bg-blue-500 w-20 p-1 rounded disabled:bg-blue-400 disabled:cursor-not-allowed"
              disabled={visible? disabled: !userData?.role}
            >
              {!visible ? "Next" : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
