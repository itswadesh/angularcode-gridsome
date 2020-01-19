---
title: Inventory Manager Using Angularjs Mysql Php
date: 2019-09-15
published: true
tags: ['rest', 'php', 'angularjs', 'crud']
series: false
cover_image: ./images/product-manger.jpg
canonical_url: false
description: "We will add, update, delete, activate, deactivate products from inventory. Some AngularJS directives will make our job easy"
---
Last tutorial we created a [database helper class for PHP RESTful API](http://www.angularcode.com/useful-database-helper-class-to-generate-crud-statements-using-php-and-mysql/). In this tutorial we will use that database helper class to build a simple inventory/product manager application. We will add, update, delete, activate, deactivate products from inventory. Some AngularJS directives will make our job easy.

### Features

*   Truely single page web application
*   Showcase the awesome power of angularjs directives
*   Animations make the user interaction much enjoyable
*   Has extensive power to build a large inventory management application over this framework

<a href="http://demos.angularcode.com/product-manager/#/" class="button green" target="_blank">Live Demo</a> 
<div class="github">
    <a href="https://github.com/itswadesh/inventory-manager-mysql-php" rel="nofollow" target="_blank">
        <b>Product Inventory Manager</b>Download this project form Github
    </a>
</div>

How to use
----------

*   Download the project file from the download link provided above
*   Import the database file “products.sql” into MySQL database
*   Add your database settings to the file “config.php”

There will be 3 directives essential for this simple application

*   form-element \[ Form element templates \]
*   only-numbers \[ This directive will restrict users from entering alphabets in a number field \]
*   animate-on-change \[ Animates a particular product when it is updated \]

In this project I ignored the security part of the web application. Please do add some security features before implementing into production.

### Modules used

*   AngularJS Bootstrap UI modal (for product edit)
*   underscore.js (for some helper javascript functions)
*   PHP Slim to create our data provider / API
    

### Requirement Specification

*   Add/Edit/Delete new products to inventory
*   Activate/De-activate
*   Filter list of products at client side
    

### Application Structure

**api** \[ This serves as our ReSTFul data provider \]

– **libs** \[ The PHPSlim library \]

– **v1** \[ Our API version 1 \]

— _.htaccess_ \[ Converts urls to friendly urls for our API\]

— _dbHelper.php_ \[ The helper functions to connect to MySQL Database \]

— _config.php_ \[ Database credentials and configurations \]

— _index.php_ \[ The starting point of the API \]

**app**

– _app.js_ \[ The starting point of our AngularJS web application \]

– _productsCtrl.js_ \[ Products are controlled from here \]

– _data.js_ \[ The middleware to connect to our API\]

– _directives.js_ \[ Some essential AngularJS directives \]

**css**

– _bootstrap.min.css_

– _custom.css_

– _font-awesome.min.css_

**js** \[ Required javascript libraries for application\]

– _angular.min.js_

– _angular-route.min.js_

– _angular-animate.min.js_

– _bootstrap.min.js_

– _jquery.min.js_

– _ui-bootstrap-tpls-0.11.2.min.js_

– _underscore.min.js_

**partials** \[ Partial pages for products list and product edit \]

– _products.html_ \[ List of products \]

– _productEdit.html_ \[ Product edit template \]

**_index.php_** \[ This page is called when our application starts and everything starts from here \]

Let's use our database helper function and create the API for database interactions

*   api/v1/dbHelper.php – Database helper functions created in previous tutorial for database access
*   api/v1/config.php – Database configurations \[userid, password, server name\]
*   api/v1/index.php – Select, Add, update, delete products

#### api/v1/index.php

https://gist.github.com/itswadesh/3423bafc6023a0fc3b73457939f3bd3c.json

Now our API is ready. Lets start building our application. In our index.html (start page) of our application we will put the follwing div where all the partial pages will be served.

`<div id="ng-view" ng-view=""></div>`

#### partials/products.html

Now we will display the list of products and add some simple animations for product change, the angular way

#### Products

https://gist.github.com/itswadesh/f782aa66986cc4cc9b4bca5f5b693f12.json

#### partials/productEdit.html

We are successful displaying the products which has got activate/deactivate and delete button. We are going to embed our products into textboxes for editing

https://gist.github.com/itswadesh/32e746fab6857e8cee0198886b8543c6.json

All the above partial pages will be controlled by our controller `productsCtrl`. Here we put the business logic of adding, deleting, updating products as well as the user interactions

https://gist.github.com/itswadesh/2e64e1877153ffdb317eb23324d78cc8.json