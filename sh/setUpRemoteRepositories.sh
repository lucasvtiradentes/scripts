#!/bin/bash
# USAGE: bash setUpRemoteRepositories.sh

# SET ENV ______________________________________________________________________
herokuAppName=
gitHubRepositoryLink=

# ADD GITHUB REPOSITORY AS REMOTE ______________________________________________
git remote add origin $gitHubRepositoryLink

# ADD HEROKU REPOSITORY AS REMOTE ______________________________________________
heroku git:remote -a $herokuAppName