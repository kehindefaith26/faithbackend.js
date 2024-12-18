// Import MongoClient from the MongoDB package
const { MongoClient } = require('mongodb'); 

//Define the MongoDB connection URl\
const url = 'mongodb://127.0.0.1:27017';

//Create a new MongoClient instance 
const client = new MongoClient(url);

async function connectToDatabase() {
    try {
        // Connect to the MongoDB server
        await client.connect();
        console.log('Connected to MongoDB!');
        } catch (error) {
            //Handle connection errors
            console.error('Connection error: ', error.message);
        } finally {
            //Always close the connection when done
            await client.close();
        }
}

connectToDatabase();

//Create a New User:
async function createUser() {
    const database = client.db('testDB'); //select the database
    const users = database.collection('users'); //select the collection

    //Insert a new document into the collection
    const result = await users.insertOne({name: 'Alice', age:25 });
    console.log('User created with ID:', result.insertedId);
}

//Read users
async function getUsers() {
    const database = client.db('testDB'); //select the database
    const users = database.collection('users'); //select the collection

    //Fetch all documents in the 'users' collection
    const results = await users .find({}).toArray();
    console.log('Users: ', results);
}

//update a users's age
async function updateUser() {
    const database = client.db('testDB'); //select the database
    const users = database.collection('users'); //select the collection

    //update the age of a user with a specific name 
    const result = await users.updateOne({name: 'Alice'}, {$set: {age: 26 }});
    console.log('Documents Updated: ', result.modifiedCount);
}

//Delete a user 

async function deleteUser() {
    const database = client.db('testDB'); //select the database
    const users = database.collection('users'); //select the collection

    //Remove a user by name 
    const result = await users.deleteOne({name: 'Alice'}, {$set: {age: 26 }});
    console.log('Documents deleted: ', result.deletedCount);
}

const Joi = require('joi'); //import Joi library for validation

//What is CRUD?
//CRUD stands for:

//Create – Adding new records.
///Read – Retrieving existing records.
//Update – Modifying existing records.
//Delete – Removing records.


