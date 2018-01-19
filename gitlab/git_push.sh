userName=$1
workDir=$2

scriptDir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd $scriptDir/$workDir
ssh-agent bash -c "ssh-add $scriptDir/keys/$userName.rsa; git add .; git commit -m 'git_push'; git push origin master"