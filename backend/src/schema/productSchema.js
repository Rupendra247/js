import {model, Schema } from "mongoose";

let productSchema = Schema({
    name:{
        type:String,
        required:[true,'name is required']
    },
    price:{
        type:Number,
        required:[true,'name is required']

    },
    quantity:{
        type:Number,
        required:[true,'name is required']

    },
    description:{
        type:String,
        required:[true,'name is required']

    }
});
let Product = model("Product", productSchema);
export default Product;

// name
// price
// quantity
// description