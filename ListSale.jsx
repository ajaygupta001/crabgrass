import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Confirmation from "./alerts/Confirmation";
import Notification from "./alerts/Notificaion";
import Loading from "./Loading";

function ListSale() {
  const navigate = useNavigate();
  const [apiData, setApiData] = useState([]);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [confirmShow, setConfirmShow] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setData(
      apiData.filter((item) => {
        return (
          item.customer_name.includes(search) || item.customer_contact == search
        );
      })
    );
  }, [search]);

  const getData = async () => {
   
    let result = await fetch(`http://localhost:7000/sale`);
  //  let result = await fetch(`https://crabgrassbackend.onrender.com/sale`);
    result = await result.json();
    setLoader(false);
    setApiData(result);
    setData(result);
  };

  const idDeleteRef = useRef();

  const deleteHandler = (id) => {
    idDeleteRef.current = id;
    setConfirmShow(true);
  };

  const confirmDelete = async (choose) => {
    debugger;
    if (choose) {
      setConfirmShow(false);
      let result = await fetch(
        `http://localhost:7000/sale/${idDeleteRef.current}`,
        
       // `https://crabgrassbackend.onrender.com/sale/${idDeleteRef.current}`,
        {
          method: "Delete",
        }
      );
      // result=await result.json();
      if (result.status === 200) {
        setShowNotification(true);
        getData();
      }
    } else {
      setConfirmShow(false);
    }
  };

  return (
    <>
      <div>
        <Header />
        <div className="flex ">
          <div className="  ">
            <Sidebar />
          </div>

          {loader ? (
            <Loading />
          ) : (
            <div className="w-5/6  body-scroll">
              <div className=" w-full sm:px-6 ">
                <div className="px-4 md:px-10 py-4 md:py-7">
                  <div className="lg:flex items-center justify-between">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                      Sales List:-
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
                            onChange={(e) =>
                              setSearch(e.target.value.toLowerCase())
                            }
                            className="py-2.5 pl-1 w-full focus:outline-none text-sm rounded text-gray-600 placeholder-gray-500"
                            placeholder="Search Customer or Contact "
                          />
                        </div>
                      </div>
                      <div className="flex items-center mt-4 md:mt-0 md:ml-3 lg:ml-0">
                        <div className="w-40 py-2 px-3 bg-white lg:ml-3 border rounded border-gray-200">
                          <select className="w-full text-sm leading-3 text-gray-500 focus:outline-none">
                            <option>Employees</option>
                            <option>Clients</option>
                            <option>Employees</option>
                          </select>
                        </div>
                        <button
                          onclick="popuphandler(true)"
                          onClick={() => navigate("/addsale")}
                          className="inline-flex ml-1.5 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
                        >
                          <p className="text-sm font-medium leading-none text-white">
                            Add Sale
                          </p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white px-4 md:px-8 xl:px-10 overflow-x-auto">
                  <table className="w-full whitespace-nowrap">
                    <thead>
                      <tr className="h-10 w-full  leading-none text-black text-m bg-blue-400">
                        <th className="font-normal text-left pl-4">#</th>
                        <th className="font-normal text-left pl-11">Date </th>
                        <th className="font-normal text-left pl-6 pr-4">
                          Biller Name
                        </th>
                        <th className="font-normal text-left pl-6 pr-4">
                          Salesman Name
                        </th>
                        <th className="font-normal text-left pr-6">
                          Customer Name
                        </th>
                        <th className="font-normal text-left pr-6">
                          Customer Contact
                        </th>
                        <th className="font-normal text-left">Barcode No.</th>
                        <th className="font-normal text-left">Price</th>
                        <th className="font-normal text-left">Quantity</th>
                        <th className="font-normal text-left w-32">product</th>
                        <th className="font-normal text-left w-32">Category</th>

                        <th className="font-normal text-left w-32">Action</th>
                      </tr>
                    </thead>
                    <tbody className="w-full">
                      {data?.map((item, id) => {
                        return (
                          <tr
                            key={id}
                            className="h-10 text-sm leading-none text-gray-700 border-b border-t border-gray-200 bg-white hover:bg-gray-100"
                          >
                            <td className="pl-4">{id + 1}</td>
                            <td className="pl-11">
                              <div className="flex items-center">
                                {item.date}
                              </div>
                            </td>
                            <td>
                              <p className="mr-16 pl-10">{item.biller_name}</p>
                            </td>
                            <td>
                              <p className="mr-16 pl-10">{item.salesManName}</p>
                            </td>
                            <td>
                              <p className="mr-16">{item.customer_name}</p>
                            </td>
                            <td>
                              <p className="mr-20">{item.customer_contact}</p>
                            </td>
                            <td>
                              <p className="mr-16">{item.barcode_id}</p>
                            </td>
                            <td>
                              <p className="mr-16">{item.price}</p>
                            </td>
                            <td>
                              <div className="w-20 h-6 flex items-center mr-16 justify-center ">
                                <p className="text-xs leading-3 ">
                                  {item.item}
                                </p>
                              </div>
                            </td>
                            <td>
                              <div className="w-20 h-6 flex items-center mr-16 justify-center ">
                                <p className="text-xs leading-3 ">
                                  {item.product_name}
                                </p>
                              </div>
                            </td>
                            <td>
                              <div className="w-20 h-6 flex items-center mr-16 justify-center ">
                                <p className="text-xs leading-3 ">
                                  {item.product_category}
                                </p>
                              </div>
                            </td>

                            <td>
                              <div className="flex items-center">
                                <button
                                onClick={() => navigate(`/sale/${item._id}`)}

                                  className="bg-gray-100 mr-3 hover:bg-blue-400 py-2.5 px-5 rounded text-sm leading-3 text-gray-500 focus:outline-none"
                                >
                                  Edit
                                </button>
                                <button
                                onClick={() => deleteHandler(item._id)}


                                  className="bg-gray-100 mr-3 hover:bg-blue-400 py-2.5 px-5 rounded text-sm leading-3 text-gray-500 focus:outline-none"
                                >
                                  Delete
                                </button>
                               
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
        {confirmShow ? <Confirmation onDialog={confirmDelete} /> : null}
        <Notification
          show={showNotification}
          setShow={setShowNotification}
          value={"Deleted Successfully!"}
          msg={"Data deleted Successfully from Sales."}
        />
      </div>
    </>
  );
}

export default ListSale;
