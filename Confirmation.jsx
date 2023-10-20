import {ImWarning} from 'react-icons/im'

const Confirmation = ({onDialog}) => (
    <div className="flex items-center justify-center py-8 px-4 bg-transparent absolute z-50 top-0 left-0 right-0 ">
        <div className="md:w-80 rounded shadow-lg p-6  dark:bg-gray-800 bg-white border-2">
            <h1 className="  dark:text-gray-100  font-bold text-lg px-24 text-red-600"><ImWarning size={40}/></h1>
            <p className="py-4 text-base font-medium  dark:text-gray-100 text-gray-800">Are you sure want to delete this file!</p>
            <p className="text-sm font-medium  dark:text-gray-100 text-gray-600">Click Confirm for delete.</p>
            <div className="sm:flex items-center justify-between pt-6 ">
                <button className="py-3.5 w-full  dark:text-gray-100  leading-3 focus:outline-none hover:opacity-90 text-sm font-semibold border-gray-600 rounded  border bg-indigo-700 text-white" onClick={()=>onDialog(true)}>Confirm</button>
                <button className="py-3.5 w-full sm:mt-0 mt-2 sm:ml-2 leading-3 text-black focus:outline-none hover:opacity-90 text-sm font-semibold border rounded border-indigo-700  " onClick={()=>onDialog(false)}>Cancel</button>
            </div>
        </div>
    </div>
);
export default Confirmation;
