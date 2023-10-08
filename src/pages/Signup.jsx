import React, { useState } from "react";
import { AfterSignup, BeforeSignup, Layout } from "../components";

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

  return (
    <Layout>
      {!visible ? (
        <BeforeSignup
          userData={userData}
          setUserData={setUserData}
          handleComponentVisible={handleComponentVisible}
        />
      ) : (
        <AfterSignup
          userData={userData}
          setUserData={setUserData}
          handleComponentVisible={handleComponentVisible}
        />
      )}
    </Layout>
  );
};

export default Signup;
