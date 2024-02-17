const User = require('../models/userModels.js')

async function secureUpload(req, res, next){
    const userid = req.headers.authorization.split('@')[1]
    const password = req.headers.authorization.split('@')[2]


    if(!req.headers.authorization){
        return res.send({error: "Un-authorized!"})
    }

    const user = await User.find({_id:userid})
    if(user.length > 0){
        if(password == process.env.MERCHANT_SECRET_KEY){
            if(user[0].role == "merchant"){
                next()
            }
        }else{
            return res.send({error: "You are not able to create product2!"})
        }
    }else{
        return res.send({error: "You are not able to create product!"})
    }
}

async function createProduct(req, res){
    console.log("Let's start create product")
}


module.exports = {secureUpload, createProduct}