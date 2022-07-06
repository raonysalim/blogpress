const Sequelize=require('sequelize');
const Article = require('../articles/Article');
const connection=require('../database/database')

const Category= connection.define('categories', {
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },slug:{
        type: Sequelize.STRING,
        allowNull:false
    }
})

Article.belongsTo(Category)
Category.hasMany(Article)


module.exports=Category;