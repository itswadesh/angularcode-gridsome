---
title: A simple Angularjs web app that converts text to url format
date: 2019-05-29
published: true
tags: ['url', 'angularjs']
series: false
cover_image: ./images/angularjs-filter-text-to-url.jpg
canonical_url: false
description: "We are going to create a very simple yet powerful web app using AngularJS from Google. Our app will take any input and will convert it into URL format instantly"
---
We are going to create a very simple yet powerful web app using AngularJS from Google. Our app will take any input and will convert it into URL format instantly. We will be creating a filter named “**clean**” . We can use this filter anywhere in our application like following piece of code

```
<input class="col-md-9 search" ng-model="inputString" type="text"></input>  
<span class="col-md-9" style="color:green"> {{inputString | clean}}</span>  
```
<a href="http://demos.angularcode.com/text-to-url/" class="button green" target="_blank">Live Demo</a>
[Download](https://www.dropbox.com/s/bzo3avux451s63o/text-to-url.zip?dl=0)

As a very simple application we will require much less coding using AngularJS. We need only 1 javascript file from angularjs.org. We don’t need any kind of dependency. Hence our module injection will be blank. But we just need a AngularJS _\*filter \*_which will filter the input string and convert it into url format.

### index.html

``` html
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.15/angular.min.js"></script>  
<script>  
angular.module('myApp',[])  
.filter('clean', function(){
return function (input){  
    if(input){
    return input.toLowerCase()
    .replace(/s+/g, '-')
    .replace(/[^a-z0-9-]/ig,'');
            }
        }
});
</script>
```