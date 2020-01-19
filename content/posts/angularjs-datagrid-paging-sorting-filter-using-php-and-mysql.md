---
title: Angularjs datagrid paging, sorting, filter using PHP and Mysql
date: 2019-07-25
published: true
tags: ['datagrid', 'php', 'mysql', 'angularjs', 'crud']
series: false
cover_image: ./images/datagrid.jpg
canonical_url: false
description: "This tutorial explains how to create a datagrid similar to ASP.NET gridview with client side paging, searching and sorting functionality using AngularJS, PHP, MySQL"
---
This tutorial explains how to create a datagrid similar to ASP.NET gridview with client side paging, searching and sorting functionality using AngularJS, PHP, MySQL. Following are links to the demo and download of the final application.

<!-- <a href="http://demos.angularcode.com/grid/" target="_blank" class="button green"> Live Demo </a>  -->
<div class="github">
    <a href="https://github.com/itswadesh/angularcode-datagrid" rel="nofollow" target="_blank">
        <b>Datagrid using AngularJS</b>Download this project form Github
    </a>
</div>

I have used angular-ui directive for the user interface of paging and some basic functionality.

While working with angularjs I found out the biggest issue using angular is it makes the Browser DOM slow while displaying huge amount of data. Hence it becomes necessary to load data partially through paging or infinite scrolling.

When we implement paging the data is divided into number of small pages. Hence the browser has to load less amount of data at one stretch. Which in turn increases the data loading speed.

### Database setup:

Download the source code and import **customers.sql** to your MySQL database.

I’ve structured the entire application into 5 different folders

### CustomersTable

This contains all the information about customers which we intend to display in our grid.

https://gist.github.com/itswadesh/848f51d7fea857590fb85d61ee2ddbe1.json

### /includes/db.php

– Contains database configuration settings

https://gist.github.com/itswadesh/23556640587931e5e4709a6dbe1a3879.json

### /ajax/getCustomers.php

– Contains php files which needs server side communication

*   Connect to MySQL database
*   Retrieve all the customers and convert into JSON format

https://gist.github.com/itswadesh/65ca5b290e842c6320fa426ad3af63db.json

### /app/app.js

– AngularJs application codes

*   Get all the customers returned by the ajax/getCustomers.php and store it in our applications scope
*   Implement paging, sorting and filter functionalities

https://gist.github.com/itswadesh/42bf44c6e4fdcecc2ef556954173cd81.json

### /css/bootstrap.css

– Adds bootstrap styles to our application

### /js

– Contains supporting javascript library files \[angular.min.js, ui-bootstrap-tpls-0.10.0.min.js\]

### index.html

The index.html file which contains the datagrid

https://gist.github.com/itswadesh/1a05c703445679e0d40877c1b5503e0a.json

I hope the above tutorial will get you started handling large MySQL data tables using AngularJS and PHP. If you have any improvement ideas or suggestions please add comments bellow.