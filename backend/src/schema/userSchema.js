import {model, Schema } from "mongoose";


let userSchema = Schema({
    name:{
        type:String,
        required:[true,"required"]
    },
    email:{
        type:String,
        required:[true,"required"]
    },
    password:{
        type:String,
        required:[true,"required"]
    },
    address:{
        type:String,
        required:[true,"required"]
    },
    phone:{
        type:Number,
        required:[true,"required"]
    },

})
let User = model("User", userSchema)
export default User