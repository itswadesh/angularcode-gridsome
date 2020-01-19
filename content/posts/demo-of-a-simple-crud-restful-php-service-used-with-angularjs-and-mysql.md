---
title: Demo of a simple CRUD Restful php service used with Angularjs and Mysql
date: 2019-08-15
published: true
tags: ['rest', 'php', 'mysql', 'angularjs', 'crud']
series: false
cover_image: ./images/crud-using-restful-webservice-with-angularjs.jpg
canonical_url: false
description: "In this tutorial we will create a RESTful web service using PHP. Also we will create a Customer Manager Application using AngularJS as front end"
---
REST represents Representational State Transfer. For web applications REST API is a good architectural choice for the communication between the app and the server. This makes sharing data between different devices and apps easy. Implementing REST is simpler compared to other methods like SOAP, CORBA, WSDL. In this tutorial we will create a RESTful web service using PHP. Also we will create a Customer Manager Application using AngularJS as front end which will consume this web service.

<!-- <a href="http://demos.angularcode.com/AngularCodeCustomerManagerApp/" class="button green" target="_blank">Live Demo</a>  -->
<div class="github">
    <a href="https://github.com/itswadesh/simple-restful-api-angularjs" rel="nofollow" target="_blank">
        <b>PHP-MySQL CRUD</b>Download this project form Github
    </a>
</div>

In this project we will have the most simple Create, Read, Update, Delete operations on customers table using REST API. Previously we learnt [how to create a simple task manager application using AngularJS PHP and MySQL](http://angularcode.com/simple-task-manager-application-using-angularjs-php-mysql/ "Simple task manager application using AngularJS PHP MySQL"). This time we will do the same CRUD on database but in a more organised manner and using a RESTful web service using PHP, MySQL.

To run the customer manager web application in your local machine, follow the following 3 simple steps

1.  Download the required files
2.  Import **angularcode\_customer.sql**
3.  Enable **rewrite\_module** in apache server

At first lets start building the REST API using PHP, MySQL and then we will move on to the AngularJS part for the front end part of our Customer Manager Application.

### 1\. Creating the database table for this project

You can import the provided sql file **angularcode\_customer.sql** in the download. We need to keep the application database structure simple, so we only need one table named customer

https://gist.github.com/itswadesh/b7f3a564b23cf2d782dd381ca4a42eb5.json

### 2\. Build the REST API

Now lets fetch data for our database using the RESTful API which is created using PHP Langulage. The REST files are saved inside services folder, so that we can make RESTful calls using

*   $http.get
*   $http.post
*   $http.delete

In our application the path to the REST API is “/AngularCodeCustomerManagerApp/services/”. Now we can make RESTful calls like

*   `$http.get('/AngularCodeCustomerManagerApp/services/customers')` – Gets all the customers
*   `$http.get('/AngularCodeCustomerManagerApp/services/customers/10')` – Get the customer with id=10
*   `$http.post('/AngularCodeCustomerManagerApp/services/insertCustomer', customer);` – Insert a new customer
*   `$http.delete('/AngularCodeCustomerManagerApp/services/deleteCustomer/10');` – Delete the customer with id=10

The services folder contains the .htaccess file for friendly URLs. To make this friendly URLs to work, we need to enable the **rewrite module** of apache.

https://gist.github.com/itswadesh/a598f60325a9902bd7fd273c771cf62e.json

The api.php file creates those REST calls possible

https://gist.github.com/itswadesh/4c13d7f34e5369890cb8dfaeeb5f7859.json

### 3\. Make our web page angular ready

The main index.html file, which is the starting point of our application

https://gist.github.com/itswadesh/bdc0a40a16783ccae4f5c48bf3fc418d.json

#### customer.html- This file lists all the customers

https://gist.github.com/itswadesh/bf667bca53ec5cd28e106714ced3c796.json

#### 2\. edit-customer.html – This file is used to add, update, delete a customer

https://gist.github.com/itswadesh/69a302cd0a1a63ff5a692b322f1233e7.json

### 4\. AngularJS Code

The app.js file which contains all the client side angularjs code

https://gist.github.com/itswadesh/7a2fe030b39d7b0eababeb9efe2991e3.json