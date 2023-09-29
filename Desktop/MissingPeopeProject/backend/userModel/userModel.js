import mongoose, { Schema, model } from "mongoose";

const userSchema=new Schema({
    Email:{
        require:true,
        type:String
    },
    Password:{
        require:true,
        type:String
    }

})

const userModel=model(userSchema);

export default userModel;