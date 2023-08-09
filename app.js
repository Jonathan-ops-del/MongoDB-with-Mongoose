const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB") //name of database at the end.


const fruitSchema = new mongoose.Schema({
    name:{
      type: String,
      required:[true,"Please check your data entry, no name specified!"]
    },
    rating: {
      type:Number,
      min:1,
      max:10
    },
    review:String
  });
  
  const Fruit = mongoose.model("Fruit", fruitSchema) //collections called - fruits string - need to put singluar form.


//1) Delete Operation - Deleting documents from the fruits collection of the fruitsDB Database.


Fruit.deleteOne({name:"Apple"}, function(err){ // Method to delete a single document from the fruits Collection of the fruitsDB database.
    if(err){
      console.log(err);
    }
    else{
      console.log("Sucessfully deleted the document.");
    }
  })


  Fruit.deleteMany({name:"Orange"}, function(err){ // // Method to delete multiple documents from the fruits Collection of the fruitsDB database.
    if(err){
      console.log(err)
    }
    else{
      console.log("Succesfully deleted all the document.") 
    }
  })