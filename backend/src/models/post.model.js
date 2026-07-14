const mongoose=require('mongoose')



const Postschema=new mongoose.Schema({
    image: String,
    caption: String,
})

const postModel=mongoose.model("Post", Postschema)

module.exports = postModel