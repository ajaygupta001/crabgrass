import React, { useState } from "react";
import { NavLink } from "react-router-dom";
export default function Sidebar() {
  const [list, setList] = useState();
  const [peopleShow, setPeopleShow] = useState();
  const [sideBar, setsideBar] = useState();
  const [settingShow, setSettingShow] = useState();
  const [salesShow, setSalesShow] = useState();
  const [purchaseShow, setPurchaseShow] = useState();
  const [returnShow, setReturnShow] = useState();
  const [alterationShow, setAlterationShow] = useState();

  return (
      <>
      <div className="h-screen">
        <div className="w-64  sm:ml-6 lg:ml-0 mt-0 pt-0 absolute sm:relative bg-black border-r sm:h-full flex-col justify-between hidden sm:flex">
          <div className="overflow-y-auto">
            <ul className="rounded  mt-8 pb-6">
              <NavLink
                to="/"
                className="flex items-center rounded focus:outline-none   "
              >
                <li className="focus:bg-blue-300  rounded flex w-full  text-white leading-none cursor-pointer items-center py-3 px-4 hover:bg-blue-400 ">
                  <svg
                    width={24}
                    height={24} 
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H3L12 3L21 12H19"
                      stroke="#FFFFFF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 12V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V12"
                      stroke="#FFFFFF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 21V15C9 14.4696 9.21071 13.9609 9.58579 13.5858C9.96086 13.2107 10.4696 13 11 13H13C13.5304 13 14.0391 13.2107 14.4142 13.5858C14.7893 13.9609 15 14.4696 15 15V21"
                      stroke="#FFFFFF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm ml-2 ">Dashboard</span>
                </li>
              </NavLink>
              <li className="flex flex-col mt-2 w-full   text-white  cursor-pointer px-4 py-2  hover:bg-blue-400 ">
                <div
                  onClick={() => setList(!list)}
                  className="flex items-center justify-between w-full"
                >
                  <a
                    href="javascript:void(0)"
                    className="flex items-center  focus:outline-none focus:ring-2 focus:ring-white focus:rounded"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-puzzle"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                    </svg>

                    <span className="text-sm ml-2  leading-none">Products</span>
                  </a>
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 14L13 8L3 2V14Z" fill="#D1D5DB" />
                  </svg>
                </div>
                {list && (
                  <ul
                    id="list"
                    className=" text-sm mt-3    leading-none w-full"
                  >
                    <NavLink to="/listproducts">
                      <li className="py-2 pl-8  w-full cursor-pointer focus:bg-blue-400 hover:bg-blue-700 rounded">
                        Products{" "}
                      </li>
                    </NavLink>
                    <NavLink to="/enventry">
                      <li className="py-2 pl-8  w-full cursor-pointer focus:bg-blue-400 hover:bg-blue-700 rounded">
                        Enventry{" "}
                      </li>
                    </NavLink>

                    <NavLink to="/printbar">
                      <li className="mt-2 pl-8 cursor-pointer py-2 hover:bg-blue-700 rounded">
                        Re-Print Barcode
                      </li>
                    </NavLink>
                  </ul>
                )}
              </li>
              <li
                className="flex flex-col mt-2 w-full  text-white hover:bg-blue-400 cursor-pointer px-4 py-2"
                onclick="dropdownHandler(this)"
              >
                <div
                  className="flex items-center justify-between w-full"
                  onClick={() => setSalesShow(!salesShow)}
                >
                  <a
                    href="javascript:void(0)"
                    className="flex items-center rounded focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 12H4C3.44772 12 3 12.4477 3 13V19C3 19.5523 3.44772 20 4 20H8C8.55228 20 9 19.5523 9 19V13C9 12.4477 8.55228 12 8 12Z"
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14 8H10C9.44772 8 9 8.44772 9 9V19C9 19.5523 9.44772 20 10 20H14C14.5523 20 15 19.5523 15 19V9C15 8.44772 14.5523 8 14 8Z"
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20 4H16C15.4477 4 15 4.44772 15 5V19C15 19.5523 15.4477 20 16 20H20C20.5523 20 21 19.5523 21 19V5C21 4.44772 20.5523 4 20 4Z"
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4 20H18"
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-sm ml-2  leading-none">Sales</span>
                  </a>
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 14L13 8L3 2V14Z" fill="#D1D5DB" />
                  </svg>
                </div>
                {salesShow && (
                  <ul id="list" className=" text-sm mt-3  leading-none w-full">
                    <NavLink to="/listsale">
                      <li className="py-2 pl-8 hover:bg-blue-700 rounded cursor-pointer">
                        Sales
                      </li>
                    </NavLink>
                    <NavLink to="/customer-history">
                      <li className="py-2 pl-8 hover:bg-blue-700 rounded cursor-pointer">
                        Customer History
                      </li>
                    </NavLink>
                  </ul>
                )}
              </li>
              <li
                className="flex flex-col mt-2 w-full hover:bg-blue-400 text-white  cursor-pointer px-4 py-2"
                onclick="dropdownHandler(this)"
              >
                <div
                  className="flex items-center justify-between w-full"
                  onClick={() => setPurchaseShow(!purchaseShow)}
                >
                  <a
                    href="javascript:void(0)"
                    className="flex items-center rounded focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-stack"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="12 4 4 8 12 12 20 8 12 4" />
                      <polyline points="4 12 12 16 20 12" />
                      <polyline points="4 16 12 20 20 16" />
                    </svg>
                    <span className="text-sm ml-2 leading-none">Purchases</span>
                  </a>
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 14L13 8L3 2V14Z" fill="#D1D5DB" />
                  </svg>
                </div>
                {purchaseShow && (
                  <ul id="list" className=" text-sm mt-3  leading-none w-full">
                    <NavLink to="/listpurchase">
                      <li className="py-2 pl-8 hover:bg-blue-700 rounded cursor-pointer">
                        Purchases
                      </li>
                    </NavLink>
                  </ul>
                )}
              </li>
              <li
                className="flex flex-col mt-2 w-full hover:bg-blue-400 text-white  cursor-pointer px-4 py-2"
                onclick="dropdownHandler(this)"
              >
                <div
                  className="flex items-center justify-between w-full"
                  onClick={() => setReturnShow(!returnShow)}
                >
                  <a
                    href="javascript:void(0)"
                    className="flex items-center rounded focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-code"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="7 8 3 12 7 16" />
                      <polyline points="17 8 21 12 17 16" />
                      <line x1={14} y1={4} x2={10} y2={20} />
                    </svg>
                    <span className="text-sm ml-2 leading-none">Return</span>
                  </a>
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 14L13 8L3 2V14Z" fill="#D1D5DB" />
                  </svg>
                </div>
                {returnShow && (
                  <ul id="list" className=" text-sm mt-3  leading-none w-full">
                    <NavLink to="/listreturn">
                      <li className="py-2 pl-8 hover:bg-blue-700 rounded cursor-pointer">
                        List Returns
                      </li>
                    </NavLink>
                    <NavLink to="/addreturn">
                      <li className="mt-2 pl-8 hover:bg-blue-700 rounded cursor-pointer py-2">
                        Add Return
                      </li>
                    </NavLink>
                  </ul>
                )}
              </li>
              <li className="flex flex-col mt-2 w-full   text-white  cursor-pointer px-4 py-2  hover:bg-blue-400 ">
                <div
                  onClick={() => setAlterationShow(!alterationShow)}
                  className="flex items-center justify-between w-full"
                >
                  <a
                    href="javascript:void(0)"
                    className="flex items-center  focus:outline-none focus:ring-2 focus:ring-white focus:rounded"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-puzzle"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                    </svg>

                    <span className="text-sm ml-2  leading-none">Alteration</span>
                  </a>
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 14L13 8L3 2V14Z" fill="#D1D5DB" />
                  </svg>
                </div>
                {alterationShow && (
                  <ul
                    id="list"
                    className=" text-sm mt-3    leading-none w-full"
                  >
                    <NavLink to="/alteration">
                      <li className="py-2 pl-8  w-full cursor-pointer focus:bg-blue-400 hover:bg-blue-700 rounded">
                       Add Alteration
                      </li>
                    </NavLink>
                    <NavLink to="/show-altertion">
                      <li className="py-2 pl-8  w-full cursor-pointer focus:bg-blue-400 hover:bg-blue-700 rounded">
                        Show Alteration{" "}
                      </li>
                    </NavLink>
                  </ul>
                )}
              </li>
              <li
                className="flex flex-col mt-2 w-full hover:bg-blue-400 text-white  cursor-pointer px-4 py-2"
                onclick="dropdownHandler(this)"
              >
                <div
                  className="flex items-center justify-between w-full"
                  onClick={() => setPeopleShow(!peopleShow)}
                >
                  <a
                    href="javascript:void(0)"
                    className="flex items-center rounded focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3 21V19C3 17.9391 3.42143 16.9217 4.17157 16.1716C4.92172 15.4214 5.93913 15 7 15H11C12.0609 15 13.0783 15.4214 13.8284 16.1716C14.5786 16.9217 15 17.9391 15 19V21"
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21 21V19C20.9949 18.1172 20.6979 17.2608 20.1553 16.5644C19.6126 15.868 18.8548 15.3707 18 15.15"
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-sm ml-2 leading-none">People</span>
                  </a>
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 14L13 8L3 2V14Z" fill="#D1D5DB" />
                  </svg>
                </div>
                {peopleShow && (
                  <ul id="list" className=" text-sm mt-3  leading-none w-full">
                    <NavLink to="/listuser">
                      <li className="py-2 pl-8 hover:bg-blue-700 rounded cursor-pointer">
                        List Users
                      </li>
                    </NavLink>

                    <NavLink to="/listsalesman">
                      <li className="mt-2 pl-8 hover:bg-blue-700 rounded cursor-pointer py-2">
                        List Salesman
                      </li>
                    </NavLink>
                  </ul>
                )}
              </li>
              <li
                className="flex flex-col mt-2 w-full hover:bg-blue-400 text-white  cursor-pointer px-4 py-2"
                onclick="dropdownHandler(this)"
              >
                <div
                  className="flex items-center justify-between w-full"
                  onClick={() => setSettingShow(!settingShow)}
                >
                  <a
                    href="javascript:void(0)"
                    className="flex items-center rounded focus:outline-none "
                  >
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.325 4.317C10.751 2.561 13.249 2.561 13.675 4.317C13.7389 4.5808 13.8642 4.82578 14.0407 5.032C14.2172 5.23822 14.4399 5.39985 14.6907 5.50375C14.9414 5.60764 15.2132 5.65085 15.4838 5.62987C15.7544 5.60889 16.0162 5.5243 16.248 5.383C17.791 4.443 19.558 6.209 18.618 7.753C18.4769 7.98466 18.3924 8.24634 18.3715 8.51677C18.3506 8.78721 18.3938 9.05877 18.4975 9.30938C18.6013 9.55999 18.7627 9.78258 18.9687 9.95905C19.1747 10.1355 19.4194 10.2609 19.683 10.325C21.439 10.751 21.439 13.249 19.683 13.675C19.4192 13.7389 19.1742 13.8642 18.968 14.0407C18.7618 14.2172 18.6001 14.4399 18.4963 14.6907C18.3924 14.9414 18.3491 15.2132 18.3701 15.4838C18.3911 15.7544 18.4757 16.0162 18.617 16.248C19.557 17.791 17.791 19.558 16.247 18.618C16.0153 18.4769 15.7537 18.3924 15.4832 18.3715C15.2128 18.3506 14.9412 18.3938 14.6906 18.4975C14.44 18.6013 14.2174 18.7627 14.0409 18.9687C13.8645 19.1747 13.7391 19.4194 13.675 19.683C13.249 21.439 10.751 21.439 10.325 19.683C10.2611 19.4192 10.1358 19.1742 9.95929 18.968C9.7828 18.7618 9.56011 18.6001 9.30935 18.4963C9.05859 18.3924 8.78683 18.3491 8.51621 18.3701C8.24559 18.3911 7.98375 18.4757 7.752 18.617C6.209 19.557 4.442 17.791 5.382 16.247C5.5231 16.0153 5.60755 15.7537 5.62848 15.4832C5.64942 15.2128 5.60624 14.9412 5.50247 14.6906C5.3987 14.44 5.23726 14.2174 5.03127 14.0409C4.82529 13.8645 4.58056 13.7391 4.317 13.675C2.561 13.249 2.561 10.751 4.317 10.325C4.5808 10.2611 4.82578 10.1358 5.032 9.95929C5.23822 9.7828 5.39985 9.56011 5.50375 9.30935C5.60764 9.05859 5.65085 8.78683 5.62987 8.51621C5.60889 8.24559 5.5243 7.98375 5.383 7.752C4.443 6.209 6.209 4.442 7.753 5.382C8.753 5.99 10.049 5.452 10.325 4.317Z"
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-sm ml-2 leading-none">Settings</span>
                  </a>
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 14L13 8L3 2V14Z" fill="#D1D5DB" />
                  </svg>
                </div>
                {settingShow && (
                  <ul id="list" className=" text-sm mt-3  leading-none w-full">
                    <li className="py-2 pl-8 hover:bg-blue-700 rounded cursor-pointer">
                      System Setting
                    </li>
                    <NavLink to="/category">
                      <li className="py-2 pl-8 hover:bg-blue-700 rounded cursor-pointer">
                        Add Category
                      </li>
                    </NavLink>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
        <nav className="sm:hidden">
          <div className="border-b border-gray-200 py-4 px-6 w-full flex sm:hidden justify-between items-center bg-white fixed top-0 z-40">
            <div
              aria-label="logo"
              role="img"
              tabIndex={0}
              className="focus:outline-none w-24"
            >
              <svg
                width={183}
                height={26}
                viewBox="0 0 183 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M53.8409 13.2727C53.8409 7.75 50.6023 4.30682 46.1364 4.30682C41.6705 4.30682 38.4318 7.75 38.4318 13.2727C38.4318 18.7955 41.6705 22.2386 46.1364 22.2386C50.6023 22.2386 53.8409 18.7955 53.8409 13.2727ZM51.7955 13.2727C51.7955 17.8068 49.3068 20.2614 46.1364 20.2614C42.9659 20.2614 40.4773 17.8068 40.4773 13.2727C40.4773 8.73864 42.9659 6.28409 46.1364 6.28409C49.3068 6.28409 51.7955 8.73864 51.7955 13.2727ZM67.8267 8.90909H65.6449L62.0312 19.3409H61.8949L58.2812 8.90909H56.0994L60.9403 22H62.9858L67.8267 8.90909ZM75.331 22.2727C78.8764 22.2727 81.2628 19.5795 81.2628 15.5227C81.2628 11.4318 78.8764 8.73864 75.331 8.73864C71.7855 8.73864 69.3991 11.4318 69.3991 15.5227C69.3991 19.5795 71.7855 22.2727 75.331 22.2727ZM75.331 20.4659C72.6378 20.4659 71.4105 18.1477 71.4105 15.5227C71.4105 12.8977 72.6378 10.5455 75.331 10.5455C78.0241 10.5455 79.2514 12.8977 79.2514 15.5227C79.2514 18.1477 78.0241 20.4659 75.331 20.4659ZM86.3445 14.125C86.3445 11.8409 87.7592 10.5455 89.6854 10.5455C91.5518 10.5455 92.6854 11.7642 92.6854 13.8182V22H94.6967V13.6818C94.6967 10.3409 92.9155 8.73864 90.2649 8.73864C88.2876 8.73864 87.0604 9.625 86.4467 10.9545H86.2763V8.90909H84.3331V22H86.3445V14.125ZM98.6449 22H100.759V15.1818H104.577C104.73 15.1818 104.875 15.1818 105.02 15.1733L108.702 22H111.156L107.21 14.7898C109.435 14.0312 110.474 12.2159 110.474 9.89773C110.474 6.8125 108.634 4.54545 104.543 4.54545H98.6449V22ZM100.759 13.2727V6.42045H104.474C107.304 6.42045 108.395 7.80114 108.395 9.89773C108.395 11.9943 107.304 13.2727 104.509 13.2727H100.759ZM121.974 16.6477C121.974 19.1023 120.099 20.2273 118.599 20.2273C116.928 20.2273 115.735 19 115.735 17.0909V8.90909H113.724V17.2273C113.724 20.5682 115.496 22.1705 117.951 22.1705C119.928 22.1705 121.224 21.1136 121.837 19.7841H121.974V22H123.985V8.90909H121.974V16.6477ZM133.158 22.2727C135.817 22.2727 137.76 20.9432 138.374 18.9659L136.43 18.4205C135.919 19.7841 134.734 20.4659 133.158 20.4659C130.797 20.4659 129.169 18.9403 129.075 16.1364H138.578V15.2841C138.578 10.4091 135.68 8.73864 132.953 8.73864C129.408 8.73864 127.055 11.5341 127.055 15.5568C127.055 19.5795 129.374 22.2727 133.158 22.2727ZM129.075 14.3977C129.212 12.3608 130.652 10.5455 132.953 10.5455C135.135 10.5455 136.533 12.1818 136.533 14.3977H129.075ZM146.581 22.2727C149.104 22.2727 149.956 20.7045 150.399 19.9886H150.638V22H152.581V4.54545H150.57V10.9886H150.399C149.956 10.3068 149.172 8.73864 146.615 8.73864C143.308 8.73864 141.024 11.3636 141.024 15.4886C141.024 19.6477 143.308 22.2727 146.581 22.2727ZM146.854 20.4659C144.331 20.4659 143.036 18.25 143.036 15.4545C143.036 12.6932 144.297 10.5455 146.854 10.5455C149.308 10.5455 150.604 12.5227 150.604 15.4545C150.604 18.4205 149.274 20.4659 146.854 20.4659ZM162.033 22.2727C164.692 22.2727 166.635 20.9432 167.249 18.9659L165.305 18.4205C164.794 19.7841 163.609 20.4659 162.033 20.4659C159.672 20.4659 158.044 18.9403 157.95 16.1364H167.453V15.2841C167.453 10.4091 164.555 8.73864 161.828 8.73864C158.283 8.73864 155.93 11.5341 155.93 15.5568C155.93 19.5795 158.249 22.2727 162.033 22.2727ZM157.95 14.3977C158.087 12.3608 159.527 10.5455 161.828 10.5455C164.01 10.5455 165.408 12.1818 165.408 14.3977H157.95ZM172.524 14.125C172.524 11.8409 173.939 10.5455 175.865 10.5455C177.732 10.5455 178.865 11.7642 178.865 13.8182V22H180.876V13.6818C180.876 10.3409 179.095 8.73864 176.445 8.73864C174.467 8.73864 173.24 9.625 172.626 10.9545H172.456V8.90909H170.513V22H172.524V14.125Z"
                  fill="#1F2937"
                />
                <path
                  d="M1 13H0H1ZM5.5 13H4.5H5.5ZM13 20.5V21.5V20.5ZM20.5 13H21.5H20.5ZM13 0C9.55219 0 6.24558 1.36964 3.80761 3.80761L5.22183 5.22183C7.28473 3.15893 10.0826 2 13 2V0ZM3.80761 3.80761C1.36964 6.24558 0 9.55219 0 13H2C2 10.0826 3.15893 7.28473 5.22183 5.22183L3.80761 3.80761ZM0 13C0 16.4478 1.36964 19.7544 3.80761 22.1924L5.22183 20.7782C3.15893 18.7153 2 15.9174 2 13H0ZM3.80761 22.1924C6.24558 24.6304 9.55219 26 13 26V24C10.0826 24 7.28473 22.8411 5.22183 20.7782L3.80761 22.1924ZM13 26C16.4478 26 19.7544 24.6304 22.1924 22.1924L20.7782 20.7782C18.7153 22.8411 15.9174 24 13 24V26ZM22.1924 22.1924C24.6304 19.7544 26 16.4478 26 13H24C24 15.9174 22.8411 18.7153 20.7782 20.7782L22.1924 22.1924ZM26 13C26 9.55219 24.6304 6.24558 22.1924 3.80761L20.7782 5.22183C22.8411 7.28473 24 10.0826 24 13H26ZM22.1924 3.80761C19.7544 1.36964 16.4478 0 13 0V2C15.9174 2 18.7153 3.15893 20.7782 5.22183L22.1924 3.80761ZM13 4.5C10.7457 4.5 8.58365 5.39553 6.98959 6.98959L8.40381 8.40381C9.62279 7.18482 11.2761 6.5 13 6.5V4.5ZM6.98959 6.98959C5.39553 8.58365 4.5 10.7457 4.5 13H6.5C6.5 11.2761 7.18482 9.62279 8.40381 8.40381L6.98959 6.98959ZM4.5 13C4.5 15.2543 5.39553 17.4163 6.98959 19.0104L8.40381 17.5962C7.18482 16.3772 6.5 14.7239 6.5 13H4.5ZM6.98959 19.0104C8.58365 20.6045 10.7457 21.5 13 21.5V19.5C11.2761 19.5 9.62279 18.8152 8.40381 17.5962L6.98959 19.0104ZM13 21.5C15.2543 21.5 17.4163 20.6045 19.0104 19.0104L17.5962 17.5962C16.3772 18.8152 14.7239 19.5 13 19.5V21.5ZM19.0104 19.0104C20.6045 17.4163 21.5 15.2543 21.5 13H19.5C19.5 14.7239 18.8152 16.3772 17.5962 17.5962L19.0104 19.0104ZM21.5 13C21.5 10.7457 20.6045 8.58365 19.0104 6.98959L17.5962 8.40381C18.8152 9.62279 19.5 11.2761 19.5 13H21.5ZM19.0104 6.98959C17.4163 5.39553 15.2543 4.5 13 4.5V6.5C14.7239 6.5 16.3772 7.18482 17.5962 8.40381L19.0104 6.98959ZM7.8753 6.21913C5.19967 8.35964 3.65772 10.9697 3.37911 14.0345C3.10382 17.0626 4.07465 20.3962 6.13176 23.9961L7.86824 23.0039C5.92535 19.6038 5.14618 16.6874 5.37089 14.2155C5.59228 11.7803 6.80033 9.64036 9.12469 7.78087L7.8753 6.21913ZM18.1247 19.7809C20.7961 17.6437 22.3416 15.0621 22.6208 12.0203C22.8966 9.01632 21.9237 5.70864 19.8682 2.11152L18.1318 3.1038C20.0763 6.50668 20.8534 9.39516 20.6292 11.8374C20.4084 14.2418 19.2039 16.3563 16.8753 18.2191L18.1247 19.7809Z"
                  fill="#1F2937"
                />
              </svg>
            </div>
            <div>
              <button
                id="menu"
                aria-label="open menu"
                className="focus:outline-none focus:ring-2 focus:ring-gray-700 rounded-md text-gray-800 mt-2"
                onClick={() => setsideBar(!sideBar)}
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 10H3"
                    stroke="#1F2937"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 6H3"
                    stroke="#1F2937"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 14H3"
                    stroke="#1F2937"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 18H3"
                    stroke="#1F2937"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/*Mobile responsive sidebar*/}
          <div
            className={
              sideBar
                ? "absolute w-full h-full transform -translate-x-full transition duration-500 z-40 md:hidden"
                : "absolute w-full h-full transform translate-x-0 transition duration-500 z-40 md:hidden"
            }
          >
            <div className="w-full sm:ml-5 z-40 fixed   top-0 bg-white shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
              <div className="h-full md:hidden">
                <div className="flex flex-col justify-between h-full w-full">
                  <div className="overflow-y-auto">
                    <div className="px-6 mt-6 flex w-full items-center justify-between">
                      <div className="flex items-center justify-between w-full"></div>
                    </div>
                    <ul className="px-4 mt-12">
                      <li className="bg-gray-50 rounded flex w-full justify-between text-gray-800  leading-none cursor-pointer items-center py-3 px-4">
                        <a
                          href="javascript:void(0)"
                          className="flex items-center rounded focus:outline-none focus:ring-2 focus:ring-white"
                        >
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5 12H3L12 3L21 12H19"
                              stroke="#1F2937"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M5 12V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V12"
                              stroke="#1F2937"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9 21V15C9 14.4696 9.21071 13.9609 9.58579 13.5858C9.96086 13.2107 10.4696 13 11 13H13C13.5304 13 14.0391 13.2107 14.4142 13.5858C14.7893 13.9609 15 14.4696 15 15V21"
                              stroke="#1F2937"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="text-sm ml-2 text-gray-800">
                            Dashboard
                          </span>
                        </a>
                      </li>
                      <li className="flex flex-col mt-2 w-full hover:bg-gray-50 text-gray-600 hover:text-gray-800 cursor-pointer px-4 py-2">
                        <div
                          onClick={() => setList(!list)}
                          className="flex items-center justify-between w-full"
                        >
                          <a
                            href="javascript:void(0)"
                            className="flex items-center rounded focus:outline-none focus:ring-2 focus:ring-white"
                          >
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.7 8C16.501 7.43524 16.1374 6.94297 15.6563 6.58654C15.1751 6.23011 14.5983 6.02583 14 6H10C9.20435 6 8.44129 6.31607 7.87868 6.87868C7.31607 7.44129 7 8.20435 7 9C7 9.79565 7.31607 10.5587 7.87868 11.1213C8.44129 11.6839 9.20435 12 10 12H14C14.7956 12 15.5587 12.3161 16.1213 12.8787C16.6839 13.4413 17 14.2044 17 15C17 15.7956 16.6839 16.5587 16.1213 17.1213C15.5587 17.6839 14.7956 18 14 18H10C9.40175 17.9742 8.82491 17.7699 8.34373 17.4135C7.86255 17.057 7.49905 16.5648 7.3 16"
                                stroke="#4B5563"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M12 18V21M12 3V6V3Z"
                                stroke="#4B5563"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span className="text-sm ml-2  leading-none">
                              Products
                            </span>
                          </a>
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M3 14L13 8L3 2V14Z" fill="#D1D5DB" />
                          </svg>
                        </div>
                        {list && (
                          <ul
                            id="list"
                            className=" text-sm mt-3  leading-none w-full"
                          >
                            <li className="py-2 pl-8 hover:bg-gray-100 cursor-pointer">
                              List Products
                            </li>
                            <li className="mt-2 pl-8 hover:bg-gray-100 cursor-pointer py-2">
                              Add Product
                            </li>
                            <li className="mt-2 pl-8 hover:bg-gray-100 cursor-pointer py-2">
                              Print Barcode
                            </li>
                          </ul>
                        )}
                      </li>
                      <li
                        className="flex flex-col mt-2 w-full hover:bg-gray-50 text-gray-600 hover:text-gray-800 cursor-pointer px-4 py-2"
                        onclick="dropdownHandler(this)"
                      >
                        <div
                          className="flex items-center justify-between w-full"
                          onClick={() => setSalesShow(!salesShow)}
                        >
                          <a
                            href="javascript:void(0)"
                            className="flex items-center rounded focus:outline-none focus:ring-2 focus:ring-white"
                          >
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8 12H4C3.44772 12 3 12.4477 3 13V19C3 19.5523 3.44772 20 4 20H8C8.55228 20 9 19.5523 9 19V13C9 12.4477 8.55228 12 8 12Z"
                                stroke="#4B5563"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M14 8H10C9.44772 8 9 8.44772 9 9V19C9 19.5523 9.44772 20 10 20H14C14.5523 20 15 19.5523 15 19V9C15 8.44772 14.5523 8 14 8Z"
                                stroke="#4B5563"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M20 4H16C15.4477 4 15 4.44772 15 5V19C15 19.5523 15.4477 20 16 20H20C20.5523 20 21 19.5523 21 19V5C21 4.44772 20.5523 4 20 4Z"
                                stroke="#4B5563"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M4 20H18"
                                stroke="#4B5563"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span className="text-sm ml-2  leading-none">
                              Sales
                            </span>
                          </a>
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M3 14L13 8L3 2V14Z" fill="#D1D5DB" />
                          </svg>
                        </div>
                        {salesShow && (
                          <ul
                            id="list"
                            className=" text-sm mt-3  leading-none w-full"
                          >
                            <NavLink to="/listsale">
                              <li className="py-2 pl-8 hover:bg-gray-100 cursor-pointer">
                                List Sales
                              </li>
                            </NavLink>

                            <NavLink to="/addsale">
                              <li className="mt-2 pl-8 hover:bg-gray-100 cursor-pointer py-2">
                                Add Sale
                              </li>
                            </NavLink>
                          </ul>
                        )}
                      </li>
                      <li
                        className="flex flex-col mt-2 w-full hover:bg-gray-50 text-gray-600 hover:text-gray-800 cursor-pointer px-4 py-2"
                        onclick="dropdownHandler(this)"
                      >
                        <div
                          className="flex items-center justify-between w-full"
                          onClick={() => setPurchaseShow(!purchaseShow)}
                        >
                          <a
                            href="javascript:void(0)"
                            className="flex items-center rounded focus:outline-none focus:ring-2 focus:ring-white"
                          >
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                                stroke="#4B5563"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M3 21V19C3 17.9391 3.42143 16.9217 4.17157 16.1716C4.92172 15.4214 5.93913 15 7 15H11C12.0609 15 13.0783 15.4214 13.8284 16.1716C14.5786 16.9217 15 17.9391 15 19V21"
                                stroke="#4B5563"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                                stroke="#4B5563"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M21 21V19C20.9949 18.1172 20.6979 17.2608 20.1553 16.5644C19.6126 15.868 18.8548 15.3707 18 15.15"
                                stroke="#4B5563"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span className="text-sm ml-2 leading-none">
                              Purchases
                            </span>
                          </a>
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M3 14L13 8L3 2V14Z" fill="#D1D5DB" />
                          </svg>
                        </div>
                        {purchaseShow && (
                          <ul
                            id="list"
                            className=" text-sm mt-3  leading-none w-full"
                          >
                            <NavLink to="/listpurchase">
                              <li className="py-2 pl-8 hover:bg-gray-100 cursor-pointer">
                                List Purchases
                              </li>
                            </NavLink>
                            <NavLink to="/addpurchase">
                              <li className="mt-2 pl-8 hover:bg-gray-100 cursor-pointer py-2">
                                Add Purchase
                              </li>
                            </NavLink>
                          </ul>
                        )}
                      </li>
                      <li
                        className="flex flex-col mt-2 w-full hover:bg-gray-50 text-gray-600 hover:text-gray-800 cursor-pointer px-4 py-2"
                        onclick="dropdownHandler(this)"
                      >
                        <div
                          className="flex items-center justify-between w-full"
                          onClick={() => setReturnShow(!returnShow)}
                        >
                          <a
                            href="javascript:void(0)"
                            className="flex items-center rounded focus:outline-none focus:ring-2 focus:ring-white"
                          >
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                                stroke="#4B5563"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M3 21V19C3 17.9391 3.42143 16.9217 4.17157 16.1716C4.92172 15.4214 5.93913 15 7 15H11C12.0609 15 13.0783 15.4214 13.8284 16.1716C14.5786 16.9217 15 17.9391 15 19V21"
                                stroke="#4B5563"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                                stroke="#4B5563"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M21 21V19C20.9949 18.1172 20.6979 17.2608 20.1553 16.5644C19.6126 15.868 18.8548 15.3707 18 15.15"
                                stroke="#4B5563"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span className="text-sm ml-2 leading-none">
                              Return
                            </span>
                          </a>
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M3 14L13 8L3 2V14Z" fill="#D1D5DB" />
                          </svg>
                        </div>
                        {returnShow && (
                          <ul
                            id="list"
                            className=" text-sm mt-3  leading-none w-full"
                          >
                            <NavLink to="/listreturn">
                              <li className="py-2 pl-8 hover:bg-gray-100 cursor-pointer">
                                List Returns
                              </li>
                            </NavLink>
                            <NavLink to="/addreturn">
                              <li className="mt-2 pl-8 hover:bg-gray-100 cursor-pointer py-2">
                                Add Return
                              </li>
                            </NavLink>
                          </ul>
                        )}
                      </li>
                      <li
                        className="flex flex-col mt-2 w-full hover:bg-gray-50 text-gray-600 hover:text-gray-800 cursor-pointer px-4 py-2"
                        onclick="dropdownHandler(this)"
                      >
                        <div className="flex items-center justify-between w-full">
                          <a
                            href="javascript:void(0)"
                            className="flex items-center rounded focus:outline-none focus:ring-2 focus:ring-white"
                          >
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                                stroke="#4B5563"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M3 21V19C3 17.9391 3.42143 16.9217 4.17157 16.1716C4.92172 15.4214 5.93913 15 7 15H11C12.0609 15 13.0783 15.4214 13.8284 16.1716C14.5786 16.9217 15 17.9391 15 19V21"
                                stroke="#4B5563"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                                stroke="#4B5563"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M21 21V19C20.9949 18.1172 20.6979 17.2608 20.1553 16.5644C19.6126 15.868 18.8548 15.3707 18 15.15"
                                stroke="#4B5563"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span className="text-sm ml-2 leading-none">
                              Promos
                            </span>
                          </a>
                        </div>
                      </li>
                      <li
                        className="flex flex-col mt-2 w-full hover:bg-gray-50 text-gray-600 hover:text-gray-800 cursor-pointer px-4 py-2"
                        onclick="dropdownHandler(this)"
                      >
                        <div
                          className="flex items-center justify-between w-full"
                          onClick={() => setPeopleShow(!peopleShow)}
                        >
                          <a
                            href="javascript:void(0)"
                            className="flex items-center rounded focus:outline-none focus:ring-2 focus:ring-white"
                          >
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M18 5H6C4.89543 5 4 5.89543 4 7V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V7C20 5.89543 19.1046 5 18 5Z"
                                stroke="#4B5563"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M16 3V7"
                                stroke="#4B5563"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M8 3V7"
                                stroke="#4B5563"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M4 11H20"
                                stroke="#4B5563"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span className="text-sm ml-2 leading-none">
                              Peoples
                            </span>
                          </a>
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M3 14L13 8L3 2V14Z" fill="#D1D5DB" />
                          </svg>
                        </div>
                        {peopleShow && (
                          <ul
                            id="list"
                            className=" text-sm mt-3  leading-none w-full"
                          >
                            <NavLink to="/listuser">
                              <li className="py-2 pl-8 hover:bg-gray-100 cursor-pointer">
                                List Users
                              </li>
                            </NavLink>

                            <NavLink to="/listsalesman">
                              <li className="mt-2 pl-8 hover:bg-gray-100 cursor-pointer py-2">
                                List Salesman
                              </li>
                            </NavLink>
                          </ul>
                        )}
                      </li>
                      <li
                        className="flex flex-col mt-2 w-full hover:bg-gray-50 text-gray-600 hover:text-gray-800 cursor-pointer px-4 py-2"
                        onclick="dropdownHandler(this)"
                      >
                        <div
                          className="flex items-center justify-between w-full"
                          onClick={() => setSettingShow(!settingShow)}
                        >
                          <a
                            href="javascript:void(0)"
                            className="flex items-center rounded focus:outline-none focus:ring-2 focus:ring-white"
                          >
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.325 4.317C10.751 2.561 13.249 2.561 13.675 4.317C13.7389 4.5808 13.8642 4.82578 14.0407 5.032C14.2172 5.23822 14.4399 5.39985 14.6907 5.50375C14.9414 5.60764 15.2132 5.65085 15.4838 5.62987C15.7544 5.60889 16.0162 5.5243 16.248 5.383C17.791 4.443 19.558 6.209 18.618 7.753C18.4769 7.98466 18.3924 8.24634 18.3715 8.51677C18.3506 8.78721 18.3938 9.05877 18.4975 9.30938C18.6013 9.55999 18.7627 9.78258 18.9687 9.95905C19.1747 10.1355 19.4194 10.2609 19.683 10.325C21.439 10.751 21.439 13.249 19.683 13.675C19.4192 13.7389 19.1742 13.8642 18.968 14.0407C18.7618 14.2172 18.6001 14.4399 18.4963 14.6907C18.3924 14.9414 18.3491 15.2132 18.3701 15.4838C18.3911 15.7544 18.4757 16.0162 18.617 16.248C19.557 17.791 17.791 19.558 16.247 18.618C16.0153 18.4769 15.7537 18.3924 15.4832 18.3715C15.2128 18.3506 14.9412 18.3938 14.6906 18.4975C14.44 18.6013 14.2174 18.7627 14.0409 18.9687C13.8645 19.1747 13.7391 19.4194 13.675 19.683C13.249 21.439 10.751 21.439 10.325 19.683C10.2611 19.4192 10.1358 19.1742 9.95929 18.968C9.7828 18.7618 9.56011 18.6001 9.30935 18.4963C9.05859 18.3924 8.78683 18.3491 8.51621 18.3701C8.24559 18.3911 7.98375 18.4757 7.752 18.617C6.209 19.557 4.442 17.791 5.382 16.247C5.5231 16.0153 5.60755 15.7537 5.62848 15.4832C5.64942 15.2128 5.60624 14.9412 5.50247 14.6906C5.3987 14.44 5.23726 14.2174 5.03127 14.0409C4.82529 13.8645 4.58056 13.7391 4.317 13.675C2.561 13.249 2.561 10.751 4.317 10.325C4.5808 10.2611 4.82578 10.1358 5.032 9.95929C5.23822 9.7828 5.39985 9.56011 5.50375 9.30935C5.60764 9.05859 5.65085 8.78683 5.62987 8.51621C5.60889 8.24559 5.5243 7.98375 5.383 7.752C4.443 6.209 6.209 4.442 7.753 5.382C8.753 5.99 10.049 5.452 10.325 4.317Z"
                                stroke="#4B5563"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                                stroke="#4B5563"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span className="text-sm ml-2 leading-none">
                              Settings
                            </span>
                          </a>
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M3 14L13 8L3 2V14Z" fill="#D1D5DB" />
                          </svg>
                        </div>
                        {settingShow && (
                          <ul
                            id="list"
                            className=" text-sm mt-3  leading-none w-full"
                          >
                            <li className="py-2 pl-8 hover:bg-gray-100 cursor-pointer">
                              List Products
                            </li>
                            <li className="mt-2 pl-8 hover:bg-gray-100 cursor-pointer py-2">
                              Add Product
                            </li>
                            <li className="mt-2 pl-8 hover:bg-gray-100 cursor-pointer py-2">
                              Print Barcode
                            </li>
                          </ul>
                        )}
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center p-4 border-t">
                    <div className="w-10 h-10 bg-cover rounded-md mr-3">
                      <img
                        className="rounded-full h-full w-full overflow-hidden shadow"
                        src="https://i.ibb.co/GTLTzZY/Unsplash-Avatars-0000s-0035-azamat-zhanisov-a5s-RFie-A3-BY-unsplash-1.png"
                        alt="avatar"
                        role="img"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium leading-none text-gray-800">
                        Anita Jane
                      </p>
                      <p className="text-sm font-medium leading-none text-gray-600 mt-1">
                        See Profile
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* Vertical navigation ends */}
      </div>
    </>
  );
}
