const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB") //name of database at the end.


// 1) - Update Operation - Updating the people document from the people collection of the fruitsDB Database

Person.updateOne({name:"Adam"},{favouriteFruit:kiwi},function(err){ // Updating a single record from the people collection of the fruitsDB Database.
    if(err){
      console.log(err);
    }else{
      console.log("Succesfully updated the document.")
    }
  })



