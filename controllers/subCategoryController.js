const SubCategory = require('../models/subCategoryModels.js')
const Category = require('../models/categoryModels.js')

async function subCategoryController(req, res){
 const {name, description, categoryid} = req.body
 console.log(name)
 let duplicateSubCategory = await SubCategory.find({name});

        if(duplicateSubCategory.length > 0){
            return res.send({error: "Sub-Category already exists. Try another Sub-Category!"});
        };

        const subcategory = new SubCategory({
            name: name,
            description: description,
            categoryid: categoryid
        })

        subcategory.save()

        console.log(subcategory._id)

        await Category.findOneAndUpdate({_id: subcategory.categoryid }, {$push:{subcategory: subcategory._id}}, {new:true})

        res.send({success: "Sub-Category create successfully!"})
}

async function subCategoryStatusController(req, res){
    const {name, status} = req.body
    console.log(name, status)

    if(status == "rejected" || status == "waiting"){
        const updateSubCategory = await SubCategory.findOneAndUpdate({name}, {$set:{isActive: false, status:status}}, {new:true})
        return res.send({success: "Status Updated"})
    }else if(status == "approved"){
        const updateSubCategory = await SubCategory.findOneAndUpdate({name}, {$set:{isActive: true, status:status}}, {new:true})
        return res.send({success: "Status Updated njnjn"})
    }
}


async function getAllSubCategoryController(req, res){
    const data = await SubCategory.find({}).populate('categoryid')
    res.send(data)
}


module.exports = {subCategoryController, subCategoryStatusController, getAllSubCategoryController}