 const mongoose = require('mongoose');
 const Schema = mongoose.Schema

 const userSchema = new Schema({
   username: String,
   accountid: String,
   thumbnail: String

 });




 const User = mongoose.model('users',userSchema);

 module.exports = User;
