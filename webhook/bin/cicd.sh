#! /bin/bash

git reset --hard origin/master
git clean -f
git pull origin master
node ./webhook.js