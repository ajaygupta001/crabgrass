const mongoose=require('mongoose');


const alterationSchema= mongoose.Schema({
    Tailor_name:String,
    Delivery_Date:String,
    Order_Date:String,
    Product_barcode:String,
    Product_name:String,
    Product_category:String,
    Customer_name:String,
    Customer_contct:String,
    Price:Number
    
})
module.exports=mongoose.model('alteration',alterationSchema);