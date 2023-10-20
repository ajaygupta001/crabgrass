import React, { useContext, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import Notification from "./alerts/Notificaion";
import productContext from "../Context/appContext";

export default function Header() {
  const navigate = useNavigate();
  const { showLog, setShowLog } = useContext(productContext);

  const [rotate, setRotate] = useState(false);
  const [show, setShow] = useState(false);
  const auth = JSON.parse(localStorage.getItem("CrabgrassSignin"));
  const logout = () => {
    localStorage.clear("CrabgrassSignin");
    navigate("/login");
  };

  return (
    <div className=" bg-black text-white">
      <div className=" h-full relative">
        <div className="bg-black text-white">
          <div className="2xl:container 2xl:mx-auto">
            <nav className="h-16">
              <div className=" flex flex-row justify-between">
                <div className=" flex space-x-3 items-center  lg:pl-7 sm:pl-6 py-6 pl-1 pr-4">
                  <img
                    src="./Images/crabgrasss.png"
                    alt="logo"
                    className="w-24 pr-4 left-6 top-2 absolute "
                  />
                </div>

                {/* For large (i.e. desktop and laptop sized screen) */}
                <div className="lg:flex hidden flex-auto justify-between flex-row px-32   py-2">
                  <div className="pl-20">
                    <p className=" font-normal text-xs leading-3 text-white pt-1">
                      {auth.name},
                    </p>
                    <h3 className=" font-bold text-l leading-4 text-white mt-2">
                      Welcome Back
                    </h3>
                  </div>
                </div>
                <button
                  className="absolute right-72 mt-3 px-8 py-2 border-2 flex justify-center items-center rounded bg-indigo-500 "
                  onClick={() => navigate("/pos")}
                >
                  POS
                </button>
                <div className=" hidden sm:flex justify-end flex-row lg:pr-0 sm:pr-6 py-2 pr-2 pl-8 ">
                  <div
                    onClick={() => setRotate(!rotate)}
                    className=" cursor-pointer flex justify-center items-center flex-row pb-7 pr-0 right-6 absolute pt-2"
                  >
                    <FaUserCircle size={25} />
                    <div className="ml-2">
                      <p className="text-lg leading-4 font-semibold text-white">
                        {auth.name}
                      </p>
                      <p className=" font-normal text-xs leading-3 text-white mt-1">
                        {auth.email}
                      </p>
                    </div>
                    <svg
                      className={`${
                        rotate ? "rotate-180" : ""
                      } cursor-pointer transform duration-100 xl:ml-7 lg:ml-3.5 ml-2 text-white focus:outline-none focus:ring focus:ring-offset-2 focus:ring-white`}
                      width={14}
                      height={8}
                      viewBox="0 0 14 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L7 7L13 1"
                        stroke="#ffffff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {rotate ? (
                      <div className="absolute z-10 top-14 w-36  h-30 rounded  bg-black text-white flex flex-col justify-evenly   ">
                        <div className="cursor-pointer p-2  flex items-center ">
                          {" "}
                          <FaUserCircle />{" "}
                          <b className="pl-3 text-red-500">Hi,{auth.name}</b>
                        </div>
                        <div
                          onClick={() => logout()}
                          className="cursor-pointer p-2 flex items-center px-2"
                        >
                          {" "}
                          <AiOutlineLogout />
                          <span className="pl-3">Logout</span>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
                {/* Burger Icon */}
                <div
                  id="bgIcon"
                  onClick={() => setShow(!show)}
                  className=" focus:outline-none focus:ring focus:ring-offset-2 focus:ring-gray-800 block sm:hidden cursor-pointer lg:pr-7 sm:pr-6 py-6 pr-4"
                >
                  <svg
                    className={`${show ? "hidden" : ""}`}
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className=" transform duration-150"
                      d="M4 6H20"
                      stroke="#1F2937"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 12H20"
                      stroke="#1F2937"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      className=" transform duration-150"
                      d="M4 18H20"
                      stroke="#1F2937"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <svg
                    className={`${show ? "" : "hidden"} `}
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L6 18"
                      stroke="#1F2937"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 6L18 18"
                      stroke="#1F2937"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              {/* for medium-sized devices */}
              <div className="lg:hidden hidden sm:flex flex-col lg:px-7 sm:px-6 px-4 ">
                <hr className=" w-full bg-gray-200 " />
                <div className="lg:hidden flex flex-auto justify-between mt-3 flex-row pb-4">
                  <div className>
                    <p className=" font-normal text-xs leading-3 text-gray-600">
                      Hi David
                    </p>
                    <h3 className=" font-bold text-xl leading-5 text-gray-800 mt-2">
                      Welcome Back
                    </h3>
                  </div>
                  <div className=" focus:outline-none focus:ring foucs:ring-offset-2 focus:ring-gray-800 bg-gray-50 flex items-center px-4 py-3.5 space-x-3 rounded ">
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.66667 11.3333C9.24399 11.3333 11.3333 9.24399 11.3333 6.66667C11.3333 4.08934 9.24399 2 6.66667 2C4.08934 2 2 4.08934 2 6.66667C2 9.24399 4.08934 11.3333 6.66667 11.3333Z"
                        stroke="#6B7280"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14 14L10 10"
                        stroke="#6B7280"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <input
                      aria-label="Search Bar"
                      className=" focus:outline-none w-44 lg:w-56 xl:w-64 bg-gray-50 font-normal text-sm leading-4 text-gray-500 placeholder-gray-500 "
                      type="text"
                      placeholder="Search"
                    />
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        {/* Mobile and Small devices Navigation */}
        <div
          id="MobileNavigation"
          className={`${
            show ? "" : "hidden"
          } transform duration-150 sm:hidden h-full bg-white `}
        >
          <div className=" flex flex-col justify-between h-auto ">
            <div className=" flex flex-col lg:px-7 sm:px-6 px-4">
              <hr className=" w-full bg-gray-200 " />
              <div className="lg:hidden flex flex-auto justify-between mt-3 flex-row pb-4">
                <div className>
                  <p className=" font-normal text-xs leading-3 text-gray-600">
                    Hi David
                  </p>
                  <h3 className=" font-bold text-xl leading-5 text-gray-800 mt-2">
                    Welcome Back
                  </h3>
                </div>
                <div className="cursor-pointer relative flex justify-center items-center">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
                      stroke="#1F2937"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                      stroke="#1F2937"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="animate-ping w-1.5 h-1.5 bg-indigo-700 rounded-full absolute top-1 right-0 m-auto duration-200" />
                  <div className=" w-1.5 h-1.5 bg-indigo-700 rounded-full absolute top-1 right-0 m-auto shadow-lg" />
                </div>
              </div>
              <div className=" w-auto sm:w-96 focus:outline-none focus:ring foucs:ring-offset-2 focus:ring-gray-800 bg-gray-50 flex items-center pl-4  space-x-3 rounded mt-4 ">
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.66667 11.3333C9.24399 11.3333 11.3333 9.24399 11.3333 6.66667C11.3333 4.08934 9.24399 2 6.66667 2C4.08934 2 2 4.08934 2 6.66667C2 9.24399 4.08934 11.3333 6.66667 11.3333Z"
                    stroke="#6B7280"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 14L10 10"
                    stroke="#6B7280"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input
                  aria-label="Search Bar"
                  className=" focus:outline-none w-full bg-gray-50 font-normal pl-2 text-sm leading-4  py-3.5 text-gray-500 placeholder-gray-500 "
                  type="text"
                  placeholder="Search"
                />
              </div>
            </div>
            <div className=" flex items-center flex-row py-6 px-8 bg-gray-100 absolute bottom-0 left-0 w-full">
              <img
                className="w-10 h-10 "
                src="https://i.ibb.co/QMddNDb/Ellipse-14.png"
                alt="individual person image-3"
              />
              <div className="ml-2">
                <p className="text-lg leading-4 font-semibold text-gray-800">
                  David Hulk
                </p>
                <p className=" font-normal text-xs leading-3 text-gray-600 mt-1">
                  david@alphahulk.com
                </p>
              </div>
              <svg
                onclick="rotateIcon()"
                className="cursor-pointer transform duration-100 xl:ml-7 ml-3.5 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-gray-800 "
                width={14}
                height={8}
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L13 1"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}
