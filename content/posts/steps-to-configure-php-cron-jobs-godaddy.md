---
title: Steps configuring PHP Cron Jobs - Godaddy
date: 2019-06-06
published: true
tags: ['godaddy', 'php', 'cron jobs']
series: false
cover_image: ./images/setup-php-cron-jobs-at-godaddy.png
canonical_url: false
description: "You need to use the following path settings for different versions of PHP"
---

Setting up Cron Jobs at Godaddy is a bit tricky

As per Godaddy documentation, the Godaddy hosting does not support the Cron Jobs for PHP v5.4

You need to use the following path settings for different versions of PHP

<table><tbody><tr><th>Hosting type</th><th>PHP version</th><th>Path</th></tr><tr><td>cPanel</td><td>5.5</td><td>/usr/bin/php</td></tr><tr><td>cPanel</td><td>5.4</td><td>/usr/local/bin/php</td></tr><tr><td>Plesk</td><td>5.4</td><td>/web/cgi-bin/php5_4</td></tr><tr><td>Web &amp; Classic</td><td>5.3</td><td>/web/cgi-bin/php5_3</td></tr><tr><td>Web &amp; Classic</td><td>5.0-5.2</td><td>/web/cgi-bin/php5</td></tr><tr><td>Web &amp; Classic</td><td>4</td><td>/web/cgi-bin/php</td></tr></tbody></table>

<br/>
Hence we need to choose a PHP version from the available (5.3 and 5.5)

Example (for PHP v 5.5)
```
/usr/bin/php '$HOME/public_html/test/mail/index.php'
```
