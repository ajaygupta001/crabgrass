import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { productSchema } from "../Schemas";
import {useParams} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Notification from './alerts/Notificaion'

function UpdateProduct() {
    const navigate=useNavigate();
    const [data,setData]=useState();
    const [show,setShow]=useState(false)
    const params=useParams();
    useEffect(()=>{
       getProductDetails()
    },[])
    const getProductDetails=async()=>{
      
      let result=await fetch(`http://localhost:7000/product/${params.id}`)
     // let result=await fetch(`https://crabgrassbackend.onrender.com/product/${params.id}`)
     result=await result.json();
     setData(result)
    
    values.date=(result.date)
    values.product_name=result.product_name
    values.product_category=result.product_category
    values.sub_category=result.sub_category
    values.tax_id=result.tax_id
    values.price=result.price
    values.quantity=result.quantity
    values.size=result.size

    }
  const { errors, values, handleSubmit, handleChange, handleBlur, touched } =
    useFormik({
      initialValues: {
        date: '',
        product_name: "",
        product_category: "",
        sub_category: "",
        tax_id:"", 
        price: "",
        quantity: "",
        size: "",
      },
      validationSchema: productSchema,
      onSubmit: (values, action) => {
        
        apiData(values);
        setShow(true)
        setTimeout(()=>{
          setShow(false)
          navigate('/listproducts')
        },1000)
      },
    });

  const apiData = async (data) => {


   // let result = await fetch(`https://crabgrassbackend.onrender.com/product/${params.id}`, {
      let result = await fetch(`http://localhost:7000/product/${params.id}`, {
      
      method: "PUT",
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
        <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] mx-auto">
          <form action="" onSubmit={handleSubmit}>
            <div className="lg:max-w-[1124px] md:max-w-[696px] max-w-[343px] mx-auto bg-white px-6 py-4 rounded shadow">
              <div>
                <p className="text-xl font-semibold leading-tight text-gray-800 text-center">
                  Update Product
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
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.date}
                    placeholder="Enter Product name"
                    className="focus:outline-none border border-gray-300 py-3 pl-3 rounded w-full mt-4"
                  />
                  {errors.date && touched.date ? (
                    <p style={{ color: "red" }}>{errors.date}</p>
                  ) : null}
                </div>

                <div className="w-full">
                  <p className="text-base leading-none text-gray-800">
                    Product Name
                  </p>
                  <input
                    type="text"
                    name="product_name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.product_name}
                    placeholder="Enter Product name"
                    className="focus:outline-none border border-gray-300 py-3 pl-3 rounded w-full mt-4"
                  />
                  {errors.product_name && touched.product_name ? (
                    <p style={{ color: "red" }}>{errors.product_name}</p>
                  ) : null}
                </div>
              </div>

              <div className="pt-6">
                <div className="lg:flex md:block block justify-between gap-4">
                  <div className="w-full">
                    <p className="text-base leading-none text-gray-800">
                      Product Category
                    </p>
                    <input
                      type="text"
                      name="product_category"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.product_category}
                      placeholder="Enter your Product category"
                      className="focus:outline-none border border-gray-300 py-3 pl-3 rounded w-full mt-4"
                    />
                    {errors.product_category && touched.product_category ? (
                      <p style={{ color: "red" }}>{errors.product_category}</p>
                    ) : null}
                  </div>
                  <div className="w-full">
                    <p className="text-base leading-none text-gray-800 lg:pt-0 md:pt-3 pt-3">
                      Product Sub-Category
                    </p>
                    <input
                      type="text"
                      name="sub_category"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.sub_category}
                      placeholder="Enter product code"
                      className="focus:outline-none border border-gray-300 py-3 pl-3 rounded mt-4 w-full"
                    />
                    {errors.sub_category && touched.sub_category ? (
                      <p style={{ color: "red" }}>{errors.sub_category}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div className="lg:flex md:block block justify-between gap-4">
                  <div className="w-full">
                    <p className="text-base leading-none text-gray-800">
                      Price
                    </p>
                    <input
                      type="String"
                      name="price"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.price}
                      placeholder="Enter price"
                      className="focus:outline-none border border-gray-300 py-3 pl-3 rounded w-full mt-4"
                    />
                    {errors.price && touched.price ? (
                      <p style={{ color: "red" }}>{errors.price}</p>
                    ) : null}
                  </div>
                  <div className="w-full">
                    <p className="text-base leading-none text-gray-800 lg:pt-0 md:pt-3 pt-3">
                      Tax Id No.
                    </p>
                    <input
                      type="text"
                      name="tax_id"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.tax_id}
                      placeholder="Enter Tax Id No."
                      className="focus:outline-none border border-gray-300 py-3 pl-3 rounded mt-4 w-full"
                    />
                    {errors.tax_id && touched.tax_id ? (
                      <p style={{ color: "red" }}>{errors.tax_id}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="lg:flex md:block block justify-between gap-5 items-center pt-5">
                <div className="w-full">
                  <p className="text-base leading-none text-gray-800 pt-3">
                    Quantity
                  </p>
                  <div className="border border-gray-300 focus:bg-gray-50 rounded w-half px-4 py-3 mt-4">
                    <input
                      className="leading-none text-gray-600 focus:outline-none"
                      type="number"
                      placeholder="Enter Quantity"
                      name="quantity"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.quantity}
                    />
                    {errors.quantity && touched.quantity ? (
                      <p style={{ color: "red" }}>{errors.quantity}</p>
                    ) : null}
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-base leading-none text-gray-800 pt-3">
                    Size
                  </p>
                  <div className="border border-gray-300 focus:bg-gray-50 rounded w-half px-4 py-3 mt-4">
                    <input
                      className="leading-none text-gray-600 focus:outline-none"
                      type="text"
                      placeholder="Enter Size"
                      name="size"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.size}
                    />
                    {errors.size && touched.size ? (
                      <p style={{ color: "red" }}>{errors.size}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div>
                <div className="lg:block md:hidden hidden">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3 pt-4"></div>
                    <div className="flex gap-5 pt-4 bg-indigo-600 px-6 py-3 border rounded mt-3 border-indigo-700 float-right hover:bg-indigo-500">
                      <button
                    
                        type="submit"
                        className="text-white   bg-blue-600  rounded font-medium "
                      >
                        Update Product
                        <svg
                          className=" float-right flex justify-center items-center mt-1"
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.87213 3.34088C5.54262 3.67038 5.54262 4.20462 5.87213 4.53412L10.338 9L5.87213 13.4659C5.54262 13.7954 5.54262 14.3296 5.87213 14.6591C6.20163 14.9886 6.73587 14.9886 7.06537 14.6591L12.1279 9.59662C12.4574 9.26712 12.4574 8.73288 12.1279 8.40338L7.06537 3.34088C6.73587 3.01137 6.20163 3.01137 5.87213 3.34088Z"
                            fill="white"
                          />
                        </svg>
                      </button>
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
      </div>
      <Notification value={'Update Successfully'} msg={'update '} show={show} setShow={setShow}/>
    </>
  );
}

export default UpdateProduct;
