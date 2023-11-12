import { Avatar } from "antd";
import React from "react";
import EventSlider from "./EventSlider";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Like from "./Like";
import { notify } from "../../utils";
import { api, favourite } from "../../api";

const EventsCard = ({ shadow = "shadow-lg", info, showHeart = true }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleLogout = (id) => {
    isAuthenticated ? addFavourite(id) : navigate("/signin");
  };

  const addFavourite = async (id) => {
    try {
      const res = await api.post(favourite.favourite, { service_id: id });
      notify(res);
    } catch (error) {
      notify(error);
    }
  };

  return (
    <div className={`px-8 sm:p-0 ${shadow} rounded-lg`}>
      <div className="relative rounded-lg">
        <EventSlider images={info?.images} />
        {showHeart && (
          <div
            className="text-2xl absolute top-2 right-2 cursor-pointer bg-gray-500 bg-opacity-50 px-2 text-yellow-600 rounded-lg"
            onClick={() => handleLogout(info.id)}
          >
            <i className="fa-regular fa-heart"></i>
            {/* <i className="fa-solid fa-heart"></i> */}
          </div>
        )}
      </div>

      <div className="flex justify-between py-2 px-2">
        <div className="flex">
          <div className="mr-1">
            <Avatar src={info?.user?.avatar} />
          </div>
          {/* size={64} icon={<UserOutlined />} */}
          <h2 className="font-bold">{info?.user?.name}</h2>
        </div>
        <div className="rating font-bold">
          {info?.totalRating}
          {/* <i className="fa-regular fa-star"></i> */}
          {/* <i className="fa-solid fa-star"></i> */}
        </div>
      </div>

      <p className="text-sm font-semibold py-2 px-2">{info?.title}</p>
    </div>
  );
};

export default EventsCard;
