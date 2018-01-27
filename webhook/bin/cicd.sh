#! /bin/bash
git reset --hard origin/master
git clean -f
git pull
pm2 restart 0