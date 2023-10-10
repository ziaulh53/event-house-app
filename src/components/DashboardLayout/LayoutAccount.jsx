import React from "react";
import { Link } from "react-router-dom";
import Account from "../Home/Account";
import Sidebar from "./Sidebar";

export const LayoutAccount = ({ children }) => {
  return (
    <div className="h-screen">
      <nav className="flex justify-between items-center bg-gray-900 px-8 lg:px-16 h-16 z-10 w-full">
        <div className="text-3xl font-bold text-white">
          <Link to={"/"}>E-M</Link>
        </div>
        <ul className="flex h-full">
          <li className="px-3 text-white text-lg hover:bg-gray-600 h-full flex items-center">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-3 text-white text-lg hover:bg-gray-600 h-full flex items-center">
            <Link to={"/events"}>Events</Link>
          </li>
          <li className="px-1 flex items-center">
            <div className="px-1 text-white text-lg hover:bg-gray-600 rounded-full">
              <Link to={"#"}>
                <i className="fa-solid fa-bell"></i>
              </Link>
            </div>
          </li>
          <li className="px-3 text-white text-lg hover:bg-gray-600 h-full flex items-center">
            <Account />
          </li>
        </ul>
      </nav>
      <div className="flex">
        <Sidebar />
        <div className="w-full p-3">
          <div className="bg-slate-50 min-h-screen p-2 rounded">{children}</div>
        </div>
      </div>
    </div>
  );
};
