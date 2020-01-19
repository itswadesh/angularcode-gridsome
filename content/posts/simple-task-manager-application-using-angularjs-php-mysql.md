---
title: Simple task manager application using Angularjs PHP Mysql
date: 2019-09-31
published: true
tags: ['facebook', 'autocomplete', 'mysql', 'angularjs']
series: false
cover_image: ./images/task-manager.jpg
canonical_url: false
description: "This tutorial explains how to create a simple Task Manager application using AngularJS. Here I used PHP for server side communication and MySQL for database."
---
This tutorial explains how to create a simple Task Manager application using AngularJS. Here I used PHP for server side communication and MySQL for database.

<a href="http://demos.angularcode.com/taskman/" class="button green" target="_blank">Live Demo</a> 
<div class="github">
    <a href="https://github.com/itswadesh/angularcode-task-manager-app" rel="nofollow" target="_blank">
        <b>Task Manager using AngularJS PHP</b>Download this project form Github
    </a>
</div>

Our task manager app will have the following features

*   Create a new task
*   Strikeout the completed tasks
*   Option to delete any task
*   User will be able to search for tasks

### 1\. Creating MySQL Database

We will create the only table required for this project **tasks**

https://gist.github.com/itswadesh/2576e5253b6ebf5beea37227a619aa91.json

### 2\. The project structure

We will arrange the project files of our MVC framework into 5 different folders for better organisation.

**js/** – Javascript library files. e.g. angular.js  
**app/** – Our custom javascript controller files for our project  
**partials/** – Small pagelets that we wish to reuse  
**ajax/** – The .php files to communicate to server (Connect, Create, Read, Update, Delete)  
**css/** – Stylesheet files

### 3\. The Stylesheets

We will add some css for styling purpose

    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css"></link>  
    <link href="css/taskman.css" rel="stylesheet" type="text/css"></link>  
    

### 4\. Import the required javascript library

    <script src="js/angular.min.js" type="text/javascript"></script>  
    <script src="app/app.js" type="text/javascript"></script>  
    

### 5\. The Controller Code (app.js)

https://gist.github.com/itswadesh/29c1737c76e8657752e4b4e9eb50839c.json

### 6\. Our pagelet file (task.html)

https://gist.github.com/itswadesh/bcf2d3a8cb6d712860d6098319df42c2.json

### 7\. CRUD Files

#### addTask.php

https://gist.github.com/itswadesh/f32eb297f2f0a8ab573a2294d249e4db.json

#### getTask.php

https://gist.github.com/itswadesh/06bf89bc09c3e9ced3a928c27d9ffc60.json

#### updateTask.php

https://gist.github.com/itswadesh/a2483604274c05b253a37782a5254499.json

#### deleteTask.php

https://gist.github.com/itswadesh/6fd9c5bf457827fd540acdd3086c758a.json

