//  KP
const User = require("./User");
const Blog = require("./Posts");

User.hasMany(Blog,{
    onDelete:"CASCADE"
});
blog.belongsTo(User);

module.exports={
    User,
    Blog
};