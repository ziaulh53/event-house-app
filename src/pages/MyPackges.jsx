import React from "react";
import { LayoutAccount, PageTitle } from "../components/DashboardLayout";

const MyPackges = () => {
  return (
    <LayoutAccount>
      <PageTitle title="My Packges" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="rounded-lg bg-gradient-to-b from-indigo-200 to-indigo-50 p-5 mx-4 md:mx-0 hover:shadow-xl">
          <h1 className="text-lg font-semibold pb-3">Basic Plan</h1>
          <h2>
            <span className="text-2xl font-bold py-3">$ 4.99</span>
            <span className="text-lg text-gray-500">/month</span>
          </h2>
          <p className="text-sm text-gray-700 py-3">
            Get started with our Basic Plan kickstart your business journey
          </p>
          <div className="h-[1px] bg-gray-500 w-full"></div>
          <ul className="text-sm py-3">
            <li className="pb-3 font-semibold">
              <i className="fa-solid fa-check mr-3"></i>Can create 3 services
            </li>
            <li className="pb-3 font-semibold">
              <i className="fa-solid fa-check mr-3"></i>Basic progress tracking
            </li>
            <li className="pb-3 font-semibold">
              <i className="fa-solid fa-check mr-3"></i>Ability of membership
            </li>
          </ul>
          <input
            type="button"
            value="Go Premium"
            className="py-2 rounded-lg w-full text-white font-semibold bg-indigo-600 hover:bg-indigo-700"
          />
        </div>
        <div className="rounded-lg text-slate-50 bg-indigo-400 p-5 mx-4 md:mx-0 hover:shadow-xl">
          <div className="flex justify-between">
          <h1 className="text-lg font-semibold pb-3">Basic Plan</h1>
          <h1 className="text-base text-white font-semibold p-2 bg-yellow-600 shadow-md rounded-lg">Popular</h1>
          </div>
          <h2>
            <span className="text-2xl font-bold py-3">$ 19.99</span>
            <span className="text-lg text-slate-300">/month</span>
          </h2>
          <p className="text-sm text-slate-200 py-3">
            Get started with our Basic Plan kickstart your business journey
          </p>
          <div className="h-[1px] bg-gray-500 w-full"></div>
          <ul className="text-sm py-3">
            <li className="pb-3 font-semibold">
              <i className="fa-solid fa-check mr-3"></i>Can create 15 services
            </li>
            <li className="pb-3 font-semibold">
              <i className="fa-solid fa-check mr-3"></i>Basic progress tracking
            </li>
            <li className="pb-3 font-semibold">
              <i className="fa-solid fa-check mr-3"></i>Ability of membership
            </li>
          </ul>
          <input
            type="button"
            value="Go Premium"
            className="py-2 rounded-lg w-full text-white font-semibold bg-indigo-600 hover:bg-indigo-700"
          />
        </div>
        <div className="rounded-lg bg-gradient-to-b from-indigo-200 to-indigo-50 p-5 mx-4 md:mx-0 hover:shadow-xl">
          <h1 className="text-lg font-semibold pb-3">Basic Plan</h1>
          <h2>
            <span className="text-2xl font-bold py-3">$ 11.99</span>
            <span className="text-lg text-gray-500">/month</span>
          </h2>
          <p className="text-sm text-gray-700 py-3">
            Get started with our Basic Plan kickstart your business journey
          </p>
          <div className="h-[1px] bg-gray-500 w-full"></div>
          <ul className="text-sm py-3">
            <li className="pb-3 font-semibold">
              <i className="fa-solid fa-check mr-3"></i>Can create 4 services
            </li>
            <li className="pb-3 font-semibold">
              <i className="fa-solid fa-check mr-3"></i>Basic progress tracking
            </li>
            <li className="pb-3 font-semibold">
              <i className="fa-solid fa-check mr-3"></i>Ability of membership
            </li>
          </ul>
          <input
            type="button"
            value="Go Premium"
            className="py-2 rounded-lg w-full text-white font-semibold bg-indigo-600 hover:bg-indigo-700"
          />
        </div>
      </div>
    </LayoutAccount>
  );
};

export default MyPackges;
