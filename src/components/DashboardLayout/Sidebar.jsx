import React from "react";
import { SidebarMenu } from "./sidebarMenu";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[200px] bg-gray-800 text-white min-h-screen">
      {SidebarMenu.map((menu) => (
        <div key={menu.path} className="py-4 pl-7 font-semibold text-sm hover:bg-gray-900">
          <Link to={menu.path}>
            <div className="icon">
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