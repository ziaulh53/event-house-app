import React from "react";
import { Dropdown, Space, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutStore } from "../../store/authSlice";
import { api, auth } from "../../api";

const Account = () => {
  const { avatar } = useSelector((state) => state.auth.user);
  
  // Avatar Background
  const bg = avatar?"":"bg-white";

  const dispatch = useDispatch();

  const onLogout = async () => {
    try {
      const result = await api.post(auth.logout);
      if (result.success) {
        dispatch(logoutStore());
      }
    } catch (error) {}
  };

  const items = [
    {
      label: (
        <Link to={"/account"} className="text-sm text-gray-900 font-semibold">
          <i className="fa-regular fa-user"></i> Account
        </Link>
      ),
      key: "0",
    },
    {
      label: (
        <Link to={"../Logout"} className="text-sm text-gray-900 font-semibold">
          <i className="fa-solid fa-list"></i> Dashboard
        </Link>
      ),
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: (
        <button
          type="button"
          onClick={onLogout}
          className="text-sm text-gray-900 font-semibold"
        >
          <i className="fa-solid fa-right-from-bracket"></i> Logout
        </button>
      ),
      key: "3",
    },
  ];

  return (
    <Space direction="vertical">
      <Space wrap>
        <Dropdown
          menu={{
            items,
          }}
          placement="bottom"
          trigger={["click"]}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <Avatar
                src={avatar}
                size="large"
                icon={<UserOutlined />}
                className={`${bg} text-gray-900`}
              />
            </Space>
          </a>
        </Dropdown>
      </Space>
    </Space>
  );
};

export default Account;
