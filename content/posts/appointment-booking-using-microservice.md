---
title: Appointment Booking Microservice using Javascript Fullstack
date: 2020-01-12
published: true
tags: ['zeit', 'microservice', 'serverless', 'nodejs', 'angularjs', 'mongodb', 'appointment booking']
series: false
cover_image: ./images/appointment-booking.png
canonical_url: false
description: "In this tutorial, we will create a simple, real and single page Appointment Booking web application using Javascript Fullstack which can also be used as an Event Scheduler."
---

Sometime before I created an appointment booking app using AngularJS and it was huge popular amoung my readers. So I decided to re-create the same using the microservice architecture

## Features

- This reduces hosting cost
- Easy to deploy
- Superfast
- No architecture to maintain
- No softwares to install

<a href="https://appointment.itswadesh.now.sh/" class="button green" target="_blank">Live Demo</a> 
<div class="github">
    <a href="https://github.com/itswadesh/simple-appointment" rel="nofollow" target="_blank">
        <b>Simple Appointment Booking - NodeJS</b>Download this project form Github
    </a>
</div>

This time we will use MLab for MongoDB (a self hosted mongodb database as service)

## Start
1. Download now-cli `npm i -g now`
2. Clone or Download the project from github. Then just run the command `now`

Everything else will be taken care and you must see a url returned by now-cli and your app is live

## Now
Now is the service which will host our microservice. Inside now.json we define all the instructions to setup our microservice at Now server
```
{
  "name": "appointment",
  "version": 2,
  "env": {
    "MONGODB_URI": "@appointment"
  },
  "builds": [
    {
      "src": "www/**",
      "use": "@now/static"
    },
    {
      "src": "api/**/*.js",
      "use": "@now/node"
    }
  ],
  "routes": [
    {
      "src": "/",
      "dest": "www/index.html"
    },
    {
      "src": "/app.js",
      "dest": "www/app.js"
    },
    {
      "src": "/css/(.*)",
      "dest": "/www/css/$1"
    },
    {
      "src": "/js/(.*)",
      "dest": "/www/js/$1"
    },
    {
      "src": "/app/(.*)",
      "dest": "/www/app/$1"
    },
    {
      "src": "/images/(.*)",
      "dest": "/www/images/$1"
    },
    {
      "src": "/api",
      "dest": "api/*"
    }
  ]
}
```

### Code

api/appointments/index
This is the only file for our microservice. here we 
1. Define the database connection 
2. Initialize the database models
3. Execute incoming get/post requests from clients

api/appointments/model
We are using a single collection for this application named appointment. That collection definition/model is defined in this file 
```
var appointmentSchema = new mongoose.Schema({
  date: Date,
  name: String,
  phone: String,
  status: Boolean
});
```

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


