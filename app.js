const mongoose = require('mongoose'); //npm install mongoose

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB",{useNewUrlParser: true}); //name of database at the end.


// - 1) Read Opersation - To view the fruit documents from the fruits collection from the fruitsDB database.
Fruit.find(function(err,fruits){
    if(err){
      console.lgo(err);
    } else{
      console.log(fruits); //Displays all fruits from the fruits collections of the fruitsDB Database in the console.
  
      fruits.forEach(function(fruit){
        console.log(fruit.name) // Display each individual fruits name from the fruits collections of the fruitsDB Database in the console.
      })
    }
  })

  //// - 2) Read Operation - To view the people documents from the people collection from the fruitsDB database.
  Person.find(function(err,people){
    if(err){
      console.log(err);
    } else{
      console.log(people); //Displays all people from the people collections of the fruitsDB Database in the console.
  
      fruits.forEach(function(people){
        console.log(people.name) // Display each individuals name from the peoples collections of the fruitsDB Database in the console.
      })
    }
  })