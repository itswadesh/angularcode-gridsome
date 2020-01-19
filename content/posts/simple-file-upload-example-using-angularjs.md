---
title: Simple file upload example using Angularjs
date: 2019-08-08
published: true
tags: ['pdf', 'php', 'mysql']
series: false
cover_image: ./images/simple-file-uploader-using-angularjs.png
canonical_url: false
description: "In this tutorial we will create an AngularJS web app that will upload the user selected file to server using nodejs. To achieve this we will use the multer node module."
---
Hi. In this tutorial we will create an AngularJS web app that will upload the user selected file to server using nodejs. To achieve this we will use the multer node module.

<!-- <a href="http://mcrud.codenx.com/media" class="button" target="_blank">Live Demo</a>  -->
<div class="github">
    <a href="https://github.com/itswadesh/simple-file-uploader" rel="nofollow" target="_blank">
        <b>Simple file upload</b>Download this project form Github
    </a>
</div>

## Installation
Open Command Prompt and navigate to the downloaded directory `simple-file-uploader`

Run the following command

```
node .
```

### Project Structure
The web application code is mainly separated into 2 parts (Client and Server)

public
    –index.html : The starting point for our application front end (Client)
    –server.js: File upload and save (Server)
code
    index.html (The starting point for our application front end)

https://gist.github.com/itswadesh/afe1d5b7daf075449f6353b797d088ec.json

#### .gitignore
It contains files that will be ignored by git to upload
.git
node_modules

#### package.json
It contains Required node packages

https://gist.github.com/itswadesh/c3a9b0152c8b7861e091cef7044c3074.json

server.js
It uploads and saves files.

https://gist.github.com/itswadesh/239dc5c1a228cd7ec821c967810fc559.json