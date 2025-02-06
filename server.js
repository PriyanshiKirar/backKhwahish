const app=require('./src/app');
const coonnectTodb=require('./src/db/db');
coonnectTodb();
app.listen(3000,()=>{
console.log("server working on 3000");

});