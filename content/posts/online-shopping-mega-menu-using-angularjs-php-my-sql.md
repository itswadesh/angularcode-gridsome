---
title: Online Shopping Mega Menu using Angularjs, PHP, Mysql
date: 2019-07-10
published: true
tags: ['rest', 'nodejs', 'angularjs']
series: false
cover_image: ./images/rest.png
canonical_url: false
description: "We will create E-Commerce megamenu to display all the available category of products using AngularJS"
---
We find E-Commerce mega menu in almost all online shopping websites where they display the all their available category of products. We will design the database and use AngularJS to easily present the menu to the user with some interactions.

Today we are going to create a similar megamenu using

*   HTML with Bootstrap 3\* (For easy styling and user interactivity)
*   AngularJS (Model View Whatever Javascript framework to write the application logic)  
    MySQL (Database)
*   PHP (Our server side programming language for providing data from MySQL database to AngularJS Application)
*   PHPSlim (A PHP framework to easily create ReSTFul web services) \[Optional\]

<!-- <a href="http://demos.angularcode.com/megamenu/#/" class="button green" target="_blank">Live Demo</a>  -->
<div class="github">
    <a href="https://github.com/itswadesh/angularcode-megamenu" rel="nofollow" target="_blank">
        <b>Megamenu</b>Download this project form Github
    </a>
</div>

The directory structure of our application as follows

### angularcode-megamenu

**api** \[ Out ReSTFul API end point \]

– **libs** \[ Contains all PHPSlim library files \]

– **v1** \[ Current version of our ReST routes from where data is served \]

— _.htaccess_ \[ Apache rule to convert generic urls to friendly urls for our API\]

— _dbHelper.php_ \[ A custom database helper function to select data from MySQL Database \]

— _config.php_ \[ Contains our database configurations \]

— _index.php_ \[ The main file of our api from where our API runs \]

**app** \[Contains all our custom AngularJS files\]

– _app.js_ \[ The only AngularJS file we require for this project \]

**css** \[ Stylesheets \]

– _bootstrap.min.css_ \[ Here i used Bootstrap v3.3.2 \]

– _megamenu.css_ \[ Some custom styling to generate the frontend of our megamenu \]

**libs** \[ All libraries required by our project\]

– _angular.js_ \[ In this project we require only AngularJS \]

**_index.html_** \[ The main file from where our application starts \]

You can download a copy of the whole project from the above download link.  
To run the project

*   Install Apache, PHP, MySQL (I used WAMP on a windows machine)
*   Activate Apache rewrite module
*   Download and unzip the code file provided you as zip archive into your apache root folder.
*   Import the angularcode\_megamenu.sql file into MySQL which will automatically create a new database named
*   angularcode\_megamenu and a table named megamenu in your MySQL database

If you face any issue while creating the above ReST API, probably you misconfigured the Apache, PHP, MySQL or rewrite module is not working properly

Now lets understand the working principle. How things work together.

First lets design the databse structure for our proejct  
Database – categories

We will first create the ReST API required for our project

#### api/v1/config.php

https://gist.github.com/itswadesh/1efc3398dc499c871ee29a971f672dac.json

#### api/v1/dbHelper.php

https://gist.github.com/itswadesh/1a130d907b267b7cd4f293a57e6c0ca9.json

#### api/v1/index.php

https://gist.github.com/itswadesh/2fc94f276557d0e45bc1fa1e6834d45a.json

#### index.html

https://gist.github.com/itswadesh/5c9c84749e55a042f6e3c8f8a0b9e7a9.json

#### app.js

https://gist.github.com/itswadesh/76c7b7c307dff6f469f1e402d2718fad.json

#### megamenu.css

The stylesheet which presents the megamenu to the user and expands the child nodes when user hovers over the parent menu item.

https://gist.github.com/itswadesh/885382723ec0766c1cca883dc15ac663.json

We are done with creating a megamenu using AngularJS. Feel free to leave any comment bellow.