const mongoose = require('mongoose'); //npm install mongoose

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB",{useNewUrlParser: true}); //name of database at the end.