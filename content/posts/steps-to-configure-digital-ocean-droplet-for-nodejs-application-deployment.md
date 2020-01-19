---
title: Steps to Configure Digital Ocean Droplet for Nodejs Application Deployment
date: 2019-11-07
published: true
tags: ['nodejs', 'digital ocean', 'pm2', 'nginx']
series: false
cover_image: ./images/do.png
canonical_url: false
description: "How to setup and deploy nodejs application for production to ubuntu cloud.
We will be using Digital Ocean Cloud droplets for this deployment."
---

I finished building my NodeJS app. Next step is to deploy it to some cloud server.
In this tutorial I will guide you how to setup and deploy nodejs application for production to ubuntu cloud. 
We will be using [Digital Ocean](https://m.do.co/c/5d0f51f2d693) Cloud droplets for this deployment. Digital Ocean is simple and easy to get started.

Here are the list of steps that we need, in order to complete the setup process

1. <a href="#create">Create and start a droplet</a>
2. <a href="#login">Login to that droplet</a>
3. <a href="#install">Install NodeJS</a>
4. <a href="#configure">Configure timezone</a>
5. <a href="#database">Install Database (MongoDB)</a>
6. <a href="#nginx">Setup nginx and build-essentials</a>
7. <a href="#copy">Copy project files</a>
8. <a href="#modules">Install node modules</a>
9. <a href="#pm2">Setup & Start PM2</a>
10. <a href="#https">Enable https</a>

<h1 id="create"> Create and start a droplet </h1>
Head to <a href="https://m.do.co/c/5d0f51f2d693">https://www.digitalocean.com</a> and create a Digital Ocean account.

Login to <a href="https://m.do.co/c/5d0f51f2d693">Digital Ocean</a> panel and create the droplet. for a nodejs project it is recommended to go for 2GB RAM droplet

Choose a region closer to your target audience location
Select UBUNTU 18.x as the operating system

<h1 id="login"> Login to that droplet </h1>
The droplet creation will take somewhere between 1–3 minutes. Upon completion, it will be assigned with an IP Address

Option-1 (Using password)
---------
Copy that IP Address and in your command prompt type `ssh root@YOUR_IP_ADDRESS`
e.g. `ssh root@100.100.0.100`
Enter the password and you must be logged in as root

Option-2 (Using a public/private key pair)
---------
e.g. `ssh -i D:/ssh/key-file.ppk root@100.100.0.100`
<em>key-file.ppk</em> is your private key

<h1 id="install"> Install NodeJS</h1>
Get the node source and install it

```
sudo curl -sL https://deb.nodesource.com/setup_12.x | sudo bash -
sudo apt-get install nodejs -y
```

<h1 id="configure"> Configure timezone</h1>
This is essential when you deal with dates in your application

```
sudo dpkg-reconfigure tzdata # Add timezone as Kolkata
```

<h1 id="database"> Install Database (MongoDB) </h1>
Create a list file for MongoDB

```
echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list
```

Install

```
sudo apt-get update
sudo apt-get install -y mongodb-org
```

Start MongoDB Service

```
sudo service mongod start
```

Edit the mongod.config

```
sudo nano /etc/mongod.conf
```

Change line 23 to bindIp: 0.0.0.0

```
sudo service mongod restart
```

<h1 id="nginx">  Setup nginx and build-essentials </h1>
Why nginx?

We will use nginx as a reverse proxy as well as a server to serve static files. This gives us advantage like 
- https
- caching
- abstraction
- speed
- reduces nodejs load
- load balancing

```
sudo apt-get install nginx -y
sudo service nginx restart
```

Install build-essentials
```
sudo apt-get install build-essential -y
```

<h1 id="copy">  Copy project files </h1>
We can use [Filezilla](https://filezilla-project.org/) to upload our project files to /var/www/litekart folder

<h1 id="modules">  Install node modules </h1>

Navigate to /var/www/litekart and run

```
npm i --production
```

<h1 id="pm2">  Setup PM2 </h1>
Why PM2?
---------
In production environment we are going to use PM2. Because NodeJS commands are valid for that terminal session and kills the server once terminal session ends. To overcome this issue we are going to use a process manager that will demonize the node process and will keep it running for ever

```
sudo npm install -g pm2
sudo pm2 --name litekart start npm -- start
```

The above will install PM2, execute npm start command of the project and start a PM2 process named litekart

<h1 id="https">  Enable https </h1>
Our NodeJS app is up and running. Now we need to enable https which is a mandatory requirement now a days. We are going to use a free https certificate from Certbot. Run the following command and follow the instructions

```
sudo certbot --nginx certonly
```

The installed certificate is valid for 6 months. We need to setup auto renewal of the https certificate through cron job
```
crontab -e
```

Enter the following at the end
```
@monthly /home/ubuntu/letsencrypt/letsencrypt-auto certonly --reinstall --nginx -d www.litekart.in && sudo service nginx reload
```