#!/bin/bash
if [ "$#" -ne 2 ]; then
    echo "You must enter exactly 2 arguments"
    exit 1
fi

userName=$1
workDir=$2

scriptDir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# now you push your code fml
# Creating custom git-push.sh script
# sh $scriptDir/git_push.sh $userName $workDir
echo "userName=$userName
workDir=$workDir" | cat - $scriptDir/git_push.sh