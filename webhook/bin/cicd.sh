#! /bin/bash
git reset --hard origin/master
git clean -f
git pull
cnpm i
pm2 restart bin/webhook.js