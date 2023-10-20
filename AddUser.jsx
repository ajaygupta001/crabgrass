import { useFormik } from "formik";
import React from "react";
import { userSchema } from "../Schemas";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AddUser() {
  const { errors, values, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        contact: "",
        address: "",
        password: "",
        new_password: "",
      },
      validationSchema: userSchema,
      onSubmit: (values, action) => {
        apiData(values);
        action.resetForm();
      },
    });

  const apiData = async (data) => {
   
    
   // let result = await fetch(`https://crabgrassbackend.onrender.com/add-user`, {
    let result = await fetch(`http://localhost:7000/add-user`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
    result = result.json();
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
                  Add User
                </p>
              </div>

              <div className="pt-5">
                <p className="text-xl font-medium leading-tight text-gray-800">
                  General Information
                </p>
              </div>
              <div className="lg:flex md:block block justify-center gap-4 pt-6">
                <div className="w-full">
                  <p className="text-base leading-none text-gray-800">Name</p>
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    placeholder="Enter user name"
                    className="focus:outline-none border border-gray-300 py-3 pl-3 rounded w-full mt-4"
                  />
                  {errors.name && touched.name ? (
                    <p style={{ color: "red" }}>{errors.name}</p>
                  ) : null}
                </div>
                <div className="w-full">
                  <p className="text-base leading-none text-gray-800">Email</p>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Enter email "
                    className="focus:outline-none border border-gray-300 py-3 pl-3 rounded w-full mt-4"
                  />
                  {errors.email && touched.email ? (
                    <p style={{ color: "red" }}>{errors.email}</p>
                  ) : null}
                </div>
              </div>

              <div className="pt-6">
                <div className="lg:flex md:block block justify-between gap-4">
                  <div className="w-full">
                    <p className="text-base leading-none text-gray-800">
                      Contact No.
                    </p>
                    <input
                      type="text"
                      name="contact"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.contact}
                      placeholder="Enter Contact No."
                      className="focus:outline-none border border-gray-300 py-3 pl-3 rounded w-full mt-4"
                    />
                    {errors.contact && touched.contact ? (
                      <p style={{ color: "red" }}>{errors.contact}</p>
                    ) : null}
                  </div>
                  <div className="w-full">
                    <p className="text-base leading-none text-gray-800 lg:pt-0 md:pt-3 pt-3">
                      address
                    </p>
                    <input
                      type="text"
                      name="address"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.address}
                      placeholder="Enter Address"
                      className="focus:outline-none border border-gray-300 py-3 pl-3 rounded mt-4 w-full"
                    />
                    {errors.address && touched.address ? (
                      <p style={{ color: "red" }}>{errors.address}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div className="lg:flex md:block block justify-between gap-4">
                  <div className="w-full">
                    <p className="text-base leading-none text-gray-800">
                      Password
                    </p>
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      placeholder="Enter Password"
                      className="focus:outline-none border border-gray-300 py-3 pl-3 rounded w-full mt-4"
                    />
                    {errors.password && touched.password ? (
                      <p style={{ color: "red" }}>{errors.password}</p>
                    ) : null}
                  </div>
                  <div className="w-full">
                    <p className="text-base leading-none text-gray-800 lg:pt-0 md:pt-3 pt-3">
                      Confirm Password
                    </p>
                    <input
                      type="password"
                      name="new_password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.new_password}
                      placeholder="Enter Confirm Password"
                      className="focus:outline-none border border-gray-300 py-3 pl-3 rounded mt-4 w-full"
                    />
                    {errors.new_password && touched.new_password ? (
                      <p style={{ color: "red" }}>{errors.new_password}</p>
                    ) : null}
                  </div>
                </div>
              </div>

              <div>
                <div className="lg:block md:hidden hidden">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3 pt-4"></div>
                    <div className="flex gap-5 pt-4">
                      <button
                        type="submit"
                        className="text-white border border-indigo-700 bg-indigo-700 px-6 py-3 rounded font-medium hover:bg-indigo-600"
                      >
                        Add User
                        <svg
                          className="mt-1 float-right flex justify-center items-center"
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
      
    </>
  );
}

export default AddUser;
