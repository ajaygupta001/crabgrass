import React, { useContext, useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import productContext from "../Context/appContext";

const PrintSlip = () => {
  const { billCart, setBillCart,returnBillCart } = useContext(productContext);
  const [totalAmount, setTotalAmount] = useState(0);
  const [returnAmount,setReturnAmount]=useState(0)

  const auth = JSON.parse(localStorage.getItem("CrabgrassSignin"));

  var today = new Date().toLocaleDateString();
  let isFinalBill = false;
  var time = new Date();
  time = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    let dummy = [];

    for (let item of billCart) {
      dummy.push(Number(item.finalP));
    }
    let dummmyPrice;
    if (dummy.length) {
      dummmyPrice = dummy.reduce((a, b) => a + b);
      setTotalAmount(Number(dummmyPrice));
    } else {
      setTotalAmount(0);
    }
  }, [billCart]);
  
  useEffect(()=>{
    let dummy=[]
   if(returnBillCart.length){
     for(let i of returnBillCart){
      dummy.push(i.price)
     }
     let dummyPrice=dummy.reduce((a,b)=>Number(a)+Number(b))
     setReturnAmount(dummyPrice)
   }
  },[])
 

  return (
    <div className=" h-[100vh] overflow-y-auto ">
      <div className=" flex justify-center items-center " ref={componentRef}>
        <div
          className="  h-full my-4  bg-white relative"
          style={{ width: "291px" }}
        >
          <div className="flex flex-col  items-center pb-1 text-[10px]">
            <div className=" bg-black flex justify-center ">
              <img
                src="./Images/crabgrasss.png"
                alt=""
                className=" bg-black w-[70%]"
              />
            </div>
            <p>122/59, Sarojani Nagar</p>
            <p>Near Gurunanak Medical Store</p>
            <p>kanpur, 208012 </p>
            <p>Mob: 7379212496</p>
            <p>GST Reg: 09AQDPT4038Q2Z2</p>
          </div>
          <div className="text-[10px]">
            <div className="flex justify-between  px-10">
              <span>Sale Number :</span>
              <span className="flex justify-start">
                {Math.floor(Math.random() * 10000 * 2)}
              </span>
            </div>
            <div className="flex justify-between px-10">
              <span>Date :</span>
              <span>{today} </span>
            </div>
            <div className="flex justify-between px-10">
              <span>Time :</span>
              <span>{time} </span>
            </div>

            <div className="flex justify-between px-10 pt-0">
              <span>Customer : </span>
              <span>{billCart[0]?.customer_name}</span>
            </div>
            <div className="flex justify-between px-10 pt-0">
              <span>Customer contact : </span>
              <span>{billCart[0]?.customer_contact}</span>
            </div>
          </div>
          <div className="">
            <div className="flex justify-between  font-[9px]  mx-7 pb-1 ">
              <span className="">Items</span>
              <span className="pr-9">Qty</span>
              <span className="">Price</span>
             
            </div>

            <div className="border-b-2 mx-6 border-black"></div>
            {billCart?.map((item, id) => {
              return (
                <div>
                  <div className="">
                    <div
                      key={id}
                      className="flex justify-between text-[10px] mx-7 "
                    >
                      <span>
                        <span>{item.product_category}</span>
                      </span>
                      <span>
                        <span className=""> {item.item ? item.item : 1}</span>
                      </span>
                      <span className=" font-bold">
                        ₹{item.price * item.item}.00
                      </span>
                    </div>
                  </div>
                  <div className="text-[8px] flex justify-center">
                    {item.price < 1000 ? (
                      <span>[HSN: ] CGST: 2.5% & SGST: 2.5%</span>
                    ) : (
                      <span>[HSN: ] CGST: 6% & SGST: 6%</span>
                    )}
                  </div>
                </div>
              );
            })}
            
          </div>
          <div className="mx-8 mt-1">
            <div className="flex justify-between border-b-2 border-black p-1 text-[11px]">
              <span>Total</span>
              <span>₹{totalAmount}.00</span>
            </div>
            <div className="flex flex-col justify-between  border-b-2 border-black p-1 text-[11px] font-[500]">
              <div className="flex justify-between"> 
              <span>Return Qty:</span>
              <span>{returnBillCart?.length}</span>
              </div>
              <div className="flex justify-between">
              <span>Return Amount:</span>
              <span>₹{returnAmount}.00</span>
              </div>
            </div>
           
            <div className="flex justify-between border-b-2 font-[600] text-[10px]  border-black p-1">
              <span>Discount</span>
              <span>{billCart[0]?.discountPer}%</span>
            </div>
            <div className="flex justify-between border-b-2 font-[600] text-[10px]  border-black p-1">
              <span>Grand Total</span>
              <span>₹{returnAmount?( totalAmount-((totalAmount*billCart[0]?.discountPer)/100)-returnAmount):totalAmount-((totalAmount*billCart[0]?.discountPer)/100)}.00</span>
            </div>
            <div className="flex justify-between border-b-2 font-[600] text-[10px] border-black   p-1">
              <span>Total Paid</span>
              <span>₹{billCart[0]?.pay_price}.00</span>
            </div>
            <div className="flex justify-between border-b-2  font-[600] text-[10px]  border-black  p-1">
              <span>Total Due</span>
              <span>₹{billCart[0]?.due_price}.00</span>
            </div>

            <div className="flex justify-between font-light p-1 ">
              <span>*All Prices Inclusive of GST.</span>
            </div>
            <p className="flex justify-between font-light">
              Thank you for shopping with us. Kindly visit again.
            </p>
            <div className="text-[10px]">
              <p>No Exchange without Bill & Barcode Tag.</p>
              <p>Exchange after 2PM. Within 3 Days of Purchase.</p>
              <p>No Gaurantee No claim. HAPPY SHOPPING CRABGRASSS</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-between  items-center text-center">
        <button
          type="submit"
          className="border-2 w-40 mx-[45%] bg-blue-600 p-2 text-white text-lg rounded font-800 hover:bg-blue-500"
          onClick={handlePrint}
        >
          Print
        </button>
      </div>
      
    </div>
  );
};

export default PrintSlip;
