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

