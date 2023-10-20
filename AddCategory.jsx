import React, { useState } from "react";

const AddCategory = ({ setShow }) => {
  const [data, setData] = useState();

  return (
    <div className="h-full w-full absolute z-20 top-0 left-0 right-0 bottom-0  text-white bg-transparent">
      <div className="bg-slate-400  mt-16 ml-96 pl-20 h-4/5  w-2/6 ">
        <div className="bg-white w-full text-black shadow-lg h-5/6">
          <div className="flex justify-between border-b-2 font-bold pb-2 pt-2">
            <h2 className=" pl-2">ADD CATEGORY</h2>
            <button onClick={() => setShow(false)} className="pr-2">
              X
            </button>
          
          </div>
          <form action="">
            <div className="flex flex-col mb-6 pt-4">
              <label className="font-l mx-2 pb-1">Category Code*</label>
              <input className="border-2 mx-2 p-1" type="text" />
            </div>

            <div className="flex flex-col mb-6">
              <label className="font-l mx-2 pb-1">Category Name*</label>
              <input className="border-2 mx-2 p-1" type="text" />
            </div>

            <div className="flex flex-col mb-6">
              <label className="font-l mx-2 pb-1">Description*</label>
              <input className="border-2 mx-2 p-1" type="text" />
            </div>

            <div className="flex flex-col mb-6">
              <label className="font-l mx-2 pb-1">Parent Category</label>
              <select className="border-2 mx-2 p-1" name="" id="">
                <option value="">Select Parent Categories</option>
              </select>
            </div>
            <div className="flex gap-5 pt-2 rounded mt-2  justify-end mr-2 mb-4">
              <button className="bg-indigo-700 rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-5 py-3 text-white lg:max-w-[144px] w-32 ">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
