import React, { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { MdOutlineDelete } from "react-icons/md";
import useScanDetection from "use-scan-detection";

function AddProducts() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [barCodeScan, setBarCodeScan] = useState("");
 
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
   // let result = await fetch(`http://crabgrassbackend.onrender.com/sale`);
   let result = await fetch(`http://localhost:7000/sale`);
    result = await result.json();
    setData(result);
  };

  const searchHandler = () => {
    let dummy = data?.filter((item) => item.barcode_id == search);
    let cartItem = cart?.filter((item) => item.barcode_id == search);

    if (cartItem?.length == 0) {
      dummy.filter((item) => (item.item = 1));

      setCart([...cart, ...dummy]);
    } else {
      let cartItem2 = cart?.filter((item) => item.barcode_id !== search);

      if (cartItem[0].item) {
        cartItem[0].item = Number(cartItem[0]?.item) + 1;
      } else {
        cartItem[0].item = 2;
      }
      cartItem2.push(cartItem[0]);

      setCart(cartItem2);
    }
  };

  const removeHandler = (id) => {
    setCart(cart.filter((item) => item.barcode_id !== id));
  };

  const dataHandler = async () => {
    if (cart.length > 0) {
      const data = await fetch(
        
        "http://localhost:7000/add-return",
       // "https://crabgrassbackend.onrender.com/add-return",
        {
          method: "POST",
          body: JSON.stringify(cart),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      await data.json();
      setCart([]);
    }
  };

  useScanDetection({
    onComplete: setBarCodeScan,
    minLength: 3,
  });

  useEffect(() => {
    scanCartFunctional();
    setBarCodeScan("");
  }, [barCodeScan]);

  const scanCartFunctional = () => {
    let dummy = data.filter((item) => item.barcode_id === barCodeScan);
    let cartItem = cart.filter((item) => item.barcode_id === barCodeScan);

    if (cartItem?.length == 0) {
      dummy.filter((item) => (item.finalP = item.price));
      dummy.filter((item) => (item.item = 1));

      setCart([...cart, ...dummy]);
    } else {
      let cartItem2 = cart?.filter((item) => item.barcode_id !== barCodeScan);

      if (cartItem[0].item) {
        cartItem[0].item = Number(cartItem[0]?.item) + 1;
      } else {
        cartItem[0].item = 2;
      }
      cartItem[0].finalP = cartItem[0].price * cartItem[0].item;
      cartItem2.push(cartItem[0]);

      setCart(cartItem2);
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
          <div className="  body-scroll">
            <div className="flex justify-center my-6 relative">
              <div className="flex justify-center ">
                <div className="mb-3 flex justify-between">
                  <div className="absolute left-4 text-2xl font-bold">
                    Return
                  </div>
                  <div className=" mb-4 flex  flex-wrap items-stretch">
                    <input
                      type="search"
                      onChange={(e) => setSearch(e.target.value)}
                      className="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
                      placeholder="Search Barcode or Name"
                      aria-label="Search"
                      aria-describedby="button-addon1"
                    />
                    <button
                      className="relative z-[2] flex items-center rounded-r bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                      type="button"
                      id="button-addon1"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      onClick={() => searchHandler()}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-20 border-b-2 rounded-2xl mx-6 flex items-center justify-around">
              <div className="flex flex-col justify-center text-gray-700">
                Total Amount:
              </div>
              <div className="flex flex-col justify-center text-gray-700">
                Total Item:
              </div>
              <div className=" ">
                <button
                  onClick={() => dataHandler()}
                  className=" rounded text-white  text-xl  px-12 py-2 bg-blue-600"
                >
                  Add
                </button>
              </div>
            </div>
            <div>
              <div className="bg-white px-4 md:px-8  my-10 w-[80vw]">
                <table className="w-[76vw] whitespace-nowrap">
                  <thead>
                    <tr className="h-10   leading-none text-black text-m bg-blue-400">
                      <th className="font-normal text-left pl-4">#</th>
                      <th className="font-normal text-left pl-11">Date </th>
                      <th className="font-normal text-left pl-6 pr-4">
                        Biller Name
                      </th>
                      <th className="font-normal text-left pr-6">
                        Customer Name
                      </th>
                      <th className="font-normal text-left pr-6">
                        Customer Contact
                      </th>
                      <th className="font-normal text-left">Barcode No.</th>
                      <th className="font-normal text-left">Price</th>
                      <th className="px-3 font-normal text-left">Quantity</th>
                      <th className="font-normal text-left w-16">product</th>
                      <th className="font-normal text-left w-16">Category</th>

                      <th className="font-normal text-left pl-2 w-16">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="w-[70%]">
                    {cart?.map((item, id) => {
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
                            <p className="mr-8 pl-5">{item.biller_name}</p>
                          </td>
                          <td>
                            <p className="mr-4">{item.customer_name}</p>
                          </td>
                          <td>
                            <p className="mr-8">{item.customer_contact}</p>
                          </td>
                          <td>
                            <p className="mr-8">{item.barcode_id}</p>
                          </td>
                          <td>
                            <p className="mr-8">{item.price}</p>
                          </td>
                          <td>
                            <div className=" h-6 flex items-center mr-6 justify-center ">
                              <p className="text-xs leading-3 ">{item.item}</p>
                            </div>
                          </td>
                          <td>
                            <div className=" h-6 flex items-center mr-6 justify-center ">
                              <p className="text-xs leading-3 ">
                                {item.product_name}
                              </p>
                            </div>
                          </td>
                          <td>
                            <div className=" h-6 flex items-center mr-4 justify-center ">
                              <p className="text-xs leading-3 ">
                                {item.product_category}
                              </p>
                            </div>
                          </td>

                          <td>
                            <div className="flex items-center">
                              <button
                                onClick={() => removeHandler(item.barcode_id)}
                                className="bg-gray-100 mr-2 text-red-600 hover:bg-blue-400 py-2.5 px-5 rounded text-sm leading-3  focus:outline-none"
                              >
                                <MdOutlineDelete size={20} />
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
        </div>
      </div>
    </>
  );
}

export default AddProducts;
