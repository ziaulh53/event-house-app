import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Account from "./Home/Account";

const Layout = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div>
      <nav className="flex justify-between items-center bg-gray-900 px-8 lg:px-16 h-16">
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
          {isAuthenticated && (
            <li className="px-1 flex items-center">
              <div className="px-1 text-white text-lg hover:bg-gray-600 rounded-full">
                <Link to={"#"}>
                  <i className="fa-solid fa-bell"></i>
                </Link>
              </div>
            </li>
          )}
          <li className="px-3 text-white text-lg hover:bg-gray-600 h-full flex items-center">
            {isAuthenticated ? <Account /> : <Link to={"/signin"}>Login</Link>}
          </li>
        </ul>
      </nav>
      <div className="px-4 md:px-8 lg:px-16 my-8 min-h-[60vh]">{children}</div>

      <footer className="bg-gray-800 mt-8 text-white">
        <div className="grid grid-cols-12 px-12">
          <div className="col-span-12 md:col-span-4 p-5">
            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
              About Us
            </h1>
            <p className="text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
              voluptas alias ratione consequatur voluptatem praesentium.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 p-5 text-center">
            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
              Address
            </h1>
            <ul className="text-sm md:text-base">
              <li>Purbasha 30</li>
              <li>Akhalia East</li>
              <li>Sylhet, Bangladesh</li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-4 p-5 text-right">
            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
              Contact Us
            </h1>
            <ul className="text-sm md:text-base">
              <li>
                <Link href="">Phone: 1954238</Link>
              </li>
              <li>
                <Link href="">Email: event@gmail.com</Link>
              </li>
              <li className="py-2">
                <Link to="" className="flex gap-5 justify-end">
                  <i className="fa-brands fa-facebook  text-sky-600"></i>
                  <i className="fa-brands fa-twitter  text-sky-500"></i>
                  <i className="fa-brands fa-linkedin  text-sky-600"></i>
                  <i className="fa-brands fa-whatsapp text-green-400"></i>
                  <i className="fa-brands fa-instagram text-red-400"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <center className="bg-gray-900 py-2 m-0 w-full">
          {" "}
          Copyright @ {new Date().getFullYear()}
        </center>
      </footer>
    </div>
  );
};

export default Layout;
