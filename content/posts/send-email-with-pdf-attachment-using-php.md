---
title: Send email with PDF attachment using PHP
date: 2019-10-09
published: true
tags: ['php', 'pdf', 'email']
series: false
cover_image: ./images/send-email-with-pdf-attachment-using-php.png
canonical_url: false
description: "In this tutorial we will query the MySQL database to get the updated data from our table and email the data to the desired email as PDF attachment."
---

Sometimes we may need to send email from our website to the client with some attachment. In this tutorial we will query the MySQL database to get the updated data from our table and email the data to the desired email as PDF attachment.

<a href="http://demos.angularcode.com/php-send-mail-with-attachment/" class="button green" target="_blank">Live Demo</a> 
<div class="github">
    <a href="https://github.com/itswadesh/php-send-mail-with-attachment" rel="nofollow" target="_blank">
        <b>PHP Send Email</b>Download this project form Github
    </a>
</div>

For this we will use

- AngularJS [For front end]
- PHP [To query the database and send email]
- MySQL [The database]
- fPDF library [This will generate the PDF for us]
- SendGrid [This helps us sending the email in a better way]

## code

index.html

https://gist.github.com/itswadesh/994788058c02bbca2d7e0aef5d4377b6.json

books.sql

https://gist.github.com/itswadesh/77fed995324767611475c1eedc6bf446.json

app.js

https://gist.github.com/itswadesh/6298b0f37b768ebbfcd7904b5baeb8fa.json

config.php

https://gist.github.com/itswadesh/f6c2e3e78483898627a0c3934b9de2a0.json

database.php

https://gist.github.com/itswadesh/994788058c02bbca2d7e0aef5d4377b6.json

index.php

https://gist.github.com/itswadesh/cdaa68c247f34842b8799f261f67f859.json

sendgrid.php

https://gist.github.com/itswadesh/b7440faa301c8f324fe9d2380969162d.json