import mongoose from "mongoose";

async function connectToDB(dbUrl){
    try{
      const response = await  mongoose.connect(dbUrl)
      if(response){
        console.log('DB IS CONNECTED');
      }

    }catch(e){
        console.log('DB is NOT-CONNECTED WITH ERROR',e);

    }

}

export default connectToDB;