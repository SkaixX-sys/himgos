const {DataTypes, INTEGER} = require('sequelize')
const sequelize = require('../db')


const Order = sequelize.define(user,{
        id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
        name: {type: DataTypes.STRING, allowNull: false},
        secondname: {type: DataTypes.STRING, allowNull: false},
        surname: {type: DataTypes.STRING, allowNull: false},
        mail: {type: DataTypes.STRING, unique: true, allowNull: false},
        number: {type: DataTypes.NUMBER, unique: true, allowNull: false},
        measure: {type: DataTypes.STRING, allowNull: false},
        quantity: {type: DataTypes.INTEGER, allowNull: false},
        // status: {type: DataTypes.STRING, allowNull: true},
        // product: {type: DataTypes.STRING, allowNull: false},
        // price: {type: DataTypes.DECIMAL, allowNull: false},
    })

const Product = sequelize.define(product,{
        id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
        name: {type: DataTypes.STRING, allowNull: false},
        description: {type: DataTypes.STRING, allowNull: false},
        image: {type: DataTypes.STRING, allowNull: false},
        price: {type: DataTypes.DECIMAL, allowNull: false},
        quantity: {type: DataTypes.INTEGER, allowNull: false},
        price: {type: DataTypes.DECIMAL, allowNull: false},
    })

const Consultation = sequelize.define(consultation,{
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    email: {type: DataTypes.STRING, allowNull: false, unique: false}
})