const app=require('./src/app');
const coonnectTodb=require('./src/db/db');
coonnectTodb();
app.listen(3000);