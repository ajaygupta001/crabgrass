import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "../components/SignIn";
import ListProducts from "../components/ListProducts";
import AddProducts from "../components/AddProducts";
import ListSale from "../components/ListSale";
import AddSale from "../components/AddSale";
import ListPurchase from "../components/ListPurchase";
import AddPurchase from "../components/AddPurchase";
import ListReturn from "../components/ListReturn";
import AddReturn from "../components/AddReturn";
import ListUser from "../components/ListUser";
import Error404 from "../components/Error404";
import AddUser from "../components/AddUser";
import ListSalesMan from "../components/ListSalesMan";
import AddSalesMan from "../components/AddSalesMan";
import PrintBarCode from "../components/PrintBarCode";
import POS from "../components/POS";
import PrintSlip from "../components/PrintSlip";
import UpdateProduct from "../components/UpdateProduct";
import UpdateSale from "../components/UpdateSale";
import Home from "./Home";
import PrivateRoutes from "./PrivateRoutes";
import UpdatePurchase from "../components/UpdatePurchase";
import UpdateReturn from "../components/UpdateReturn";
import UpdateUser from "../components/UpdateUser";
import Category from "../components/Category";
import Enventry from "../components/Enventry";
import CustomerHistory from "../components/CustomerHistory";
import Alteration from "../components/Alteration";
import UpdateEnventry from "../components/UpdateEnventry";
import Showlteration from "../components/Showlteration";

const Routing = () => {
  return (
    <Routes>
      <Route path="/login" element={<SignIn />} />
      <Route path="*" element={<Error404 />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/listproducts" element={<ListProducts />} />
        <Route path="/addproduct" element={<AddProducts />} />
        <Route path="/listsale" element={<ListSale />} />
        <Route path="/addsale" element={<AddSale />} />
        <Route path="/listpurchase" element={<ListPurchase />} />
        <Route path="/addpurchase" element={<AddPurchase />} />
        <Route path="/listreturn" element={<ListReturn />} />
        <Route path="/listreturn" element={<ListReturn />} />
        <Route path="/addreturn" element={<AddReturn />} />
        <Route path="/listuser" element={<ListUser />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/addproduct" element={<AddProducts />} />
        <Route path="/listsalesman" element={<ListSalesMan />} />
        <Route path="/addsalesman" element={<AddSalesMan />} />
        <Route path="/printbar" element={<PrintBarCode />} />
        <Route path="/pos" element={<POS />} />
        <Route path="/bill" element={<PrintSlip />} />
        <Route path="/product/:id" element={<UpdateProduct />} />
        <Route path="/enventry/:id" element={<UpdateEnventry/>} />
        <Route path="/sale/:id" element={<UpdateSale />} />
        <Route path="/purchase/:id" element={<UpdatePurchase />} />
        <Route path="/return/:id" element={<UpdateReturn />} />
        <Route path="/user/:id" element={<UpdateUser />} />
        <Route path="/category" element={<Category/>}/>
        <Route path="/enventry" element={<Enventry/>}/>
        <Route path="/customer-history" element={<CustomerHistory/>}/>
        <Route path="/alteration" element={<Alteration/>}/>
        <Route path="/show-altertion" element={<Showlteration/>}/>
      </Route>
    </Routes>
  );
};

export default Routing;
