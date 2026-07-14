const mongoose=require('mongoose')

async function connect() {
   await mongoose.connect(process.env.MONGO)
     console.log("connected to db")

}
module.exports=connect