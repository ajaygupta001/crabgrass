import { useFormik } from "formik";
import React, { useState } from "react";
import { saleSchema } from "../Schemas";
import Notification from "./alerts/Notificaion";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AddSale() {
  const [showNotification,setShowNotification]=useState(false)
  const { errors, values, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        date: "",
        biller_name: "",
        customer_name: "",
        price: "",
        quantity: "",
        product: "",
      },
      validationSchema: saleSchema,
      onSubmit: (values, action) => {
        apiData(values);
        setShowNotification(true)
        action.resetForm();
      },
    });

  const apiData = async (data) => {
   
    
   // let result = await fetch(`https://crabgrassbackend.onrender.com/add-sale`, {
    let result = await fetch(`http://localhost:7000/add-sale`, {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
    result = await result.json();
  };
  return (
    <>
    <div>
        <Header />
        <div className="flex ">
          <div className="  ">
            <Sidebar />
          </div>
          <div className="w-5/6  body-scroll">
          <div className="py-12 px-4">
        <form action="" onSubmit={handleSubmit}>
          <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] mx-auto">
            <div className="lg:max-w-[1124px] md:max-w-[696px] max-w-[343px] mx-auto bg-white px-6 py-4 rounded shadow">
              <div>
                <p className="text-xl font-semibold leading-tight text-gray-800 text-center">
                  Add Sale
                </p>
              </div>

              <div className="pt-5">
                <p className="text-xl font-medium leading-tight text-gray-800">
                  General Information
                </p>
              </div>
              <div className="lg:flex md:block block justify-center gap-4 pt-6">
                <div className="w-full">
                  <p className="text-base leading-none text-gray-800">Date</p>
                  <input
                    type="date"
                    name="date"
                    value={values.date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter Date"
                    className="focus:outline-none border border-gray-300 py-3 pl-3 rounded w-full mt-4"
                  />
                  {errors.date && touched.date ? (
                    <p style={{ color: "red" }}>{errors.date}</p>
                  ) : null}
                </div>
                <div className="w-full">
                  <p className="text-base leading-none text-gray-800">
                    Biller Name
                  </p>
                  <input
                    type="text"
                    name="biller_name"
                    value={values.biller_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter Biller name"
                    className="focus:outline-none border border-gray-300 py-3 pl-3 rounded w-full mt-4"
                  />
                  {errors.biller_name && touched.biller_name ? (
                    <p style={{ color: "red" }}>{errors.biller_name}</p>
                  ) : null}
                </div>
              </div>

              <div className="pt-6">
                <div className="lg:flex md:block block justify-between gap-4">
                  <div className="w-full">
                    <p className="text-base leading-none text-gray-800">
                      Customer Name
                    </p>
                    <input
                      type="text"
                      name="customer_name"
                      value={values.customer_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter Customer Name"
                      className="focus:outline-none border border-gray-300 py-3 pl-3 rounded w-full mt-4"
                    />
                    {errors.customer_name && touched.customer_name ? (
                      <p style={{ color: "red" }}>{errors.customer_name}</p>
                    ) : null}
                  </div>
                  <div className="w-full">
                    <p className="text-base leading-none text-gray-800 lg:pt-0 md:pt-3 pt-3">
                      price
                    </p>
                    <input
                      type="text"
                      name="price"
                      value={values.price}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter Price"
                      className="focus:outline-none border border-gray-300 py-3 pl-3 rounded mt-4 w-full"
                    />
                    {errors.price && touched.price ? (
                      <p style={{ color: "red" }}>{errors.price}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div className="lg:flex md:block block justify-between gap-4">
                  <div className="w-full">
                    <p className="text-base leading-none text-gray-800">
                      Quantity
                    </p>
                    <input
                      type="number"
                      name="quantity"
                      value={values.quantity}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter Quantity"
                      className="focus:outline-none border border-gray-300 py-3 pl-3 rounded w-full mt-4"
                    />
                    {errors.quantity && touched.quantity ? (
                      <p style={{ color: "red" }}>{errors.quantity}</p>
                    ) : null}
                  </div>
                  <div className="w-full">
                    <p className="text-base leading-none text-gray-800 lg:pt-0 md:pt-3 pt-3">
                      product
                    </p>
                    <input
                      type="text"
                      name="product"
                      value={values.product}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter Order Name"
                      className="focus:outline-none border border-gray-300 py-3 pl-3 rounded mt-4 w-full"
                    />
                    {errors.product && touched.product ? (
                      <p style={{ color: "red" }}>{errors.product}</p>
                    ) : null}
                  </div>
                </div>
              </div>

              <div>
                <div className="lg:block md:hidden hidden">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3 pt-4"></div>
                    <div className="flex gap-5 pt-4">
                    <button className="bg-indigo-700 rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full ">
                    Add Sale
                  </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
          </div>
        </div>
      </div>
       <Notification  show={showNotification} setShow={setShowNotification} value={'Data added Successfully!'} msg={''}/>
    </>
  );
}

export default AddSale;
