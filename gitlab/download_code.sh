#!/bin/bash

userName=$1
repoName=$2
workDir=$3
gitlabServer=$4

scriptDir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# go to temp
cd $scriptDir/$workDir

# Clone the directory from gitlab
ssh-agent bash -c "ssh-add $scriptDir/keys/$userName.rsa; git clone git@$gitlabServer:$userName/$repoName.git"