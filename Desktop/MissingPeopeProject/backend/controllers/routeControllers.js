

const registerUser=async (req,res)=>{
    const {Email,Password,confirmPassword}=req.body;
    console.log(Email,Password);


}

export default {registerUser}