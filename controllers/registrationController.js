const emailValidation = require('../helper/emailValidation.js');
const passwordValidation = require('../helper/passwordValidation.js');
const User = require('../models/userModels.js');
const bcrypt = require('bcrypt');
const otpTemplete = require('../helper/otpTemplete.js');
const sendEmail = require('../helper/sendEmail.js');
const aleaRNGFactory = require("number-generator/lib/aleaRNGFactory");

const registrationController = async (req, res)=>{
    const {fullname, email, password, avater, facebookId, googleId} = req.body
    
    if(!fullname){
        return res.send({error: "Enter Your Fullname!"});
    }else if(!email){
        return res.send({error: "Enter Your Email!"});
    }else if(!emailValidation(email)){
        return res.send({error: "Plese Enter Valid Email!"});
    }else if(!password){
        return res.send({error: "Enter Your Password!"});
    }else if(!passwordValidation(password)){
        return res.send({error: "Password at least one number and one Capital letter exists in the password and minimum length of 8 characters!"})
    }else{

        let duplicateEmail = await User.find({email: email});

        if(duplicateEmail.length > 0){
            return res.send({error: "Your Email already exists. Try another email!"});
        };

        bcrypt.hash(password, 10, async function(err, hash) {
            const user = new User({
                fullname,
                email,
                password: hash,
                avater,
                googleId,
                facebookId
            });

            user.save()

            const generator2 = aleaRNGFactory(Date.now());
            const randomNumber = generator2.uInt32().toString().substring(0, 4);

            const randomOtpStore = await User.findOneAndUpdate({email}, {$set: {randomOtp: randomNumber}}, {new: true})

            sendEmail(email, randomNumber, otpTemplete);

            setTimeout(async function (){
                console.log("OTP Deleted")
                const randomOtpStore = await User.findOneAndUpdate({email}, {$unset: {randomOtp: ""}}, {new: true});
            }, 60000)

            res.send({
                success: "Registration Successfully! plese check your email!",
                fullname: user.fullname,
                email: user.email
            });
        });
    }
}

module.exports = registrationController