const mongoose=require('mongoose');    
 async function connectToDb(){
await mongoose.connect('mongodb://0.0.0.0/khashiq').then(()=>{
    console.log("connetd")
}).catch((err)=>{
    console.error(err);
})


}
module.exports=connectToDb;