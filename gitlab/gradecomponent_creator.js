import gitlab_module from 'gitlab'
import gitlab_module_api from 'node-gitlab-api'
import fs from 'fs'


var gitlabConfig = JSON.parse(fs.readFileSync(__dirname + '/gitlab_config.js', 'utf8'));

var gitlab = gitlab_module(
{
	url: gitlabConfig["gitlab-root"]["url"],
	token: gitlabConfig["gitlab-root"]["token"]
})


// Initializing Globals
/*var USER, PROJECT;
USER = process.argv[2];
PROJECT = process.argv[3];
*/

// Functions
export default function(USER, PROJECT)
{
	console.log("Searching for user_id");
	console.log(USER)
	gitlab.users.search(USER, (users) => 
	{
		if (users && users.length == 1)
		{
			checkProject(USER, PROJECT);
		}
		else
		{
			console.log('user doesnt exist!')
		}
	});
}

function checkProject(USER, PROJECT) 
{
	console.log("Checking if Project already exists...");
	var params = { path_with_namespace: USER + "/" + PROJECT };
	gitlab.projects.allAdmin(params, function (projects) 
	{
		if (projects == null) 
		{
			console.log('Project doesnt exist!')
			createProject(USER, PROJECT);
			return;
		}
		var counter = 0;
		projects.forEach(function (prj, index, array) 
		{
			if (prj.path_with_namespace == params.path_with_namespace) 
			{
				console.log("Project already exists");
				return;
			}
			counter++;
			if (counter == array.length) 
			{
				console.log('Project doesnt exist!')
				createProject(USER, PROJECT);
				return;
			}
		});
	});
}

function createProject(USER, PROJECT) 
{
	console.log("Initializing project creation...");
	console.log("Searching for user_id");
	gitlab.users.search(USER, (usr) => 
	{
		console.log("user_id Found! Now Creating Project...");
		console.log(usr)
		var params = { user_id: usr[0].id, name: PROJECT };
		gitlab.projects.create_for_user(params, (prj) => 
		{
			console.log("Project Created. Adding admin to project members...");
			console.log(prj)
			var params = { id: prj.id, user_id: 1, access_level: 20 };			// wut is going on here? 
			gitlab.projects.addMember(params, () => 
			{ // Adding admin with Reporter (20) access level
				console.log("Admin added to members.")
			});
		});
	});
}