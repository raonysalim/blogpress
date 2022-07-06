const Sequelize=require('sequelize')

const connection = new Sequelize ('guiapress', 'root', '',{
    host:'localHost',
    dialect: 'mysql',
    timezone:'-03:00'
})

module.exports = connection
