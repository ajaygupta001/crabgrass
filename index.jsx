import * as Yup from "yup";

export const returnSchema = Yup.object({
  date: Yup.date().required("Enter Date"),
  product_name: Yup.string().min(3).max(20).required("Enter Product name"),
  customer_name:Yup.string().required('Enter Customer name'),
  product_category: Yup.string()
    .min(3)
    .max(20)
    .required("Enter Product Category"),
  sub_category: Yup.string().min(3).max(20).required("Enter Sub Category"),
  price: Yup.number().required("Enter Price"),
  quantity: Yup.number().positive().required("Enter Quantity"),
  size: Yup.string().min(1).max(20).required("Enter Size"),
});

export const productSchema = Yup.object({
  date: Yup.date().required("Enter Date"),
  product_name: Yup.string().min(3).max(20).required("Enter Product name"),
  product_category: Yup.string()
    .min(3)
    .max(20)
    .required("Enter Product Category"),
  sub_category: Yup.string().min(3).max(20).required("Enter Sub Category"),
  price: Yup.number().required("Enter Price"),
  tax_id: Yup.string().min(3).max(20).required("Enter Tax id"),
  quantity: Yup.number().positive().required("Enter Quantity"),
  size: Yup.string().min(1).max(20).required("Enter Size"),
});

export const purchaseSchema = Yup.object({
  date: Yup.date().required("Enter Date"),
  company: Yup.string().min(3).max(20).required("Enter Company name"),
  tax_id: Yup.string().min(3).max(20).required("Enter tax ID"),
  product_name: Yup.string().min(3).max(20).required("Enter Product name"),
  product_category: Yup.string()
    .min(3)
    .max(20)
    .required("Enter Product Category"),
  sub_category: Yup.string().min(3).max(20).required("Enter Sub Category"),
  price: Yup.number().required("Enter Price"),
  quantity: Yup.number().positive().required("Enter Quantity"),
  size: Yup.string().min(1).max(20).required("Enter Size"),
  payment_status: Yup.string(),
});

export const saleSchema = Yup.object({
  date: Yup.date().required("Enter Date"),
  biller_name: Yup.string().min(3).max(20).required("Enter biller name"),
  customer_name: Yup.string().min(3).max(20).required("Enter customer name"),
  price: Yup.string().min(1).max(20).required("Enter Price"),
  quantity: Yup.number().positive().required("Enter Quantity"),
  product: Yup.string().min(1).max(20).required("Enter Product"),
});

export const salesManSchema = Yup.object({
  company: Yup.string().min(3).max(20).required("Enter Company name"),
  name: Yup.string().min(3).max(20).required("Enter name"),
  contact: Yup.number().required("Enter Contact No."),
  email: Yup.string().email().required("Enter Email"),
  date: Yup.date().required("Enter Date"),
  address: Yup.string().min(3).max(25).required("Enter Address"),
});

export const userSchema = Yup.object({
  name: Yup.string().min(3).max(20).required("Enter User name"),
  email: Yup.string().email().required("Enter Email"),
  contact: Yup.number().required("Enter Contact"),
  address: Yup.string().min(3).max(20).required(),
  password: Yup.string()
    .min(4)
    .max(12)
    .required("Enter Password"),
   

  new_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "password must match"),
});
