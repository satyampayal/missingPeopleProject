import { Schema,model } from "mongoose";

const userSchema=new Schema({
    name:{
        type:String,
        require:true,
        minLength:[4,"Name length should be greteher then 4"]
    },
    age:{
        type:Int8Array,
        require:true,
        minLength:[1,"Age sholud be grether than 0"]  
    },
    dateAndTime:{
        type:String,
        require:true
    },
    desc:{
        type:String,
        require:true,
    }
})