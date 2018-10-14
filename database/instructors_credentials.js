import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import gitlabAC from '../gitlab/account_creator'

const saltRounds = 8

var instructors_credentialsSchema = mongoose.Schema(
{
	name: String,
	username: String,
	email: String,
	password: String, 	
	courses: [String], 	// OKAY SO ITS NOT GETTING USED ATM :)
	publicKey: String,
	privateKey: String
})

var instructors_credentials = module.exports =  mongoose.model('instructors_credentials', instructors_credentialsSchema, 'instructors_credentials') // IN ES6??? wth

module.exports.addInstructor = function(data)
{
	var userInfo = 
	{
		email: data.email,
		password: data.password,
		username: data.username,
		name: data.name
	}
	gitlabAC(userInfo, keys =>	// create account on gitlab
	{
		// now you have the pub + private keys as well! now you can store them in the database
		bcrypt.genSalt(saltRounds, function(err, salt)
		{
			bcrypt.hash(data.password, salt, function(err, hash)
			{
				var newUser = new instructors_credentials(	 /// add to database
				{
					name: data.name,
					username: data.username,
					email: data.email, 
					password: hash, 
					courses: [],
					publicKey: keys.pubKey,
					privateKey: keys.prvKey
				})
				newUser.save(function (err, newUser) 
				{
					if (err) return console.error(err);
					// here you register on gitlab as well
				})
			})
		})
	})
}


module.exports.findUserbyUsername = function(username) 
{
	return instructors_credentials.findOne({username: username});
}

module.exports.findUserbyId = function(id, callback) 
{
    instructors_credentials.findById(id, (err) => console.log(err));
}

/// BCRYPT?????
module.exports.comparePassword = function(password, hashed_password, callback) 
{
    //return instructors_credentials.findOne({password: password});

    bcrypt.compare(password, hashed_password, function(err, isMatch) // USE THIS WHEN WE WILL START STORING USERS VIA A SIGNUP PAGE - BVRYPT IMPLEMENTED
    {
    	if (err) throw err
    	callback(null, isMatch)
    })
}