---
title: Voting system similar to stackoverflow using Angularjs PHP and Mysql
date: 2019-08-05
published: true
tags: ['stackoverflow', 'php', 'mysql', 'angularjs']
series: false
cover_image: ./images/voting.png
canonical_url: false
description: "We will try to create a simple voting system app similar to StackOverflow.com using AngularJS, PHP and MySQL"
---
We will try to create a simple voting system app similar to [StackOverflow.com](http://StackOverflow.com) using AngularJS, PHP and MySQL. I will put the code to download as well as a demonstration of the end product as we approach the finishing point of the AngularJS Web App. This app will accept vote from users and store it into MySQL database using PHP.

<a href="http://demos.angularcode.com/angular-voting/" class="button green" target="_blank">Live Demo</a> 
<div class="github">
    <a href="https://github.com/itswadesh/angularcode-voting-app" rel="nofollow" target="_blank">
        <b>Voting like Stackoverflow</b>Download this project form Github
    </a>
</div>

The file structure of our app will be following

*   angular-voting/index.html \[The main file\]
*   angular-voting/ajax \[Server side php code is kept here\]
*   angular-voting/app \[The angularjs application code will be saved here\]
*   angular-voting/css \[The required stylesheet file just for styling our application using Bootstrap\]
*   angular-voting/includes \[The required configuration files like database connection infotmation, constants\]

Lets first set up the database.

Download the source code and import angular-voting.sql to your MySQL database.

The database we will be using is a simple one. We just want to keep the blog post information and the voteCount. We give the table a simple name “**posts**“.

### Posts Table

```
This contains all the posts information with voteCount.

CREATE DATABASE IF NOT EXISTS angularcode\_voting;

USE angularcode\_voting;

\-- --------------------------------------------------------

\--

\-- Table structure for table \`posts\`

\--

CREATE TABLE IF NOT EXISTS \`posts\` (

\`id\` int(11) NOT NULL AUTO\_INCREMENT,

\`title\` varchar(300) NOT NULL,

\`description\` varchar(500) NOT NULL,

\`url\` varchar(200) NOT NULL,

\`votes\` int(11) NOT NULL,

PRIMARY KEY (\`id\`)

) ENGINE\=InnoDB DEFAULT CHARSET\=latin1 AUTO\_INCREMENT\=5 ;

\--

\-- Dumping data for table \`posts\`

\--

INSERT INTO \`posts\` (\`id\`, \`title\`, \`description\`, \`url\`, \`votes\`) VALUES

(1, 'A simple AngularJS web app that converts text to url format', 'We are going to create a very simple yet powerful web app using AngularJS from Google. Our app will take any input and will convert it into URL format instantly. We will be creating a filter named clean. We can use this filter anywhere in our application like following piece of code', '[http://angularcode.com/a\-simple\-angularjs\-web\-app\-that\-converts\-text\-to\-url\-format/](http://angularcode.com/a-simple-angularjs-web-app-that-converts-text-to-url-format/)', 0),

(2, 'How to create a facebook style autocomplete using AngularJS', 'This tutorial explains how to show autocomplete results for a textbox input using AngularJS, PHP and MySQL with the help of Angular UI directive.', '[http://angularcode.com/how\-to\-create\-a\-facebook\-style\-autocomplete\-using\-angularjs/](http://angularcode.com/how-to-create-a-facebook-style-autocomplete-using-angularjs/)', \-2),

(3, 'Simple task manager application using AngularJS PHP MySQL', 'This tutorial explains how to create a simple Task Manager application using AngularJS. Here I used PHP for server side communication and MySQL for database.', '[http://angularcode.com/simple\-task\-manager\-application\-using\-angularjs\-php\-mysql/](http://angularcode.com/simple-task-manager-application-using-angularjs-php-mysql/)', 1),

(4, 'Connecting PHP to Oracle Database 10g', 'PHP is very well compatible with MySQL. But I found connecting PHP to Oracle is a pain. In my current job, my employer uses Oracle Version 10g. It uses an oracle server and an oracle client 10g software to connect to the server. I tried several ways to connect to the oracle database server using PHP.', '[http://angularcode.com/connecting\-php\-to\-oracle\-database\-10g/](http://angularcode.com/connecting-php-to-oracle-database-10g/)', 5);

[view raw](https://gist.github.com/itswadesh/e236ce5f33d39cb724d8ef6c26deb765/raw/6e5fd45c617f0cb58cd5e581bad3ee6cb92cf722/angularcode-voting-app-angular-voting.sql) [angularcode-voting-app-angular-voting.sql](https://gist.github.com/itswadesh/e236ce5f33d39cb724d8ef6c26deb765.json
```

### Get posts (php)

https://gist.github.com/itswadesh/b7839aa0f80c484c7ec67f63caff5ba9.json

### Update Post (PHP)

https://gist.github.com/itswadesh/c4a91a27b28a87e35799266768beff54.json

### app.js

Now lets move on to the angularjs file (app/app.js) which contains the little lines of code that gets the data from the server updates the view and displays the result in web browser

https://gist.github.com/itswadesh/12c9a1c7a6e89c15591a5fef8c9823bf.json

index.html

The **index.html** file which is our front end and displayed to the user

https://gist.github.com/itswadesh/a4d5178e2276156a6ad5ffb1562594a7.json