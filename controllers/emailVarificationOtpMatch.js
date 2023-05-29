const User = require('../models/userModels')

const emailVarificationOtpMatch = async (req, res)=>{
    const {email, randomOtp} = req.body
    const findOtp = await User.find({email})
    
    if(findOtp.length > 0){
        if(randomOtp == findOtp[0].randomOtp){
            const removeOtpAfterMatch = await User.findOneAndUpdate({email}, {$unset: {randomOtp: ""}}, {new: true});
            res.json({success: "OTP Match"})
        }else{
            res.json({error: "OTP not Match"})
        }
    }
    console.log(email, randomOtp)
}

module.exports = emailVarificationOtpMatch