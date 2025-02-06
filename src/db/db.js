const mongoose=require('mongoose');    
 async function connectToDb(){
await mongoose.connect('mongodb://127.0.0.1:27017/khashiq').then(()=>{
    console.log("connetd")
}).catch((err)=>{
    console.error(err);
})


}
module.exports=connectToDb;