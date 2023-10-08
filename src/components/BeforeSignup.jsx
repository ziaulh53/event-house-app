import React from "react";
import { Card, Space } from "antd";
import { Radio } from "antd";
import { EventButton } from "./Shared/EventButton";

const BeforeSignup = ({ setUserData, userData, handleComponentVisible }) => {
  const onChange = (e) => {
    setUserData({ ...userData, role: e.target.value });
  };

  return (
    <div className="min-h-[53vh]">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <Radio.Group
          className="col-start-1 md:col-start-2"
          onChange={onChange}
          value={userData.role}
        >
          <Space
            direction="horizontal"
            className="grid grid-cols-1 md:grid-cols-2"
          >
            <Radio value="seller" className="w-full">
              <Card title="As a Seller" className="shadow">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </Card>
            </Radio>
            <Radio value="buyer" className="w-full">
              <Card title="As a Buyer" className="shadow">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </Card>
            </Radio>
          </Space>
        </Radio.Group>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-5">
        <div className="text-center md:col-start-2">
          <EventButton
            btnText="NEXT"
            className="event-btn-primary w-[100px]"
            onClick={handleComponentVisible}
            disabled={!userData?.role}
          />
        </div>
      </div>
    </div>
  );
};

export default BeforeSignup;
