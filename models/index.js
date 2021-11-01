//  KP
const User = require("./User");
const Posts = require("./Posts");

User.hasMany(Posts,{
    onDelete:"CASCADE"
});
Posts.belongsTo(User);

module.exports={
    User,
    Posts
};