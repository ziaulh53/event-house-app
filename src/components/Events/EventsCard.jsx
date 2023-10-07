import { Avatar } from "antd";
import React from "react";
import EventSlider from "./EventSlider";

const EventsCard = () => {
  return (
    <div className="px-8 sm:p-0 shadow-lg rounded-lg">
      <div className="relative rounded-lg">
        <EventSlider />
        <div className="text-2xl absolute top-0 right-1">
          <i class="fa-regular fa-heart"></i>
          {/* <i class="fa-solid fa-heart"></i> */}
        </div>
      </div>

      <div className="flex justify-between py-2 px-1">
        <div className="flex">
          <div className="mr-1">
            <Avatar src="../../public/img/card-avatar.png" />
          </div>
          {/* size={64} icon={<UserOutlined />} */}
          <h2 className="font-bold">My Name</h2>
        </div>
        <div className="rating">
          <i class="fa-regular fa-star"></i>
          {/* <i class="fa-solid fa-star"></i> */}
        </div>
      </div>

      
        <p className="text-sm py-2 px-1">We are give best services on social events.</p>
      
    </div>
  );
};

export default EventsCard;
