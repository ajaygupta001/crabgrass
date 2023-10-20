import React, { useContext, useEffect, useState } from "react";
import productContext from "../Context/appContext";
import useScanDetection from "use-scan-detection";


const Return = ({ setShowReturn }) => {

  const { returnBillCart, setReturnBilllCart } = useContext(productContext);

  const [returnBarCode, setReturnBarCode] = useState("");
  const [salesData, setSalesData] = useState([]);
  const [returnBarCodeData, setReturnBarCodeData] = useState([]);
  const [returnBillCartData, setReturnBillCartData] = useState([]);
  const [barCodeScan, setBarCodeScan] = useState("");


  useEffect(() => {
    salesGetApi();
  }, []);

  useScanDetection({
    onComplete: setBarCodeScan,
    minLength: 3,
  });

  const salesGetApi = async () => {
    
    let result = await fetch(`http://localhost:7000/sale`);
  //  let result = await fetch(`https://crabgrassbackend.onrender.com/sale`);
    result = await result.json();
    setSalesData(result);
  };
  

  useEffect(() => {
    setReturnBarCodeData(
      salesData.filter((item) => item.barcode_id == returnBarCode)
    );
    
  }, [returnBarCode]);

  useEffect(()=>{
    setReturnBarCodeData(
      salesData.filter((item) => item.barcode_id == barCodeScan)
    );
  },[barCodeScan])
 
  const returnBillCartHandler = (e) => {  
    e.preventDefault();
    setReturnBilllCart([...returnBillCart, returnBarCodeData[0]]);
    setReturnBarCodeData([]);
    setReturnBarCode("");
    setShowReturn(false)
  };

  return (
    <div className="" >
      <div className="z-10 absolute top-0 left-0 right-0  ">
        <div className="flex items-center justify-center py-8 px-4">
          <div className="relative w-96 rounded shadow-lg p-6 dark:bg-gray-800 bg-white">
            <p className="text-lg font-bold leading-none text-gray-800 dark:text-gray-100">
              Add Return Product
            </p>
            <form className="mt-5">
              <div>
                <label className="text-xs font-semibold leading-3 text-gray-800 dark:text-gray-100">
                  {" "}
                  Barcode No.{" "}
                </label>
                <div className="py-1 rounded-lg px-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 mt-2">
                  <input
                    className="w-full focus:outline-none bg-gray-50 "
                    type="text"
                    onChange={(e) => setReturnBarCode(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="font-bold pt-3">OR</h1>
                <h3 className="text-red-500">Scan Barcode...</h3>
              </div>
              <div className="flex flex-col">
                <span className="pb-4">
                  Product Name:{returnBarCodeData[0]?.product_name}
                </span>
                <span>
                  Product Category:{returnBarCodeData[0]?.product_category}
                </span>
              </div>
              <div className="flex justify-between items-center mt-5">
                <div className="text-l font-bold">Total Items:{returnBarCodeData.length && 1}</div>
                <div className="text-l font-bold">
                  Total Amount:{returnBarCodeData[0]?.price}
                </div>
              </div>

              <button
                onClick={(e) => returnBillCartHandler(e)}
                id="submit"
                className="mt-5 focus:outline-none px-5 py-3 bg-indigo-700 dark:bg-indigo-600 hover:bg-opacity-80 rounded text-xs font-semibold leading-3 text-gray-100"
              >
                Add
              </button>
            </form>
            <div
              onClick={() => setShowReturn(false)}
              className="cursor-pointer absolute top-0 right-0 m-3 dark:text-gray-100  text-gray-600 transition duration-150 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Close"
                className="icon icon-tabler icon-tabler-x"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Return;
