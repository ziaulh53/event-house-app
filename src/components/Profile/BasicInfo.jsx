import React, { useState } from "react";
import { EventButton, EventInput } from "../Shared";
import { useDispatch, useSelector } from "react-redux";
import { api, auth } from "../../api";
import { updateProfile } from "../../store/authSlice";
import { notify } from "../../utils/notification";
import { getAvatar } from "../../utils";
import { Spin } from "antd";

export const BasicInfo = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [update, setUpdate] = useState({
    name: user?.name,
    phone: user?.phone,
    avatar: user?.avatar,
  });

  //Loaders
  const [loading, setLoading] = useState(false);
  const [fileLoading, setFileLoading] = useState(false);

  const onProfileUpdate = async () => {
    setLoading(true);
    try {
      const result = await api.put(auth.updateProfile, user.id, update);
      if (result?.success) {
        dispatch(updateProfile(update));
        notify(result);
      }else{
        notify(result);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setUpdate({ ...update, [name]: value });
  };

  const handleFile = async (e) => {
    setFileLoading(true);
    try {
      const result = await api.fileUpload(e.target.files[0]);
      if (result?.success) {
        setUpdate({ ...update, avatar: result.url });
      }else{
        notify(result);
      }
    } catch (error) {
      console.log(error);
    }
    setFileLoading(false);

  };

  const disabled = !update.name || !update.phone || (update.name==user?.name && update.phone==user?.phone && update.avatar==user.avatar);

  return (
    <div className=" bg-gray-200 p-5 rounded mb-5 shadow-lg">
      <Spin spinning={loading}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <EventInput
            label="Name"
            value={update.name}
            name="name"
            onChange={onChange}
          />
          <EventInput
          type="number"
            label="Phone"
            value={update.phone}
            name="phone"
            onChange={onChange}
          />

          <Spin spinning={fileLoading}>
            <div className="m-auto">
              <img
                alt=""
                src={getAvatar(update.avatar)}
                className="w-[80px] h-[80px] rounded-full "
              />
              <input type="file" onChange={handleFile} />
            </div>
          </Spin>
        </div>
        <div className="mt-5 text-end">
          <EventButton
            btnText="Update"
            className='event-btn-primary'
            disabled={disabled}
            onClick={onProfileUpdate}
          />
        </div>
      </Spin>
    </div>
  );
};


// import React from "react";

// export const EventButton = ({
//   loading = false,
//   btnText,
//   onClick,
//   className,
//   disabled=false,
// }) => {
//   return (
//     <button
//       className={className}
//       onClick={onClick}
//       disabled={disabled || loading}
//     >
//       {btnText}
//     </button>
//   );
// };

