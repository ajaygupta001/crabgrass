import React, { useContext, useEffect, useRef, useState } from "react";
import { BiRightArrow, BiDownArrow } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import productContext from "../Context/appContext";
import useScanDetection from "use-scan-detection";
import PaymentForm from "./form/PaymentForm";
import Return from "./Return";

function POS() {
  const { setBillCart, returnBillCart } = useContext(productContext);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [arrow, setArrow] = useState(false);
  const [customer, setCustomer] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [qty, setqty] = useState(0);
  const [barCodeScan, setBarCodeScan] = useState("");
  const [customer_contact, setCustomer_contact] = useState("");
  const [showPayment, setShowPayment] = useState(false);
  const [showbill, setShowBill] = useState(false);
  const [salesMan, setSalesMan] = useState([]);
  const [salesManName, setSalesManName] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [items, setItems] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [showReturn, setShowReturn] = useState(false);
  const [returnAmount, setReturnAmount] = useState(0);
  const [discount, setDiscount] = useState(0);

  const customAddHandler = (e) => {
    setShowInput(false);
    e.preventDefault();
    let data = {
      product_category: items,
      product_name: itemCategory,
      item: Number(quantity),
      price: Number(price),
      finalP: Number(quantity * price),
    };
    setCart([...cart, data]);
  };

  const auth = JSON.parse(localStorage.getItem("CrabgrassSignin"));

  useScanDetection({
    onComplete: setBarCodeScan,
    minLength: 3,
  });

  useEffect(() => {
    getData();
    salesManApi();
  }, []);

  const getData = async () => {
  let result = await fetch(`http://localhost:7000/enventry`);
   //let result = await fetch(`https://crabgrassbackend.onrender.com/enventry`);
    result = await result.json();
    const filterResult = result.filter((item) => item.quantity >= 1);
    setData([...filterResult]);
  };

  const salesManApi = async () => {
   
    let result = await fetch(`http://localhost:7000/salesman`);
    //let result = await fetch(`https://crabgrassbackend.onrender.com/salesman`);
    result = await result.json();
    setSalesMan(result);
  };

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

  const addHandler = () => {
    let dummyData = searchData.toLowerCase();

    let dummy = data.filter((item) => item.barcode_id === dummyData);
    let cartItem = cart.filter((item) => item.barcode_id === dummyData);

    if (cartItem?.length == 0) {
      dummy.filter((item) => (item.finalP = item.price));
      dummy.filter((item) => (item.item = 1));

      setCart([...cart, ...dummy]);
    } else {
      let cartItem2 = cart?.filter((item) => item.barcode_id !== dummyData);

      if (cartItem[0].item) {
        cartItem[0].item = Number(cartItem[0]?.item) + 1;
      } else {
        cartItem[0].item = 2;
      }
      cartItem[0].finalP = cartItem[0].price * cartItem[0].item;
      cartItem2.push(cartItem[0]);

      setCart(cartItem2);
      // setTotalAmount(totalAmount+Number(cartItem[0]?.finalP))
    }
  };

  const deleteHandle = (id) => {
    let dummyData = cart?.filter((item) => item.barcode_id !== id);
    setCart([...dummyData]);
  };

  // useEffect(() => {
  //   setBillCart([...cart]);
  // }, [cart]);

  useEffect(() => {
    if (cart?.length > 0) {
      let price__ = [];
      for (let item of cart) {
        price__.push(item.finalP);
      }
      setTotalAmount(price__.reduce((a, b) => a + b));
    }
    if (cart?.length > 0) {
      let qty__ = [];
      for (let item of cart) {
        if (item.item) {
          qty__.push(item.item);
        } else {
          qty__.push(1);
        }
      }

      setqty(qty__.reduce((a, b) => a + b));
    }else{
      setTotalAmount(0)
    }
   
  }, [cart]);

 const addDiscountFunc=(val)=>{
 setDiscount(val)
 }


  var today = new Date().toLocaleDateString();

  const paymentClick = () => {
    setShowPayment(true);
    if (cart?.length > 0) {
      cart?.filter((item) => (item.discountPer = discount));
      cart?.filter((item) => (item.returnAmount = returnAmount));
      
      
      const saleData = cart.filter((item) => {
        return (
          delete item._id,
          delete item.__v,
          delete item.Prototype,
          (item.biller_name = auth.name),
          (item.customer_name = customer),
          (item.customer_contact = customer_contact),
          (item.date = today),
          (item.salesManName = salesManName)
        );
      });
      addSaleAPI(cart);
    }

    if (cart.length > 0) {
      cart.filter(
        (item) => (item.quantity = item.quantity - Number(item.item))
      );
      updateEnventryAPI(cart);
    }
    setBillCart([...cart]);
    setCart([]);
    setTotalAmount(0);
    setqty(0);
    setShowBill(true);
    returnAmount(0);

    // navigate("/bill");
  };

  const addSaleAPI = async (value) => {
   
    let result = await fetch(`http://localhost:7000/add-sale`, {
    //let result = await fetch(`https://crabgrassbackend.onrender.com/add-sale`, {
      method: "post",
      body: JSON.stringify(value),
      headers: {
        "content-type": "application/json",
      },
    });
    result = await result.json();
  };

  const updateEnventryAPI = async (val) => {
    
    //const data = await fetch("https://crabgrassbackend.onrender.com/update", {
      const data = await fetch("http://localhost:7000/update", {
      method: "PATCH",
      body: JSON.stringify(val),
      headers: {
        "Content-type": "application/json",
      },
    });
  };

  // Return====================================================================================================

  useEffect(() => {
    let dummmy = [];
    if (returnBillCart.length) {
      for (let i of returnBillCart) {
        dummmy.push(i.price);
      }
      let dumm = dummmy.reduce((a, b) => Number(a) + Number(b));
      setReturnAmount(dumm);

   }
   
    
    
  }, [returnBillCart]);
  console.log("return bill cart==>",returnAmount)

  return (
    <div className="flex flex-col  overflow-auto">
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-6 ">
            <div className="flex  justify-center text-white font-bold">
              Point Of Sale
            </div>
            <h3 className=" absolute right-5 text-white cursor-pointer">
              <NavLink className="flex justify-center items-center" to="/">
                <AiOutlineHome size={18} />
                <span className="pl-1 pb-1  ">Home</span>
              </NavLink>
            </h3>
          </div>
        </div>
      </nav>
      <div className="flex-1 flex">
        <div className="w-2/8 border-slate-400">
          <div className="flex flex-col w-full">
            <div className="flex justify-between ml-2 items-center  ">
              <div className="">
                <input
                  type="text"
                  name=""
                  id=""
                  value={customer}
                  onChange={(e) => setCustomer(e.target.value)}
                  placeholder="Enter Customer Name "
                  className="  border-2  p-1 pl-3 pr-2"
                />
                {arrow ? (
                  <div
                    onClick={() => {
                      setCustomer("Walk in Customer");
                      setArrow(!arrow);
                    }}
                    className="top-9 z-30 absolute bg-gray-600 p-1 text-white w-full"
                  >
                    Walk in Customer
                  </div>
                ) : null}
              </div>
              <div className="">
                <input
                  className="border-2 py-1 px-3 "
                  type="text"
                  placeholder="Enter Contact No."
                  onChange={(e) => setCustomer_contact(e.target.value)}
                />
              </div>
              <div
                className="px-7  py-3 pr-8 ml-2  bg-indigo-700 rounded  text-white hover:bg-indigo-600"
                onClick={() => setArrow(!arrow)}
              >
                {arrow ? <BiDownArrow /> : <BiRightArrow />}
              </div>
            </div>
            <div className="flex justify-between w-full ">
              <div>
                <input
                  type="text"
                  value={searchData}
                  onChange={(e) => setSearchData(e.target.value)}
                  placeholder="Search barcode ID"
                  className=" m-2 py-[4px] px-2 border-2 border-slate-300"
                />
              </div>
              <div>
                <select
                  onChange={(e) => setSalesManName(e.target.value)}
                  name=""
                  id=""
                  className=" border-2  px-8 text-gray-400 mt-2 py-[5px]"
                >
                  <option selected disabled>
                    Select Salesman
                  </option>
                  {salesMan?.map((item) => {
                    return <option value={item?.name}>{item?.name}</option>;
                  })}
                </select>
              </div>
              <div
                onClick={addHandler}
                className="text-white  py-2 px-10 ml-3 mt-2 cursor-pointer focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 w-8 h-10  rounded flex items-center justify-center"
              >
                ADD
              </div>
            </div>
          </div>
          <div className="border-2 h-[55vh] overflow-y-auto  ">
            <table className="min-w-full bg-white dark:bg-gray-800  rounded  ">
              <thead>
                <tr className="w-full h-10 border-gray-300 dark:border-gray-200 border-b py-8 bg-indigo-100">
                  <th className="pl-3 text-gray-600 font-normal pr-2 text-left text-sm tracking-normal leading-4">
                    Product
                  </th>
                  <th className="text-gray-600 font-normal pr-2 text-left text-sm tracking-normal leading-4">
                    Price
                  </th>
                  <th className="text-gray-600 font-normal pr-2 text-left text-sm tracking-normal leading-4">
                    Qty
                  </th>
                  <th className="text-gray-600 font-normal pr-2 text-left text-sm tracking-normal leading-4">
                    Subtotal
                  </th>
                  <th className="text-gray-600 font-normal pr-2 text-left text-sm tracking-normal leading-4">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart?.map((item, id) => {
                  return (
                    <tr
                      key={id}
                      className="h-12 border-gray-300  border-t border-b hover:border-indigo-300 hover:shadow-md cursor-pointer transition duration-150 ease-in-out"
                    >
                      <td className="pl-4 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                        {item?.product_category} {item?.size}
                      </td>
                      <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                        {item?.price}
                      </td>
                      <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                        {item.item ? item?.item : 1}
                      </td>
                      <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                        {item?.item ? item?.price * item?.item : item?.price}
                      </td>
                      <td>
                        <div
                          onClick={() => deleteHandle(item?.barcode_id)}
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
          <div className="flex flex-col justify-end ">
            <div className="flex justify-evenly m-3 font-[600]">
              <span>Sale Qty: {qty}</span>
              <span>Sale Amount: Rs.{totalAmount}</span>
            </div>
            <div className="flex justify-evenly m-3 font-[600]">
              <span>
                Return Qty:{returnBillCart.length ? returnBillCart.length : 0}
              </span>
              <span>Return Amount: Rs.{returnAmount}</span>
            </div>

            <div className="bg-gray-700 p-2  text-white font-bold">
              <div className="flex justify-between m-3    mr-14 mt-4 sm:mt-0 md:mt-5 lg:mt-0 ">
                <span className="">Total Payable:</span>
                <span>Rs.{returnAmount?(totalAmount-( (totalAmount * discount) / 100)-returnAmount) :totalAmount-( (totalAmount * discount) / 100)}</span>
              </div>
            </div>
            <div className=" flex justify-center w-full mr-14 mt-4 sm:mt-0 md:mt-5 lg:mt-0">
              <button
                onClick={() => paymentClick()}
                className=" w-full m-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-4 text-base md:text-xl"
              >
                Payment
              </button>
            </div>
          </div>
        </div>
        <div className="w-2/6 border-slate-400  ">
          <div
            onClick={() => setShowInput(true)}
            className=" flex justify-center h-15 w-28  m-3 bg-green-500 p-2 text-white cursor-pointer rounded text-sm hover:bg-green-800"
          >
            <span>Add Other Item</span>
          </div>
          <div
            onClick={() => setShowReturn(true)}
            className="h-15 w-28  m-3 bg-indigo-500 p-2 text-white cursor-pointer rounded text-sm hover:bg-indigo-800"
          >
            Add Return Item
          </div>
          <div
           
            className=" "
          >
            <input type="text" placeholder="Enter Discount" onChange={(e)=>addDiscountFunc(e.target.value)} className="border-black border-2 m-3 p-1 w-28 rounded" />
            <button></button>
          </div>
        </div>
      </div>
      {showPayment && <PaymentForm setShowPayment={setShowPayment} />}
      {showInput && (
        <div className=" bg-gray-200 z-10 absolute top-0 left-0 right-0 bg-transparent ">
          <div className="flex items-center justify-center py-8 px-4">
            <div className="relative w-96 rounded shadow-lg p-6 dark:bg-gray-800 bg-white">
              <p className="text-lg font-bold leading-none text-gray-800 dark:text-gray-100">
                Add Other Item
              </p>
              <form className="mt-5">
                <div>
                  <label className="text-xs font-semibold leading-3 text-gray-800 dark:text-gray-100">
                    {" "}
                    Product name{" "}
                  </label>
                  <div className="py-1 rounded-lg px-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 mt-2">
                    <input
                      className="w-full focus:outline-none bg-gray-50 "
                      type="text"
                      onChange={(e) => setItems(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold leading-3 text-gray-800 dark:text-gray-100">
                    {" "}
                    Product Category{" "}
                  </label>
                  <div className="py-1 rounded-lg px-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 mt-2">
                    <input
                      className="w-full focus:outline-none bg-gray-50 "
                      type="text"
                      onChange={(e) => setItemCategory(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mt-4 flex flex-col">
                  <label className="text-xs font-semibold leading-3 text-gray-800 dark:text-gray-100">
                    {" "}
                    Quantity{" "}
                  </label>
                  <input
                    onChange={(e) => setQuantity(e.target.value)}
                    type="text"
                    className="text-xs font-medium  text-gray-500 dark:text-gray-400  bg-gray-50 dark:bg-gray-700 border rounded-lg border-gray-200 dark:border-gray-700 focus:outline-none px-4 py-3 mt-2"
                  ></input>
                </div>
                <div className="mt-4 flex flex-col">
                  <label className="text-xs font-semibold leading-3 text-gray-800 dark:text-gray-100">
                    {" "}
                    Price{" "}
                  </label>
                  <input
                    onChange={(e) => setPrice(e.target.value)}
                    className="text-xs font-medium leading-3 text-gray-500 dark:text-gray-400 resize-none bg-gray-50 dark:bg-gray-700 border rounded-lg border-gray-200 dark:border-gray-700 focus:outline-none px-4 py-3 mt-2"
                  />
                </div>
                <button
                  onClick={(e) => customAddHandler(e)}
                  id="submit"
                  className="mt-5 focus:outline-none px-5 py-3 bg-indigo-700 dark:bg-indigo-600 hover:bg-opacity-80 rounded text-xs font-semibold leading-3 text-gray-100"
                >
                  Add
                </button>
              </form>
              <div
                onClick={() => setShowInput(false)}
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
      )}
      {showReturn && <Return setShowReturn={setShowReturn} />}
    </div>
  );
}

export default POS;
