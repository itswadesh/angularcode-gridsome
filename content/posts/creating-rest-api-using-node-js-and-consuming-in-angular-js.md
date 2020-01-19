---
title: Creating REST API using Nodejs and consuming in Angularjs
date: 2019-08-08
published: true
tags: ['rest', 'nodejs', 'angularjs']
series: false
cover_image: ./images/rest.png
canonical_url: false
description: "We will create a simple inventory manager app which will communicate to database"
---
In most of the applications we need to talk to some kind of database. While AngularJS is a client side library which is capable only at the client side or at browser, now to connect to our database which usually resides at our server we need NodeJS.

NodeJS is an awesome light weight, non-blocking platform to have at your server which is perfect for data-intensive real-time applications.

We will create a simple inventory manager app which will communicate to database

<!-- <a href="http://rest.iotutorials.com/" class="button green" target="_blank">Live Demo</a>  -->
<div class="github">
    <a href="https://github.com/itswadesh/simple-restful-api-angularjs" rel="nofollow" target="_blank">
        <b>Inventory Manager using AngularJS</b>Download this project form Github
    </a>
</div>

Database: `products-demo` Collection: `products` Fields: `SKU, Product Name, Price`

Our learning path will be like following

- Install NodeJS and MongoDB
- Create and configure web server to communicate to database (NodeJS + Express)
- Craft the client side app (AngularJS)

### Install NodeJS, NPM and MongoDB
- NodeJs: https://nodejs.org/en/
- MongoDB: https://www.mongodb.org/

### Create ReST API
- To create a NodeJS application we first need to create 2 files named:

### 1. package.json (Defines the architecture and dependency of the nodejs app)

https://gist.github.com/itswadesh/cba42cfcaff2ed85d63ac8c512d0d508.json

### 2. server.js (This will create a basic webserver similar to Apache)

https://gist.github.com/itswadesh/582e85c6d5cf198d4af15829d08700ae.json

Now we created our server, lets open command line and navigate to the project folder (C:\creating-rest-api-using-nodejs-and-consuming-in-angularjs)
Enter the following commands

```
npm install node server
```

### npm install – Install all required modules defined in package.json file
- body-parser – Required to parse the JSON data from the client
- express – Webserver similar to Apache
- mongoose – Handy module to talk to MongoDB database
- node-restful – This module automatically create REST API from specified model

### node server – Run our NodeJS app
At this point we should see the message Server is running on port 3000
Create the following 2 files

- models/product.js – Define the database schema

https://gist.github.com/itswadesh/d718415f31abb3a3289f8a2dcdd0045d.json

### routes/api.js – Defines the API routes (data providers)
- e.g. http://localhost:3000/api/products (get,post,put,delete)
- e.g. http://localhost:3000/api/categories (get,post,put,delete)

https://gist.github.com/itswadesh/5b659029c23bb5ea59054deb8d54070a.json

Now that our API is ready. You can test it using Chrome Postman extension

The next step is to create our client using AngularJS
To call our ReST API we need the help of angular-resource which will make our task easy and fun.
In this application I’ve added some animations too.
For this application we will create a factory named Product to interact with our ReST API which in turn interacts with our database.
We will call this factory from products.js file with different methods like get, post, put, delete.
The file public/index.html is the starting point of our application. From here everything starts. This page renders the view.

https://gist.github.com/itswadesh/3d4eb6a6cb1ff6be00d7604236ae69cc.json

We have 2 controller where we define the business logic and the angular app resides here

### app/app.js

https://gist.github.com/itswadesh/1b147d43979eb0eba8686b81222e4a58.json

### app/products.js
This is the ProductsCtrl where we handle all user interactivity

https://gist.github.com/itswadesh/c53d49199f114e1a156c6c1c5fe1c6fc.json