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


module.exports = categoryController