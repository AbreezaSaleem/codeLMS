
scriptDir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# go to temp
cd $scriptDir/temp

# Clone the directory from gitlab
ssh-agent bash -c "ssh-add $scriptDir/keys/18100115.rsa; git clone git@localhost:18100115/cs4612.git"