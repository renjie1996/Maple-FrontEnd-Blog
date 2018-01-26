#! /bin/bash

git reset --hard origin/master
git clean -f
git pull
node bin/webhook.js