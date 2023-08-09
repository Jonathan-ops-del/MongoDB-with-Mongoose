const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB",{useNewUrlParser: true}); //name of database at the end.


const fruitSchema = new mongoose.Schema({
    name:{
      type: String,
      required:[true,"Please check your data entry, no name specified!"]
    },
    rating:{
      type:Number,
      min:1,
      max:10
    },
    reviews:String
  });
  
const Fruit = mongoose.model("Fruit",fruitSchema);


const strawberry = new Fruit({
    name:"Strawberry",
    rating:3,
    reviews:"Great"
  })

strawberry.save();



const personSchema = new mongoose.Schema({
    name:String,
    age:Number,
    favouriteFruit:fruitSchema
  });


const Person = mongoose.model("Person", personSchema) //behind the scenes collection of people will be created pluarl form of string - person
  


// 1) - Update Operation - Updating the people document from the people collection of the fruitsDB Database

Person.updateOne({name:"Adam"},{favouriteFruit:strawberry},function(err){ // Updating a single record from the people collection of the fruitsDB Database.
    if(err){
      console.log(err);
    }else{
      console.log("Succesfully updated the document.")
    }
  })



