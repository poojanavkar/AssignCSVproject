# AssignCSVproject
home assignment
              Document on home assignment


Note :- vscode, mongodb, postman requried


     1.  upload API

Introduction

•  The post API for inserting csv data from upload folder to local mongodb

 
 | API Title   | upload                                                      |
 |-------------|-------------------------------------------------------------|
 | URL	       | http://localhost:3001/upload                                |
 | Method      | Post                                                        |
 | URL Params  | --                                                          |
 | form-data   | file                                                        |
 | Version     | 1.0                                                         |


    How to use
•	Provide input as form data and set key to file using postman 
  and upload csv file to get data inserted from csv file to database
  
• this will create sampldata collection and customers class in database
 



     2.  postdata API

Introduction

•  The post API for inserting to upload startDate and endDate in collection 

 
 | API Title   | upload                                                      |
 |-------------|-------------------------------------------------------------|
 | URL	       | http://localhost:3001/postdata                              |
 | Method      | Post                                                        |
 | URL Params  | --                                                          |
 | body params |  startDate, endDate                                         |
 | Version     | 1.0                                                         |


    How to use
•	Provide input startDate, endDate  as row json data using postman to get data inserted






     2.  search API

Introduction

•  The search API for inserting to upload startDate and endDate in collection 

 
 | API Title   | search                                                                       |
 |-------------|------------------------------------------------------------------------------|
 | URL	       | http://localhost:3001/search?startDate=1602227005001&endDate=1602313340001   |
 | Method      | Post                                                                         |
 | URL Params  | startDate, endDate                                                           |
 | body params | --                                                                           |
 | Version     | 1.0                                                                          |


    How to use
•	Provide input startDate, endDate as url parameter using postman to get saved in file and get
  file downloaded

