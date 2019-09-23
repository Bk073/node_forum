const mongoose = require('mongoose');
const md5 = require('md5');
const validator = require('validator');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
   email: {
       type: String,
       required: true,
       unique: true,
       validate: [validator.isEmail, 'Invalid Email Address'],
       required: 'Please Supply an email address',
   },
   name: {
       type: String,
       required: true,
       trim: true,
   },

});

userSchema.plugin(passportLocalMongoose, {usernameField: 'email'});

module.exports = mongose.model('User', userSchema);


