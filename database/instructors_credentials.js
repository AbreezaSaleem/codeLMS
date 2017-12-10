import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const saltRounds = 8

var instructors_credentialsSchema = mongoose.Schema(
{
	email: String,
	password: String, 	//alphanumeric?
	courses: [String] 	// OKAY SO ITS NOT GETTING USED ATM :)
})

var instructors_credentials = module.exports =  mongoose.model('instructors_credentials', instructors_credentialsSchema, 'instructors_credentials') // IN ES6??? wth

module.exports.addInstructor = function(data)
{
	console.log(data.username)
	console.log(data.password)
	bcrypt.genSalt(saltRounds, function(err, salt)
	{
		bcrypt.hash(data.password, salt, function(err, hash)
		{
			var newUser = new instructors_credentials({email: data.username, password: hash, courses: []})
			newUser.save(function (err, newUser) 
			{
				if (err) return console.error(err);
			})
		})
	})
}


module.exports.findUserbyUsername = function(username) 
{
	return instructors_credentials.findOne({email: username});
}

module.exports.findUserbyId = function(id, callback) 
{
    instructors_credentials.findById(id, (err) => console.log(err));
}

/// BCRYPT?????
module.exports.comparePassword = function(password, hashed_password, callback) 
{
    return instructors_credentials.findOne({password: password});

    /*bcrypt.compare(password, hashed_password, function(err, isMatch) // USE THIS WHEN WE WILL START STORING USERS VIA A SIGNUP PAGE - BVRYPT IMPLEMENTED
    {
    	if (err) throw err
    	callback(null, isMatch)
    })*/
}