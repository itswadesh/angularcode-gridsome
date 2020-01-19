---
title: Appointment Booking using Angularjs, Nodejs, Mongodb
date: 2019-10-20
published: true
tags: ['nodejs', 'angularjs', 'mongodb', 'appointment booking']
series: false
cover_image: ./images/simple-appointment-booking-using-angularjs.png
canonical_url: false
description: "In this tutorial, we will create a simple, real and single page Appointment Booking web application using Javascript Fullstack"
---

In this tutorial, we will create a simple, real and single page Appointment Booking web application using Javascript Fullstack or MEAN Stack (MongoDB + Express + AngualrJS + NodeJS) which can also be used as an Event Scheduler.

- The Javascript fullstack will have both Client and Server architecture and will share the same JSON (Javascript Simple Object Notation) format across Client, Server and Database.
- The code will be fast, modular and less redundant.
- We will integrate Google Material Design guidelines into our code for a better UI experience.
- We will use document based no-sql database named MongoDB

<a href="https://appointment.itswadesh.now.sh/" class="button green" target="_blank">Live Demo</a> 
<div class="github">
    <a href="https://github.com/itswadesh/simple-appointment" rel="nofollow" target="_blank">
        <b>Simple Appointment Booking - NodeJS</b>Download this project form Github
    </a>
</div>

## Installation
### Install Required Softwares
* NodeJS (http://nodejs.org) *

'NodeJS is a non blocking, event-driven javascript framework for building network based applications. This comes with Node Package Manager. (npm)'

### Install NodeJS and run node

* MongoDB (http://mongodb.org)*

"MongoDB is a Javascript based cross-platform document-oriented NoSQL database."

### Install MongoDB and run mongod in a separate shell to keep an instance of the MongoDB Daemon running

Start the application
Open Command Prompt / Terminal and Run the following commands

npm install : Installs all required server dependencies.
bower install: Installs front-end packages required for our application.
node server: Starts the application on port 8080 (http://localhost:8080)

Open your web browser and point to http://localhost:8080

## Code
client/index.html
The starting point for our application front end.

https://gist.github.com/itswadesh/afe1d5b7daf075449f6353b797d088ec

client/app.js
It starts the angular module and links the required external dependencies.

https://gist.github.com/itswadesh/9becd9163fbca4a285575458996dbd46.json

client/customer.html
Appointment details with customer information.

https://gist.github.com/itswadesh/a06e81cc5bb81bc87f3f2891433d8552.json

client/main.css
All css files for main.html

https://gist.github.com/itswadesh/8f5826a4089a59a7ac32328dcde272cd.json

client/main.html
Application’s front end

https://gist.github.com/itswadesh/33d8779690cbe677b37e938be6025545.json

client/main.js
It implements required logics.

https://gist.github.com/itswadesh/f854f2cb80d6358b72dcd5d5ca613ae6.json

server/index.js
It creates the appointments ReST API routes.

https://gist.github.com/itswadesh/c5b2fa45931b25013e03ef851f2dfaf3.json

server/api/appointment/index.js
The appointments ReST API routes are defined here.

https://gist.github.com/itswadesh/940af7c4ef6ea84c1ebabfcf1cf19a7b.json

server/api/appointment/model.js
Defines the appointments database model.

https://gist.github.com/itswadesh/12d3c1ffca0432a8622f6d28d272d2d0.json

package.json
It carries node dependencies which are required for this application.

https://gist.github.com/itswadesh/0aa1f7b54dc22c8e68fbc7e85cc2df34.json

