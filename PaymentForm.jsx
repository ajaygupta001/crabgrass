import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import productContext from "../../Context/appContext";


const PaymentForm = ({ setShowPayment }) => {
  const navigate = useNavigate();
  const { billCart,returnBillCart } = useContext(productContext);
  const [paymentmode, setPaymentMode] = useState("");
  const [payAmount, setPayAmount] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalItem, setTotalItem] = useState(0);
  const [totalReturnAmount, setTotalReturnAmount] = useState(0);
  const [data, setData] = useState([]);



  

  
  console.log("billcart",billCart)
  useEffect(() => {
    setData([...billCart]);
    let price__ = 0;
    let qty = 0;
    for (let i of billCart) {
      price__ = Number(price__) + Number(i.finalP);
      qty = Number(qty) + Number(i.item);
    }
    setTotalAmount(billCart[0]?.returnAmount ?( price__-((price__*billCart[0]?.discountPer)/100)-billCart[0]?.returnAmount):price__-((price__*billCart[0]?.discountPer)/100));
    setTotalItem(qty);
    if(returnBillCart.length){
      let returnDummy=[];
      for (let ret of returnBillCart){
        returnDummy.push(ret.price)
      }
      
      let finalReturAmount=returnDummy.reduce((a,b)=>Number(a)+Number(b))
      if(finalReturAmount){

      }else{
        setTotalReturnAmount( totalAmount)
        
      }
    }
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    setShowPayment(false);
    navigate('/bill')
    if (data?.length > 0) {
      data?.filter((item) => {
        return (item.payment_mode = paymentmode);
      });
      data?.filter((item) => {
        return (item.pay_price = payAmount);
      });
      data?.filter((item) => {
        return (item.due_price = totalAmount-payAmount);
      });
      data?.filter((item) => {
        return (item.items = totalItem);
      });
      data?.filter((item) => {
        return (item.totalAmount = totalAmount);
      });
      updateCustomer(data);
    }
  };

  const updateCustomer = async (data) => {

    
    const customer = await fetch("http://localhost:7000/customer", {
   //const customer = await fetch("https://crabgrassbackend.onrender.com/customer", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await customer.json();
  };

  return (
    <div className=" bg-gray-200 z-10 absolute top-0 left-0 right-0 bg-transparent ">
      <div className="flex items-center justify-center py-8 px-4">
        <div className="relative w-96 rounded shadow-lg p-6 dark:bg-gray-800 bg-white">
          <p className="text-lg font-bold leading-none text-gray-800 dark:text-gray-100">
            Payment Option
          </p>
          <form className="mt-5">
            <div>
              <label className="text-xs font-semibold leading-3 text-gray-800 dark:text-gray-100">
                {" "}
                Payment{" "}
              </label>
              <div className="py-1 rounded-lg px-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 mt-2">
                <select
                  onChange={(e) => setPaymentMode(e.target.value)}
                  className="text-xs focus:outline-none font-medium leading-3 text-gray-600 dark:text-gray-100 bg-transparent w-full"
                >
                  <option disabled selected>
                    Select a subject
                  </option>
                  <option value="cash">Cash</option>
                  <option value="online">Online</option>
                </select>
              </div>
            </div>
            <div className="mt-4 flex flex-col">
              <label className="text-xs font-semibold leading-3 text-gray-800 dark:text-gray-100">
                {" "}
                Total Amount{" "}
              </label>
              <input
                type="text"
                value={totalAmount}
                placeholder="Ask your question here..."
                className="text-xs font-medium  text-gray-500 dark:text-gray-400  bg-gray-50 dark:bg-gray-700 border rounded-lg border-gray-200 dark:border-gray-700 focus:outline-none px-4 py-3 mt-2"
              ></input>
            </div>
            <div className="mt-4 flex flex-col">
              <label className="text-xs font-semibold leading-3 text-gray-800 dark:text-gray-100">
                {" "}
                Pay{" "}
              </label>
              <input
                onChange={(e) => setPayAmount(e.target.value)}
                placeholder="Enter Pay Amount"
                className="text-xs font-medium leading-3 text-gray-500 dark:text-gray-400 resize-none bg-gray-50 dark:bg-gray-700 border rounded-lg border-gray-200 dark:border-gray-700 focus:outline-none px-4 py-3 mt-2"
              />
            </div>
            <button
              id="submit"
              onClick={(e) => submitHandler(e)}
              className="mt-5 focus:outline-none px-5 py-3 bg-indigo-700 dark:bg-indigo-600 hover:bg-opacity-80 rounded text-xs font-semibold leading-3 text-gray-100"
            >
              Save & Print
            </button>
          </form>
          <div
            className="cursor-pointer absolute top-0 right-0 m-3 dark:text-gray-100  text-gray-600 transition duration-150 ease-in-out"
            onClick={() => setShowPayment(false)}
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
  );
};

export default PaymentForm;

