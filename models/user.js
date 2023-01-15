var mongoose = require('mongoose');
var db = mongoose.connection;
                                    //! DB's name here:
mongoose.connect('mongodb://localhost/user_login_system');

// User Schema
var UserSchema = mongoose.Schema({
	username: {
		type: String,
		index: true
	},
	password:{
		type: String, required: true, bcrypt:true
	},
	email: {
		type:String
	},
	name:{
		type: String
	},
	profileimage:{
		type: String
	}
});

//making the object available outside this file (in users.js)
var User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function(newUser, callback) {
	newUser.save(callback)
}