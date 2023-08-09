const mongoose = require('mongoose'); //npm install mongoose

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB",{useNewUrlParser: true}); //name of database at the end.


// 1) - Create Operation : Inserting fruit documents into the Fruits Collection of the fruitsDB database.

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
  
  const Fruit = mongoose.model("Fruit", fruitSchema) //collections called - fruits string - need to put singluar form.
  
  const apple = new Fruit({
    name:"Apple",
    rating:7,
    review:"Pretty solid as a fruit."
  })
  
  apple.save(); // Method of inserting a single document into the fruits collection of the fruitsDB database.
  

  const kiwi = new Fruit({
    name:"Kiwi",
    rating:10,
    review: "The best fruit"
  })
  
  
  const orange = new Fruit({
    name:"Orange",
    rating:4,
    review: "Too sour for me."
  })
  
  const banana = new Fruit({
    name:"Banana",
    rating:3,
    review:"Weird texture"
  })
  
  Fruit.insertMany([kiwi,orange,banana], function(err){   // Method of inserting multiple documents into the fruits collection of the fruitsDB database.
    if (err){
      console.log(err);
    }
    else{
      console.log("successfully saved all the fruits to fruitsDB")
    }
  })


// 2) Create Operation : Inserting people documents into the People Collection of the fruitsDB database.

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit:fruitSchema ///Establishing a relationship between the fruits & people collections.
  })
  

const Person = mongoose.model("Person",personSchema);

const pineapple = new Fruit ({
  name:"pineapple",
  rating:3,
  reviews:"Okay"
})

pineapple.save();

let adam = new Person ({
    name:"Adam",
    age:23,
    favouriteFruit:pineapple ///id will match fruits with people collections
  })
  

adam.save();