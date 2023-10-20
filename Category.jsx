import React, { useState } from "react";
import AddCategory from "./AddCategory";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Category = () => {
    const [show,setShow]=useState(false)
  return (
    <div>
      <Header />
      <div className="flex ">
        <div className="  ">
          <Sidebar />
        </div>
        <div className="w-5/6  body-scroll">
          <div className="sm:px-6 w-full">
            <div className="px-4 md:px-10 py-4 md:py-7">
              <div className="lg:flex items-center justify-between">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                  Categories
                </p>
                <div className="md:flex items-center mt-6 lg:mt-0">
                  <div className="flex items-center">
                    <div className="flex items-center pl-3 bg-white border w-64 rounded border-gray-200">
                      <svg
                        className="text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M8.33333 13.1667C11.555 13.1667 14.1667 10.555 14.1667 7.33333C14.1667 4.11167 11.555 1.5 8.33333 1.5C5.11167 1.5 2.5 4.11167 2.5 7.33333C2.5 10.555 5.11167 13.1667 8.33333 13.1667Z"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M17.5 17.5L12.5 12.5"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <input
                        type="text"
                        className="py-2.5 pl-1 w-full focus:outline-none text-sm rounded text-gray-600 placeholder-gray-500"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                  <div className="flex items-center mt-4 md:mt-0 md:ml-3 lg:ml-0">
                    <button
                      onClick={()=>setShow(true)}
                     
                      className="inline-flex ml-1.5 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
                    >
                      <p className="text-sm font-medium leading-none text-white  ">
                        Add Categories
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" px-4 md:px-8 xl:px-10 overflow-x-auto ">
              <table className="w-full whitespace-nowrap ">
                <thead className="">
                  <tr className="h-10 w-full text-l font-500 leading-none text-black bg-blue-400 pl-16 ">
                    <th className="font-normal text-left pl-16">Category ID</th>

                    <th className="font-normal text-left pl-32">
                      Category Desc.{" "}
                    </th>
                    <th className="font-normal text-left pl-32">
                      Parent CAtegory
                    </th>
                    <th className="font-normal text-left w-36 pl-32 pr-16">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="w-full">
                  <tr className="h-10 text-sm leading-none text-gray-700 border-b border-t border-gray-200 bg-white hover:bg-gray-100 ">
                    <td className="pl-16">hh</td>
                    <td className="pl-32">
                      <div className="flex items-center">jbvf</div>
                    </td>
                    <td>
                      <p className=" pl-32 pr-16">jhytr</p>
                    </td>

                    <td className=" pl-32 pr-16">
                      <div className="flex items-center">
                        <button className="bg-gray-100 mr-3 hover:bg-blue-400 py-2.5 px-5 rounded text-sm leading-3 text-gray-500 focus:outline-none">
                          Edit
                        </button>
                        <button className="bg-gray-100 mr-5 hover:bg-blue-400 py-2.5 px-5 rounded text-sm leading-3 text-gray-500 focus:outline-none">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
     {
        show &&  <AddCategory setShow={setShow}/>
     }
    </div>
  );
};

export default Category;
