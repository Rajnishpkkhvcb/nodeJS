const mysql= require('mysql2');

const Sequelize= require('sequelize');

const sequelize=new Sequelize('raj','root','priraj1336',{
    dialect:'mysql',
    host:'localhost'
});


module.exports=sequelize;

