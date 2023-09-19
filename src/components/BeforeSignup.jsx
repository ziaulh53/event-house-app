import React, { useState } from "react";
import { Card } from "antd";
import { Radio } from "antd";

const BeforeSignup = ({ setUserData, userData }) => {
  const onChange = (e) => {
    setUserData({...userData, 'role': e.target.value});
  };

  return (
    <Radio.Group
      className="grid grid-cols-12 gap-5"
      onChange={onChange}
      value={userData.role}
    >
      <Radio value="seller" className="col-span-12 md:col-span-6">
        <div className="cart">
          <Card title="As a Seller" className="w-72 shadow">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              enim recusandae esse obcaecati dignissimos eveniet delectus ipsum
              ex blanditiis sit!
            </p>
          </Card>
        </div>
      </Radio>
      <Radio value="buyer" className="col-span-12 md:col-span-6">
        <div className="cart">
          <Card title="As a Buyer" className="w-72 shadow">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              enim recusandae esse obcaecati dignissimos eveniet delectus ipsum
              ex blanditiis sit!
            </p>
          </Card>
        </div>
      </Radio>
    </Radio.Group>
  );
};

export default BeforeSignup;
