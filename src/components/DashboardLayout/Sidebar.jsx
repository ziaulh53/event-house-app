import React from "react";
import { SidebarMenu } from "./sidebarMenu";
import { SidebarMenuBuyer } from "./sidebarMenuBuyer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const {role} = useSelector(state => state.auth.user);
  const sidebar =( role==="buyer")?SidebarMenuBuyer:SidebarMenu;
  return (
    <div className="w-[200px] bg-gray-800 text-white min-h-screen">
      {sidebar.map((menu) => (
        <div key={menu.path} className="py-4 pl-7 font-semibold text-sm hover:bg-gray-900">
          <Link to={menu.path} className="flex hover:text-sky-400">
            <div className="icon pr-2">
              <i className={menu.iconClassName}></i>
            </div>
            <div className="">{menu.label}</div>
          </Link>
        </div>
      ))}
      {/* <SidebarOptons text={"Account"} path={"/account"} />
      <SidebarOptons text={"Create Event"} path={"/create-event"} />
      <SidebarOptons text={"My Events"} path={"/my-events"} />
      <SidebarOptons text={"Others"} path={"/account"} />
      <SidebarOptons text={"Home"} path={"/account"} />
      <SidebarOptons text={"Profile"} path={"/profile"} /> */}
    </div>
  );
};

export default Sidebar;
