const mysql=require('mysql');
const db=mysql.createConnection({
    user:'root',
    password:'7501',
    host:'localhost',
    port:'3306',
    database:'ecom',
    multipleStatements:true
});
db.connect((err,result)=>{
    if(err)
    {
        console.log(err);
    }
    else
    {
       console.log('database connected');
    }
});
module.exports=db;