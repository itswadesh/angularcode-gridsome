---
title: How to change Mysql password
date: 2019-06-02
published: true
tags: ['mysql', 'password']
series: false
canonical_url: false
description: "Here is the code to change MySQL password which is latest and works fine for me."
---

How to change MySQL password
============================

I found changing the MySQL requires a bit of strict approach (command line)

Here is the code to change MySQL password which is latest and works fine for me.

Open command window (terminal) and complete the following few commands

    update user set password=PASSWORD('YOUR_NEW_PASSWORD') where User='root';
    flush privileges;
    quit;
    

The above command resets the password of root user to _`YOUR_NEW_PASSWORD`_
