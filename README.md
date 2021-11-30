# assignment-3---final-project-repository-team23
 
 # Studio 20

Studio 20 is an entrepreneurial venture providing interior design and architectural solutions remotely as well as turn-key.
This website is intended to be informational to potential customers.
Site makes use of Postman's countries now api to get various cities in state of Delhi in India where the business has provided services as of now.

```bash
var axios = require('axios');


/* GET home page. */
router.get('/', function(req, res, next) {
    
    const state = {
      "country": "India",
      "state": "Delhi"
  }
    axios.post('https://countriesnow.space/api/v0.1/countries/state/cities', state).then(resp=>{
      var delhi = resp.data;
      console.log(delhi);
      var keys = delhi.data;
      console.log(keys);
      let states = [keys[2], keys[5], keys[7], keys[10], keys[14], keys[15]]
      console.log(states[0])
      
    });

    res.render('index');
    
});

```

## Team 23
Gopika Bhardwaj

## Tools and Resources used 
Node.js, Express.js, Handlebars.js templating, HTML, CSS, JS, JSON, SQL, Sqlite
Visual Studio Code, DB Browser for SQL. Docker, Heroku, Github

## URL to host site
https://studio20.herokuapp.com/

## Start
```bash
cd assignment-2---final-project-repository-team23
npm install 
npm start
```

## Guide to accessing web application

1. Go to http://localhost:3000/.
2. Use the side bar to go down to the 'Login'. Create a new user using 'Sign Up'. 
3. To ensure strong password, kindly input password length > 8.
4. Using your credentials, login into the portal.

# Unit testing with JEST
For Assignment 2, two test cases have been implemented to verify the requirement of secure and strong passwords.

```bash
cd assignment-2---final-project-repository-team23
npm test
```
1. CORRECT USAGE 
Password length should be greater than 8.
2. ERRONEOUS USAGE 
Password length is not greater than 8.

These two test cases cover "checkPasswordLength" function (defined inside " ./helper/helperFunctions.js ")

# Future Plan 
Unit tests to check critical back-end functions - 
1. Check secure storage of passwords in the database
2. Visualization of the data resourced from an external REST API using a charting library with user being able to manipulate the data as per user's desire.
3. User able to create, delete and update their account

## ASSIGNMENT 3

# Requirement 1 - ERD 

![image](https://user-images.githubusercontent.com/89627272/141601100-fb22f845-aff3-4dce-99fd-65a17f09a3b5.png)

# Requirement 2 - Implementation of SQLITE DB 
1) Proper Configuration of Database
CRUD - Create, Retrieve, Update and Delete operations implemented for table user
Session is stored in memory store.
2) Parameterized SQL queries implemented for CRUD. Database does contain hashed passwords for authenticated users.

# Requirement 3 - RESTFul API 
Using Postman's CountriesNow API to get data for cities in state of Delhi - 
https://countriesnow.space/api/v0.1/countries/state/cities
{
    "country": "India",
    "state": "Delhi"
}

# Requirement 4 - Front-end Data Manipulation using table, chart, map, etc
Implemented a bar graph using chart.js
Bar Graph shows consistently good ratings received from Clients

            





