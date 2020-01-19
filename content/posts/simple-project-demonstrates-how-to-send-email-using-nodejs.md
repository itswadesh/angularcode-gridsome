---
title: Simple project demonstrates how to send email using Nodejs
date: 2019-08-06
published: true
tags: ['nodejs', 'email']
series: false
cover_image: ./images/send-email-using-angularjs-nodejs.png
canonical_url: false
description: "Scenario-1: We wish our users to be able to communicate to the admin, author, managers of our website."
---
Sometimes we may need an email form or contact form for our website

Scenario-1: We wish our users to be able to communicate to the admin, author, managers of our website.

Scenario-2: We wish to send emails to our users regarding

- Signup success
- Forgot password
- Reset password success
- Invalid activity

<!-- <a href="http://mail.codenx.com/" class="button green" target="_blank">Live Demo</a>  -->
<div class="github">
    <a href="https://github.com/itswadesh/sendmail-nodejs" rel="nofollow" target="_blank">
        <b>Send email using NodeJS</b>Download this project form Github
    </a>
</div>

## Run

Download and extract the zip file
Open command prompt and browse to the extracted folder
write the command `node .`
Open Chrome browser and point to http://localhost:8080/

## Tutorial

We will be creating a simple AngularJS web application which will send an email to the website administrator when any users wish to contact regarding any issue.
We are going to implement the above functionality in just 3 steps

Craft the user interface (front end client side)
Configure the email client (Sendgrid)
Create the server and make the server talk to Sendgrid and AngularJS frontend (Using NodeJS)

### Step-1
Let’s build the user interface using google’s material design and our friend AngularJS

Let’s use the material design CSS library provided by materializecss.com

### Step-2
To send email we will use some node libraries

```
nodemailer
nodemailer-sendgrid-transport
```

For this we need to create a sendgrid account and generate a api key and use in index.js

Project Structure

client
– style css
– app.js
– index.html
- index.js
- package.json

### index.js (NodeJS)

https://gist.github.com/itswadesh/4142a06362689cd4deefbbd1bf0a9694

package.json

https://gist.github.com/itswadesh/d675dd64904725e7a24858fa9911ec74

index.html

https://gist.github.com/itswadesh/6d12de6fd8b3d3ec1fd5a046eac5b9c9

app.js (AngularJS)

https://gist.github.com/itswadesh/33d0755624e1a24e618dd3eba95c3a2a

