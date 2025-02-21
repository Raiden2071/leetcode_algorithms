/*
    1. Create a function called "createDatabase"
       which has no parameters
    2. Create an array called "storage" inside
       "createDatabase" with the following value:
       ["Apple", "Banana", "Carrot"]
    3. Create a function inside "createDatabase"
       called "addToDB" that takes a single argument.
       This function will push the argument on to
       the "storage" array then log out the array
    4. Create another function inside "createDatabase"
       called "clearDB" with no parameters. This function
       will clear all the elements out from the "storage"
       array (erase them all)
    5. Return an array from "createDatabase" with two values:
       [addToDB, clearDB]

    6. How would you use "createDatabase" to add values to
       then clear out the "database" (storage array inside)?
*/

const createDatabase = () => {
  var storage = ["Apple", "Banana", "Carrot"];

  const addToDB = (value) => {
    storage.push(value);
    console.log(storage);
  };

  const clearDB = () => {
    storage = [];
  };

  return [addToDB, clearDB];
};

var db1 = createDatabase();
db1[0]('Orange');
db1[0]('Rawberry');
db1[1]();
db1[0]('Rawberry');

var db2 = createDatabase();

db2[0]('Orange');
