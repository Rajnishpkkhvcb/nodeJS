
const Sequelize= require('sequelize')

const sequelize=require('../util/database.js')


const user= sequelize.define('user',{
    id:{
      type:Sequelize.INTEGER,
      allowNull:false,
      autoIncrement:true,
      primaryKey:true
    },
  
    name:{
      type:Sequelize.STRING,
      allowNull:false,
  
    },
    email:{
        type:Sequelize.STRING
    }
  })
  
  
 
  module.exports=user;