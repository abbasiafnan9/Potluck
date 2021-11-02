//  KP (post, location)
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model {}

Blog.init({
    name: {
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull:false,
    }
},{
    sequelize
});

module.exports=Blog