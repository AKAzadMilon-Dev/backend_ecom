const Category = require('../models/categoryModels.js')

async function categoryController(req, res){
    const {name, description} = req.body
    console.log(name, description)
    let duplicateCategory = await Category.find({name});

        if(duplicateCategory.length > 0){
            return res.send({error: "Category already exists. Try another Category!"});
        };

        const category = new Category({
            name: name,
            description: description
        })

        category.save()

        res.send({success: "Category create successfully!"})
}

async function categoryStatusController(req, res){
    const {name, status} = req.body
    console.log(name, status)

    if(status == "rejected" || status == "waiting"){
        const updateCategory = await Category.findOneAndUpdate({name}, {$set:{isActive: false, status:status}}, {new:true})
        return res.send({success: "Status Updated"})
    }else if(status == "approved"){
        const updateCategory = await Category.findOneAndUpdate({name}, {$set:{isActive: true, status:status}}, {new:true})
        return res.send({success: "Status Updated njnjn"})
    }
}

module.exports = {categoryController, categoryStatusController}