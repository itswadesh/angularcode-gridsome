---
title: How to create a facebook style autocomplete using Angularjs
date: 2019-06-30
published: true
tags: ['facebook', 'autocomplete', 'mysql', 'angularjs']
series: false
cover_image: ./images/facebook-type-autocomplete-using-php-mysql-angularjs.jpg
canonical_url: false
description: "This tutorial explains how to show autocomplete results for a textbox input using AngularJS, PHP and MySQL with the help of Angular UI directive."
---
This tutorial explains how to show autocomplete results for a textbox input using AngularJS, PHP and MySQL with the help of Angular UI directive.

<a href="http://demos.angularcode.com/autocomplete/" class="button green" target="_blank">Live Demo</a> 
<a href="https://www.dropbox.com/s/b99t820x3cgiwx7/angularcode_autocomplete.zip?dl=0" rel="nofollow" target="_blank">
    <b>Facebook type autocomplete</b>Download this project
</a>

To achieve the desired autocomplete functionality, We will be using Bootstrap UI directive library for AngularJS.

Angular UI Directives: A library of essential bootstrap components written in pure AngularJS by AngularUI Team.

Its easy to set up  
Download and include the js file in **index.html**.

``` html
<script src="js/angular.min.js" type="text/javascript"></script>  
<script src="js/ui-bootstrap-tpls-0.9.0.js"></script>  
<script src="app/app.js" type="text/javascript"></script>  
```

Inject the dependency on the ui.bootstrap module and get the data from the database using $ajax at your **app.js** file

``` javascript
    var app = angular.module('myApp', ['ui.bootstrap']);
    app.controller('autocompleteController', function($scope, $http) {  
        getCountries(); // Load all countries with capitals  
        function getCountries(){  
            $http.get('ajax/getCountries.php').success(function(data){  
                $scope.countries = data;  
            });  
        };  
    });
```

Create a custome template to hold the output at your **autocomplete.html** file

``` html
<script id="customTemplate.html" type="text/ng-template"><a><span bind-html-unsafe="match.label | typeaheadHighlight:query"><i>({{match.model.capital}})</script>  
```    

Bind the typeahead directive into your input field.

``` html
<input class="form-control" ng-model="selectedCountries" placeholder="Search Countries" style="width:350px;" type="text" typeahead="c as c.country for c in countries | filter:$viewValue | limitTo:10" typeahead-min-length="1" typeahead-on-select="onSelectPart($item, $model, $label)" typeahead-template-url="customTemplate.html"></input>  
```    

Import the countries.sql into your database which contains country names and capitals

The getCountries.php file which gets all the countries with capitals from MySQL database

``` php
<?php require_once '../includes/config.php';

$query="select distinct c.country, c.capital from countries c order by 1";
$result = $mysqli-?>
query($query) or die($mysqli->error.__LINE__);

$arr = array();  
    if($result->num_rows > 0) {  
    while($row = $result->fetch_assoc()) {  
    $arr[] = $row;  
    }  
    }

# JSON-encode the response  
echo $json_response = json_encode($arr);  
?>  
```

This will populate the countries scope, Which in turn binds to our Search Countries input