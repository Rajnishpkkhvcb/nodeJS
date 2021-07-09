const mysql= require('mysql2');


const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    database:'raj',
    password:'priraj1336'
})

module.exports=pool.promise();