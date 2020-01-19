---
title: User authentication using Angularjs, PHP, Mysql
date: 2019-08-25
published: true
tags: ['rest', 'php', 'angularjs', 'crud']
series: false
cover_image: ./images/angular_auth.jpg
canonical_url: false
description: "Mixing PHP, MySQL, and AngularJS with Sessions and User Login, Logout, Account Creation would be awesome"
---
I received a number of tutorial requests to publish a tutorial on user authentication. They say “Mixing PHP, MySQL, and AngularJS with Sessions and User Login, Logout, Account Creation” would be awesome”.

We will create a simple AngularJS web app that will have the following 3 functionality.

_\* Login, Signup and Logout._\*

We will create a ReSTful web service using PHPSlim framework as data provider. The data from the ReSTful service will be used to enable user authentication in our AngularJS application.

<a href="http://demos.angularcode.com/angularcode-authentication-app/#/login" class="button green" target="_blank">Live Demo</a> 
<div class="github">
    <a href="https://github.com/itswadesh/angularcode-authentication-app" rel="nofollow" target="_blank">
        <b>Authentication using AngularJS, PHP, MySQL</b>Download this project form Github
    </a>
</div>

To run the user authentication web application in your local machine, follow the following 3 simple steps.

*   *Download* the project files
*   Import **_angularcode\_auth.sql_**
*   Enable **_rewrite\_module_**in apache server for friendly urls

Tutorial:
---------

We will first create the Login page. After the user enters the correct combination of email and password, it will be authenticated from the credentials stored at our MySQL database. On successful login it will store the credentials in the user session and redirect to the welcome page. All subsequent pages browsed after login will have access to the user information.

Upon unsuccessful login or logout, the app will redirected the user to the login page.

We will use the elegant AngularJS-Toaster plugin to communicate to the user easily.

For this application we will also create some simple AngularJS directives for our SignUp form.

##### ReST

Representational state transfer (ReST) is a software architecture for www. Distributing the data to different kind of applications becomes convenient using this architecture. It produce status code response in JSON or XML format.

We will create following 5 folders to manage our code effectively.

**api** \[ This directory will serve as our restful data provider \]

– _config.php_ \[ Database configuration information \]  
– **libs** \[ The PHPSlim library files \]  
– **v1** \[ This folder controls our API version \]  
— _.htaccess_ \[ used to convert urls to user friendly url\]  
— _passwordHash.php_ \[ Generate password hash \]  
— _dbConnect.php_ \[ The function to connect to MySQL Database \]  
— _dbHandler.php_ \[ This file contains some database helper functions \]

— _index.php_ \[ The starting point of the API \]  
— _authentication.php_ \[ Contains functions for user authentication, login, signup, session \]

**app** – _app.js_ \[ The main angularJS file that controls routing and authentication \]  
– _authCtrl.js_  
– _data.js_  
– _directives.js_

**css** – _bootstrap.min.css_  
– _custom.css_  
– _toaster.css_

**js** \[ This directory contains required javascript libraries \] – _angular.min.js_  
– _angular-route.min.js_  
– _angular-animate.min.js_  
– _toaster.js_

**partials** \[ Contains our partial pages that will be served based on user request \] – _login.html_  
– _signup.html_  
– _dashboard.html_

**_index.php_** \[ Starting point of our application contains css files, javascript files and ng-view placeholder to serve all requested partial pages \]

All the API files required to create the ReSTful webservice is stored inside the “**api**” directory.

The only file you need to change is the “**config.php**” \[ This file contains the database login information. Put your database credentials here \]

https://gist.github.com/itswadesh/2f418f19e53201628ac6932c741ef786.json

Also we need to import the “**angularcode\_auth.sql**” file into our MySQL database

https://gist.github.com/itswadesh/143aeb55a5ff8244f42ffd5b2baea459.json

Now our data provider is ready. Let’s create the starting point of our application (index.php)

This file contains the required stylesheet and javascript files with the placeholder to serve partial pages

https://gist.github.com/itswadesh/fe290ef2302bdb1c167fd347a8cadb78.json

We will create and store all our custom AngularJS code files inside the **app/** directory

#### **app/ app.js**

This is the starting point of our AngularJS application. Here we will load the modules and configure the route provider.

https://gist.github.com/itswadesh/19fd1909b92060b900d0aaab70bbafc8.json

### **app / data.js**

We will communicate with our ReSTful API using this file. This file contains some helper functions and acts as our service provider.

#### AngularJS Service

Sometimes while building our AngularJS application, we need some variables or functions to be accessed throughout our application from any controller. Here comes the role of AngularJS Service. As AngularJS Service services are single-tone, the defined properties and functions can be accessed from anywhere.

https://gist.github.com/itswadesh/7e77c82df5a8d2b26c61306963199168.json

#### **app /authCtrl.js**

This is the controller which communicates with our front end.

https://gist.github.com/itswadesh/aa56a2e4ab08025cba8634746ae95982.json

#### **app / directives.js**

This file contains 2 custom AngularJS directives we used for our application.

focus – This directive focus on the desired form element on page load

password-match – Used to check if both the password and confirm password are same in our user signup page.

https://gist.github.com/itswadesh/4226776ec0f29be966e864e953ebbf23.json

### AngularJS Directives

Directives are one of the most powerful part of the AngularJS framework. Using these we can create or extend the html elements.

We can extensively use these AngularJS directives to create templates, to validate forms, etc.

In AngularJS, it is always recommended to manipulate the DOM using directives only.