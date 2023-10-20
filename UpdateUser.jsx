import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { userSchema } from "../Schemas";
import Notification from "./alerts/Notificaion";
import Header from "./Header";
import Sidebar from "./Sidebar";

function UpdateUser() {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    
    let result = await fetch(`http://localhost:7000/user/${params.id}`);
    //let result = await fetch(`https://crabgrassbackend.onrender.com/user/${params.id}`);
    result = await result.json();
    setData(result);
    values.name = result.name;
    values.email = result.email;
    values.contact = result.contact;
    values.address = result.address;
  };

  const { errors, values, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        contact: "",
        address: "",
      },
      onSubmit: (values, action) => {
        setShowNotification(true);
        apiData(values);
      },
    });

  const apiData = async (data) => {

    
    let result = await fetch(`http://localhost:7000/user/${params.id}`, {
    //let result = await fetch(`https://crabgrassbackend.onrender.com/user/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
    result = result.json();
    navigate("/listuser");
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
                        Update User
                      </p>
                    </div>

                    <div className="pt-5">
                      <p className="text-xl font-medium leading-tight text-gray-800">
                        General Information
                      </p>
                    </div>
                    <div className="lg:flex md:block block justify-center gap-4 pt-6">
                      <div className="w-full">
                        <p className="text-base leading-none text-gray-800">
                          Name
                        </p>
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
                        <p className="text-base leading-none text-gray-800">
                          Email
                        </p>
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
                    {/* <div className="pt-6">
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
                          {errors.new_password &&
                          touched.new_password ? (
                            <p style={{ color: "red" }}>
                              {errors.new_password}
                            </p>
                          ) : null}
                        </div>
                      </div>
                    </div> */}

                    <div>
                      <div className="lg:block md:hidden hidden">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3 pt-4"></div>
                          <div className="flex gap-5 pt-4  rounded mt-6 mb-2">
                            <button  className="bg-indigo-700 rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full ">
                              Update User
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {<Notification show={showNotification} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateUser;
