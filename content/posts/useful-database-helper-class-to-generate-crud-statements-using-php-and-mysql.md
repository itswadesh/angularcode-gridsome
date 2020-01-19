---
title: Useful database helper class to generate CRUD statements using PHP and Mysql
date: 2019-07-12
published: true
tags: ['rest', 'php', 'angularjs', 'crud']
series: false
cover_image: ./images/crud-using-restful-webservice-with-angularjs.png
canonical_url: false
description: "This database helper class generate the CRUD statements dynamically and always output the response in a standard format. Hence reducing the recurring tasks load on programmer"
---
For my AngularJS applications I use PHP as my server side language which mainly interacts with the MySQL or Oracle database. I need to created a database helper class using PHP to collect all recurring database operations into a single class, so that we can easily use it whenever we need to select, insert, update or delete record from database.

This database helper class generate the CRUD statements dynamically and always output the response in a standard format. Hence reducing the recurring tasks load on programmer. This also makes bug tracking task easy as everything stores in a central location.

<div class="github">
    <a href="https://github.com/itswadesh/angularcode-database-helper-php" rel="nofollow" target="_blank">
        <b>PHP-MySQL CRUD</b>Download this project form Github
    </a>
</div>
**I thought about sharing my work. I hope you all like it.**

### Features:

*   Well tested code.
*   Secured against SQL injections by using PHP Data Objects(PDO) and Prepared Statements.
*   Always returns objects which you can directly use to inform the user.
*   Includes proper error handling and information broadcast.

The Framework:
--------------

Mainly in SQL database we use the following 4 operations to manage our data (DML Operations)  
C – Create  
R – Read  
U – Update  
D – Delete

R – Read: The following is a simple read or select operation in SQL

`select * from customers;`

Now we will generate similar select statement and return the selected data using the followin helper function

https://gist.github.com/itswadesh/89edd2a3d45861ee35a2bfbbdc698d38.json

C – Create : The following is a simple create or insert operation in SQL

`insert into customers(name,email) values('Angular Code', 'admin@angularcode.com');`

After this operation we need to return the caller function the proper data with any associated success or error message. To handle those recurring tasks these CRUD modules will be helpful for you. That’s why i named this databaseHelper(dbHelper) class.

For insert operation we need the table name, the values to insert and mandatory columns

https://gist.github.com/itswadesh/53fe2a38ca3cbf9e311253010b07616f.json

U – Update : Following is a simple update operation in SQL where we update email of the user having id 170

`update customers set email = 'info@angularcode.com' where id = 170`

For update operation we need the table name, the columns names and the corresponding values to update, the condition on which the update will occure on a record

https://gist.github.com/itswadesh/b295e19cb9fcb3d3e36b60b3fb7573b8.json

D – Delete: Following is a simple delete operation in SQL

`delete from customer where id='170'`

For delete operation we need the table name and the condition on which the delete will occure. In this case the where clause or condition of delete is mandatory otherwise all records will be deleted from database. Hence we will run the delete script only if atleast one condition is specified.

https://gist.github.com/itswadesh/05fc73e037042f5d5e21eb1c0186f0c9.json

For any application, data is always essential. So to protect and validate our data we have to sanitise it both at the client side(for speed and instant help to the user) and server side(for better security). Here comes the module verifyRequiredParams();

https://gist.github.com/itswadesh/752d5e8c3ab00b5f5c56554640a9e7a0.json

#### How to use:

Download the zip file from the download link provided above. Import the customer\_php.sql file into your database

Add your database settings to the file “config.php”

     define('DB_USERNAME', 'root');  
     define('DB_PASSWORD', '');  
     define('DB_HOST', 'localhost');  
     define('DB_NAME', 'angularcode_auth');  
    

Following is the template of how to use it

*   `select(table name, where clause as associative array)`
*   `insert(table name, data as associative array, mandatory column names as array)`
*   `update(table name, column names as associative array, where clause as associative array, mandatory columns as array)`
*   `delete(table name, where clause as array)`

Here are example methods

     $rows = $db->select('customers_php',array());  
     $rows = $db->select('customers_php',array('id'=>171));  
     $rows = $db->insert('customers_php',array('name' => 'Ipsita Sahoo', 'email'=>'ipi@angularcode.com'), array('name', 'email'));  
     $rows = $db->update('customers_php',array('name' => 'Ipsita Sahoo', 'email'=>'email'),array('id'=>'170'), array('name', 'email'));  
     $rows = $db->delete('customers_php', array('name' => 'Ipsita Sahoo', 'id'=>'227'));  
    

Next tutorial i will create a simple AngularJS application and show you the power of these database helper functions used in a real world app.