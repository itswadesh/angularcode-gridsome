---
title: Generate PDF using PHP from MySQL database
date: 2019-08-08
published: true
tags: ['PDF', 'PHP', 'MySQL']
series: false
cover_image: ./images/generate-pdf-from-mysql-database.png
canonical_url: false
description: "We will discuss, how to generate a simple PDF file from your MySQL database using PHP. For this purpose we will use the popular PHP library FPDF"
---
In this post I will explain you how to generate a simple PDF file from your MySQL database using PHP. For this purpose we will use the popular PHP library FPDF which will enable us to generate the PDF file with the content and ourput format we desire.

<a href="/" class="button">Live Demo</a> <a href="/" class="button green">Download</a>
- Step-1: Get the data from MySQL database into the page
- Step-1: Download the FPDF library from fpdf.org
- Step-2: Copy the fpdf.php file into your application folder
- Step-3: Use the fpdf library like so

books.sql

https://gist.github.com/itswadesh/ed9a468d4919192498b4f09c28f885da.json

index.php

https://gist.github.com/itswadesh/851dc7764c5db5bde11551d459b28dd5.json

database.php

https://gist.github.com/itswadesh/dbf27ce1ea3a34f027124526d0661412.json

