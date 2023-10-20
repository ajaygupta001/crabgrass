import React, { useEffect, useRef, useState } from "react";
import { FcCdLogo, FcPrint } from "react-icons/fc";
import Barcode from "react-barcode";
import { useReactToPrint } from "react-to-print";
import Header from "./Header";
import Sidebar from "./Sidebar";

const PrintBarCode = () => {
  const componentRef = useRef();
  const [barShow, setBarShow] = useState(false);
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [searchCart, setSearchCart] = useState();
  const [qty, setQty] = useState(1);

  let today = new Date().toISOString().slice(0, 10);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const handleEnventry = async () => {
    if (cart.length) {
      const fil = cart.filter((item) => {
        let dummyid = item._id.slice(12);
        return (
          delete item._id,
          delete item.__v,
          delete item.Prototype,
          (item.date = today),
          (item.barcode_id = dummyid)
        );
      });
      const dummy = [...fil];
      // enventryPostAPI(dummy);
    }
  };

  // const enventryPostAPI = async (value) => {
  //   let result = await fetch("https://crabgrassbackend.onrender.com/enventry", {
  //     method: "POST",
  //     body: JSON.stringify(value),
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //   });
  //   result = await result.json();
  // };

  const updateHandler = () => {
    setBarShow(true);
    quantityHandler();
  };
  const resetHandler = () => {
    setBarShow(false);
    setCart([]);
  };
  useEffect(() => {
    const getData = async () => {
      let result = await fetch(
        
        `http://localhost:7000/products`
       // `https://crabgrassbackend.onrender.com/products`
      );
      result = await result.json();
      if (result) {
        setData(result);
      }
    };
    getData();
  }, []);

  const clickHandler = (e) => {
    const decide = () => {
      for (let item of cart) {
        if (item._id == e.target.value) {
          return false;
        }
      }
      const dummyData = data.filter((item) => item._id === e.target.value);
      setCart([...cart, ...dummyData]);
    };
    decide();
  };

  const deleteHandle = (id) => {
    const dummyData = cart.filter((item) => item._id !== id);
    setCart([...dummyData]);
  };
  const searchHandle = (e) => {
    e.preventDefault();
    const dummyData = data.filter((item) => item._id.slice(12) == search);
    setCart([...cart, ...dummyData]);
  };

  const addHandler = (id) => {
    const dummyData = searchCart.filter((item) => item._id === id);
    setCart([...cart, ...dummyData]);
  };

  const quantityHandler = (e, item) => {
    if (e.target.value < 1) {
      const dummyData = data.find((i) => i == item);
      dummyData.quantity = Number(1);
      return;
    } else if (!e.target.value) {
      const dummyData = data.find((i) => i == item);
      dummyData.quantity = Number(1);
      return;
    } else {
      const dummyData = data.find((i) => i == item);
      dummyData.quantity = Number(e.target.value);
      return;
    }
  };

  const createArray = (count) => {
    let arr = new Array(count);
    for (let i = 1; i <= count; i++) {
      arr.push(1);
    }
    return arr;
  };

  return (
    <div>
      <Header />
      <div className="flex ">
        <div className="  ">
          <Sidebar />
        </div>
        <div className="w-5/6  body-scroll">
          <div className="h-screen ">
            <div className="border-2   text-blue-900 text-lg font-bold flex justify-between">
              <h2 className="p-3">Print Barcode/Label</h2>
              <div className="mr-8 mt-2 ">
                <button
                  className=" py-1 px-6 mr-8 bg-green-700 rounded shadow-black text-white   hover:bg-green-500"
                  onClick={() => {
                    updateHandler();

                    // printBarCode();
                  }}
                >
                  Update
                </button>
                <button
                  className=" py-1 px-6 bg-red-700 rounded shadow-black text-white text-m hover:bg-red-500"
                  onClick={() => resetHandler()}
                >
                  Reset
                </button>
              </div>
            </div>
            <div className="border-2 h-2/3 m-8 bg-gray-100 flex flex-col justify-evenly">
              <div className=" border-2 my-8 mx-12 relative">
                <div className="flex">
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search Barcode ID"
                    className="w-full p-3 "
                  />
                  <button
                    onClick={(e) => searchHandle(e)}
                    className="px-8 py-1 mx-1 my-1 bg-indigo-600 rounded text-white"
                  >
                    ADD
                  </button>
                </div>
                <select
                  name=""
                  id=""
                  onChange={(e) => clickHandler(e)}
                  className="w-full mt-2 p-2"
                >
                  <option value="" defaultChecked>
                    Select Product
                  </option>
                  {data.map((item) => {
                    return (
                      <option className="flex justify-between" value={item._id}>
                        <span>{item.product_name}</span>{" "}
                        <span>{item.product_category}</span>
                        <span>{item.size}</span>
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="border-2 my-8 mx-12 h-auto">
                <div className="border-2 h-3/5 dark:bg-gray-800">
                  <table className="min-w-full bg-white dark:bg-gray-800 rounded">
                    <thead>
                      <tr className="w-full h-10 border-gray-300 dark:border-gray-200 border-b py-8 bg-indigo-100">
                        <th className="pl-3 text-gray-600 font-normal w-96 pr-2 text-left  text-sm tracking-normal leading-4">
                          Product Name (Product Code)
                        </th>
                        <th className="text-gray-600 font-normal w-96  pr-2 text-left text-sm tracking-normal leading-4">
                          Quantity
                        </th>
                        <th className="text-gray-600 font-normal pr-2 text-left text-sm tracking-normal leading-4">
                          Variants
                        </th>
                        <th className="text-gray-600 font-normal pr-2 w-12 text-left text-sm tracking-normal leading-4">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="max-h-20 border-2">
                      {cart?.map((item, id) => {
                        return (
                          <tr
                            key={id}
                            className="h-12 border-gray-300  border-t border-b hover:border-indigo-300 hover:shadow-md cursor-pointer transition duration-150 ease-in-out"
                          >
                            <td className="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                              {item.product_name}
                            </td>
                            <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                              <input
                                type="text"
                                name="quantity"
                                placeholder="Quantity"
                                required
                                className="p-2 border-2 w-24 border-black"
                                onChange={(e) => quantityHandler(e, item)}
                              />
                            </td>
                            <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                              {item.size}
                            </td>

                            <td>
                              <div
                                onClick={() => deleteHandle(item._id)}
                                className="p-2 pr-1 bg-gray-100 hover:bg-gray-200 rounded cursor-pointer text-red-500"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon icon-tabler icon-tabler-trash"
                                  width={16}
                                  height={20}
                                  viewBox="0 0 20 20"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path stroke="none" d="M0 0h24v24H0z" />
                                  <line x1={4} y1={7} x2={20} y2={7} />
                                  <line x1={10} y1={11} x2={10} y2={17} />
                                  <line x1={14} y1={11} x2={14} y2={17} />
                                  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                </svg>
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
            {barShow && (
              <div className="mx-9 border-2 bg-gray-100 ">
                <div onClick={() => handleEnventry()} className="m-4 ">
                  <button
                    onClick={handlePrint}
                    className="flex justify-center  p-2 border-2 w-full bg-blue-700 text-white font-medium rounded"
                  >
                    <FcPrint size={28} /> Print
                  </button>
                </div>
                <div
                  className="flex flex-col m-2 my-3 pl-4  "
                  ref={componentRef}
                  style={{ width: "384.96px" }}
                >
                  {cart.map((item) => {
                    let arr = createArray(item.quantity);
                    return arr.map((i) => {
                      return (
                        <div
                          className="  flex flex-col text-[15px] justify-center align-middle  mb-10   bg-white    "
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
                            <span>Category:</span>{" "}
                            <span>{item.product_category}</span>
                          </span>
                          <span className="flex  justify-around">
                            <span>Size:</span> <span>{item.size}</span>
                          </span>
                          <span className="flex  justify-around">
                            <span>MRP:</span> <span>₹{item.price}</span>
                          </span>
                          {/* <span>Product: {item.product_category}</span>
                            <span>Price: {item.price}</span>
                            <span>Size: {item.size}</span> */}
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
                    });
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintBarCode;
