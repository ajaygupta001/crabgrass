import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Notification from "../components/alerts/Notificaion";
import { FcPrint } from "react-icons/fc";
import Confirmation from "./alerts/Confirmation";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Loading from "./Loading";
import Barcode from "react-barcode";
import { useReactToPrint } from "react-to-print";

function ListProducts() {
  const componentRef = useRef();
  const navigate = useNavigate();
  const [apiData, setApiData] = useState([]);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [Loader, setLoader] = useState(true);
  const [print, setPrint] = useState([]);
  const [printData, setPrintData] = useState([]);
  const [showPrint,setShowPrint]=useState(false)

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    
    
   // let result = await fetch(`https://crabgrassbackend.onrender.com/products`);
   let result = await fetch(`http://localhost:7000/products`);
    result = await result.json();
    setLoader(false);

    setApiData(result);
    setData(result);
  };
  const idDeleteRef = useRef();
  const deleteHandler = (id) => {
    setConfirm(true);
    idDeleteRef.current = id;
  };
  const deleteConfiration = async (choose) => {
    if (choose) {
      setConfirm(false);
      let result = await fetch(
     
      `http://localhost:7000/product/${idDeleteRef.current}`,
      //`https://crabgrassbackend.onrender.com/product/${idDeleteRef.current}`,
        {
          method: "DELETE",
        }
      );
      if (result.status === 200) {
        setShow(true);
        getData();
      }
    } else {
      setConfirm(false);
    }
  };

  const searchHandler = (value) => {
    setSearch(value.toLowerCase());
  };

  useEffect(() => {
    setData(
      apiData.filter((item) => item.product_name.toLowerCase().includes(search))
    );
  }, [search]);

  const printHandler = (id) => {
    const print__ = data.find((item) => item._id == id);
    setPrintData([print__]);
    createArray(print__);
    setShowPrint(true)
  };
  const createArray = (item) => {
    let arr = [];
    for (let i = 1; i <= item.quantity * 2; i++) {
      arr.push(item);
    }
    setPrint(arr);
  };

  let today = new Date().toISOString().slice(0, 10);

  const handleEnventry = async () => {
    setShowPrint(false)

    let data__ = printData.filter((item) => {
      let barcode = item._id.slice(12);
      return (
        delete item._id,
        delete item.__v,
        (item.date = today),
        (item.barcode_id = barcode)
      );
    });
 
    
    let result = await fetch("http://localhost:7000/enventry", {
  //  let result = await fetch("https://crabgrassbackend.onrender.com/enventry", {
      method: "POST",
      body: JSON.stringify(printData),
      headers: {
        "Content-type": "application/json",
      },
    });
    result = await result.json();
  };

  return (
    <div>
      <Header />
      <div className="flex ">
        <div className="  ">
          <Sidebar />
        </div>
        {Loader ? (
          <Loading />
        ) : (
          <div className="w-5/6  body-scroll">
            <div className="sm:px-6 w-full">
              <div className="px-4 md:px-10 py-4 md:py-7">
                <div className="lg:flex items-center justify-between">
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                    Product List:-
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
                          onChange={(e) => searchHandler(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="flex items-center mt-4 md:mt-0 md:ml-3 lg:ml-0">
                      <div className="w-40 py-2 px-3 bg-white lg:ml-3 border rounded border-gray-200">
                        <select className="w-full text-sm leading-3 text-gray-500 focus:outline-none">
                          <option value="SYD">Sort by Date</option>
                          <option value="SYP">Sort by Price </option>
                          <option value="SYN">Sort by name</option>
                        </select>
                      </div>
                      <button
                        onclick="popuphandler(true)"
                        onClick={() => navigate("/addproduct")}
                        className="inline-flex ml-1.5 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
                      >
                        <p className="text-sm font-medium leading-none text-white  ">
                          Add Product
                        </p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" px-4 md:px-8 xl:px-10 ">
                <table className="w-full whitespace-nowrap">
                  <thead className="">
                    <tr className="h-10 w-full text-l font-500 leading-none text-black bg-blue-400 ">
                      <th className="font-normal text-left pl-4">#</th>
                      <th className="font-normal text-left pl-14">Date </th>

                      <th className="font-normal text-left pl-11">Product </th>
                      <th className="font-normal text-left pl-1">Category</th>
                      <th className="font-normal text-left">Sub-Category</th>
                      <th className="font-normal text-left pl-6">Price</th>
                      <th className="font-normal text-left pl-4">Quantity</th>
                      <th className="font-normal text-left w-32 pl-6">Size</th>
                      <th className="font-normal text-left w-32 pl-12">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="w-full">
                    {data.map((item, id) => {
                      return (
                        <tr
                          key={id}
                          className="h-10 text-sm leading-none text-gray-700 border-b border-t border-gray-200 bg-white hover:bg-gray-100"
                        >
                          <td className="pl-4">{id + 1}</td>
                          <td className="pl-11">
                            <div className="flex items-center">{item.date}</div>
                          </td>
                          <td>
                            <p className="mr-16 pl-10">{item.product_name}</p>
                          </td>
                          <td>
                            <p className="mr-16 pl-6">
                              {item.product_category}
                            </p>
                          </td>
                          <td>
                            <p className="mr-16 pl-2">{item.sub_category}</p>
                          </td>
                          <td>
                            <div className="w-20 h-6 flex items-center mr-16 justify-center ">
                              <p className="text-xs leading-3 ">{item.price}</p>
                            </div>
                          </td>
                          <td>
                            <div className="w-20 h-6 flex items-center mr-16 justify-center ">
                              <p className="text-xs leading-3 ">
                                {item.quantity}
                              </p>
                            </div>
                          </td>
                          <td>
                            <div className="w-20 h-6 flex items-center mr-16 justify-center ">
                              <p className="text-xs leading-3 ">{item.size}</p>
                            </div>
                          </td>

                          <td>
                            <div className="flex items-center">
                              <button
                                onClick={() => navigate(`/product/${item._id}`)}
                                className="bg-gray-100 mr-3 hover:bg-blue-400 py-2.5 px-5 rounded text-sm leading-3 text-gray-500 focus:outline-none"
                              >
                                Edit
                              </button>
                              <button
                                className="bg-gray-100 mr-5 hover:bg-blue-400 py-2.5 px-5 rounded text-sm leading-3 text-gray-500 focus:outline-none"
                                onClick={() => deleteHandler(item._id)}
                              >
                                Delete
                              </button>
                              <button
                                className="bg-gray-100 mr-5 hover:bg-blue-400 py-2.5 px-5 rounded text-sm leading-3 text-gray-500 focus:outline-none"
                                onClick={() => printHandler(item._id)}
                              >
                                Print
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              {confirm ? <Confirmation onDialog={deleteConfiration} /> : null}
              <Notification
                value={"Deleted  Sucessfully"}
                msg={"Delete "}
                show={show}
                setShow={setShow}
              />
            </div>
          </div>
        )}
      </div>
      {showPrint && (
        <div className="mx-9 border-2 bg-gray-100  z-10 absolute top-16 left-80 right-0 bottom-0 max-h-[50%] max-w-[40%] height: 36vh overflow-y-auto scroll">
          <div className="m-4 " onClick={() => handleEnventry()}>
            <button
              onClick={handlePrint}
              className="flex justify-center  p-2 border-2 w-full bg-blue-700 text-white font-medium rounded "
            >
              <FcPrint size={28} /> Print
            </button>
          </div>
          <div
            className="flex flex-col m-2 my-3 pl-4  "
            ref={componentRef}
            style={{ width: "384.96px" }}
          >
            {print?.map((item) => {
              return (
                <div
                  className="  flex flex-col text-[15px] justify-center align-middle  mb-10 bg-white    "
                  style={{
                    height: "189px",
                    width: "189px",
                  }}
                >
                  <span className=" flex justify-center  text-l font-bold">
                    <span>Crabgrasss</span>
                  </span>
                  <span className="flex  justify-around">
                    <span>Code:</span> <span>{item.tax_id}</span>
                  </span>
                  <span className="flex  justify-around">
                    <span>Category:</span> <span>{item.product_category}</span>
                  </span>
                  <span className="flex  justify-around">
                    <span>Size:</span> <span>{item.size}</span>
                  </span>
                  <span className="flex  justify-around">
                    <span>MRP:</span> <span>₹{item.price}</span>
                  </span>

                  <Barcode
                    value={item._id.slice(12)}
                    height={30}
                    width={1}
                    font={1}
                    textMargin={1.2}
                    fontSize={10}
                    margin={9}
                    displayValue={true}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default ListProducts;
