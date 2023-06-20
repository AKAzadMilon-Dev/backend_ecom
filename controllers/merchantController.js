const Store = require('../models/merchantModels.js')
const User = require('../models/userModels.js')

async function becomeMerchantController(req, res){
    const {storename, officialemail, officialphone, address, owner, products} = req.body

    let duplicateOfficialEmail = await Store.find({officialemail});
    let duplicateStorename = await Store.find({storename});

        if(duplicateOfficialEmail.length > 0){
            return res.send({error: " Email already exists. Try another Email!"});
        };
        if(duplicateStorename.length > 0){
            return res.send({error: " Store already exists. Try another Store!"});
        };

    const store = new Store({
        storename,
        officialemail,
        officialphone,
        address,
        owner,
        products
    })
    store.save()

    await User.findOneAndUpdate({_id:owner}, {role:"merchant"}, {new:true})

    res.send({success: "Store created. congratulation you become a merchant!"})
}

async function merchantStatusController(req, res){
    const {storename, status} = req.body
    console.log(storename, status)

    if(status == "rejected" || status == "waiting"){
        await Store.findOneAndUpdate({storename}, {$set:{isActive: false, status:status}}, {new:true})
        return res.send({success: "Status Updated"})
    }else if(status == "approved"){
        await Store.findOneAndUpdate({storename}, {$set:{isActive: true, status:status}}, {new:true})
        return res.send({success: "Status Updated"})
    }
}


module.exports = {becomeMerchantController, merchantStatusController}