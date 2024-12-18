//HTTP (HyperText Transfer Protocol)
//HTTP Request: Includes:

//HTTP Methods:
//GET: Retrieve data from the server.
//POST: Send data to the server.
//PUT: Update existing data.
//DELETE: Remove data.
//URL: (Uniform Resource Locator) The address of the resource.

//HTTP Response: Includes:
//Status Code: A three-digit code indicating the outcome (e.g., 200 OK, 404 Not Found, 500 Internal Server Error).
//Headers: Metadata about the response.
//Body: The data returned to the client.

//fetch("http://api.example.com/")
//.then(response => response.json())
//.then(data => console.log(data));

//fetch('http://api.example.com/',{
//    method: 'POST',

//    headers: {
//        'Content-Type': 'application/json'
//    },

//    body: JSON.stringify({username: 'JohnDoe' , password: '12345'})
   
//})

 //   .then(response => response.json())

   // .then(data => console.log(data)); //

//Node.js is a javascript runtime built on chrome's V8 engine

//const fs = require('fs');
//fs.readFile('example.txt', 'utf8', (err,data) => {
//    if (err) {
 //       console.error(err);
  //      return;
  //  }
  //  console.log(data);
//});

const promise = new Promise((resolve, reject) => {
    if (successCondition){
        resolve("Operation Successful");
    } else {
        reject("Operation Failed");
    }
});

//.then() and .catch() are used to handle the promise's outcome.