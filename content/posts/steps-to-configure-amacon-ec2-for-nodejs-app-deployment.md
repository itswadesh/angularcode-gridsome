---
title: Steps to Configure Amazon EC2 for Nodejs app deployment
date: 2019-09-15
published: true
tags: ['nodejs', 'amazon ec2', 'pm2', 'mongodb']
series: false
cover_image: ./images/configure-amacon-ec2-for-nodejs-app-deployment.png
canonical_url: false
description: "In this tutorial I will show you, how to configure Amazon EC2 server for an NodeJS app"
---

In this tutorial I will show you, how to configure Amazon EC2 server for an NodeJS app. Login to your Amazon EC2 server and execute the following commands.

Install NodeJS
```
sudo apt-get update 
sudo apt-get install -y python-software-properties python g++ make 
sudo add-apt-repository ppa:chris-lea/node.js 
sudo apt-get update 
sudo apt-get install nodejs 
sudo apt-get install git 
sudo npm install forever -g
```

Initialize the remote git repo
```
cd ~/ 
mkdir repo/ 
cd repo 
git init --bare
```

Configure hooks
```
cd repo/hooks/ 
cat > post-receive #!/bin/sh GIT_WORK_TREE=/home/ec2-user/www export GIT_WORK_TREE git checkout -f cd $HOME/www ./start.sh
```
```
chmod +x post-receive
```
Automate the deployment process
```
mkdir www/ 
cd ~/www/ 
cat > start.sh # this file is execute by post-receive everytime a Git Commit is made # Path: /home/ec2-user/repo/hooks/post-receive forever stopall NODE_ENV='production' forever start server
```
```
chmod +x start.sh
```
Copy content of C:\Users\<your_username>\.sshid_rsa.pub to remote Machine at .ssh folder

```
sudo vi .ssh/authorized_keys
```

Add the following line to Local Machine (dist/.git/config)
[remote "origin"] url = ssh://ec2-user@<your_server_ip>/home/ec2-user/repo fetch = +refs/heads/*:refs/remotes/repo/* puttykeyfile = C:\Users\<your_username>\.ssh\aws.ppk </your_username></your_server_ip>

Local Machine: Git push

Open http port from ec2 dashboard
Check with the command NODE_ENV=production node server

Configure IP tables to redirect all incoming connections to port 8080
```
sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 8080 
sudo iptables -t nat -L -n --line-number
```

Install MongoDB at amazon-ec2
[How to install Mongo Database at amazon-ec2] (https://docs.mongodb.org/ecosystem/platforms/amazon-ec2/)