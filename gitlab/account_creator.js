import gitlab_module from 'gitlab'
import gitlab_module_api from 'node-gitlab-api'
import child_process from 'child_process'
import fs from 'fs'

var gitlabConfig = JSON.parse(fs.readFileSync(__dirname + '/gitlab_config.js', 'utf8'));

var gitlab = gitlab_module(
{
	url: gitlabConfig["gitlab-root"]["url"],
	token: gitlabConfig["gitlab-root"]["token"]
})


var gitlab_api = gitlab_module_api(				// NODE-GITLAB-API FTW
{
	url: gitlabConfig["gitlab-root"]["url"],
	token: gitlabConfig["gitlab-root"]["token"]
})


export default function(userInfo, callback)
{
	/*var userFullName = 'Abreeza Saleem'
	var userInfo = 
	{
		email: '18100165@lums.edu.pk',
		password: 'ex700ledbe3',
		username: 'abreeza',
		name: userFullName
	}
	createUser(userInfo)*/

	console.log("Searching for user_id");
	gitlab.users.search(userInfo.email, (users) => 		/// this function is defined in the User.js file
	{
		if (users != null && users.length == 0) 
		{
			createUser(userInfo, function (keys) 
			{
				callback(keys);
			});
		}
		else 
		{
			console.log("User already exists.");
			//callback(null);
		}
	});
}

function createUser(userInfo, callback) 
{
	gitlab.users.create(userInfo, (usr) => 
	{
		// now we're gonna create the ssh keys for this user! :) 
		var privateKey = __dirname + '/keys/' + usr.id + '.rsa'
		var cmd = "ssh-keygen -t rsa -N '' -f " + privateKey 		// t rsa, -N , -f 
		const keyGenerator = child_process.exec(cmd, (error, stdout, stderr) =>
		{
			console.log('keys created now going to store them in the database')
			var publicKey = privateKey + ".pub"
			const keyGenerator = fs.readFile(publicKey, "utf8", (err, pubKey) => 
			{
				console.log("Public-Key ready for deployment. Now deploying on server.")
				if (err)
					console.log(err)
				gitlab.users.keys.addKey(usr.id, "GitLab Public Key", pubKey, () => 
				{  // deploying user-key
					console.log("Key deployed.")
				});
				fs.readFile(privateKey, "utf8", (err, prvKey) => 
				{
					var keys = {
						pubKey: pubKey,
						prvKey: prvKey
					};
					fs.unlink(privateKey)
					fs.unlink(publicKey)
					callback(keys)
				});
			});
		})
	})
}

