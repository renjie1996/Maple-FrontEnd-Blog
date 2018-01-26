#! /bin/bash

git reset --hard origin/master
git clean -f
git pull origin master
npm install
npm run test
npm run start