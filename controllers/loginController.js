const User = require('../models/userModels.js')
const bcrypt = require('bcrypt');
const emailValidation = require('../helper/emailValidation.js')

const loginController = async (req, res)=>{
    const {email, password} = req.body;

    if(!email){
        return res.send({error: "Enter Your Email!"});
    }else if(!emailValidation(email)){
        return res.send({error: "Plese Enter Valid Email!"});
    }else if(!password){
        return res.send({error: "Enter Your Password!"});
    }else{
        const isEmailExist = await User.find({email})
        
        if(isEmailExist.length > 0 ){
            bcrypt.compare(password, isEmailExist[0].password).then(function(result) {
                if(result){
                    res.send({
                        success: "Login Successfully",
                        fullname: isEmailExist.fullname,
                        email: isEmailExist.email
                    })
                }else{
                    res.json({"error": "Password not match"})
                }
            });
        }else{
            res.json({"error": "Email not match"})
        }
    }
}

module.exports = loginController;