
const{createError }=require('../utils/error')

const User = require("../model/usermodel");
 const getAllUsers = async (req,res,next)=>{
    try {
        const users = await User.find();
        return res.status(200).send(users)
    } catch (error) {
        return next(createError(500,"Internal Server Error"))
    }
}

//  const getUserById = async (req,res,next)=>{
//     try {
//         const user = await User.findById(req.params.id)
       
//         if(!user)
//             return next(createError(404,"User not found"))
//             return res.status(200).send(user)
          
//     } catch (error) {
//         return next(createError(500,"Internal Server Error"))
//     }
// }





const getUserById = async (req, res, next) => {
    try {
        const user = await User.findOne({ userId: req.params.id }); // Search using custom identifier
       
        if (!user)
            return next(createError(404, "User not found"));
        
        return res.status(200).send(user);
          
    } catch (error) {
        return next(createError(500, "Internal Server Error"));
    }
}
const deleteUser = async (req, res) => {
  
    try {
        console.log(req.params.Id);
        const result = await User.deleteOne({_id: req.params.id });
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
  };
  
module.exports={
    getAllUsers,getUserById,deleteUser
    
}