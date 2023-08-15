# MongoDB-with-Mongoose
MongoDB with Mongoose

The purpose of this project is to demonstrate the use of Mongoose in connecting the MongoDB database with Nodejs. Mongoose is a MongoDB ODM i.e (Object database Modelling) that used to translate the code and its representation from MongoDB to the Node.js server. This project will demonstrate the CRUD Operation using Mongoose with MongoDB.

You will need to clone this project into your preferred code editor. Once cloned you will need to run "npm install" to install the dependencies. You will notice from the repository that there are 5 branches - master, createOnly, readOnly, updateOnly, & deleteOnly.

Once you are ready to begin this project, make sure you have your HyperTerminal open. Once the terminal is opened, you may run "mongod" in the terminal to have the MongoDB Database running. In the second tab of the HyperTerminal you may run "mongo" to have your databases displayed by having mongo shell open.

In your code editor, your project will begin from the master branch. Once the dependencies are installed, you can simply run "node app.js" in the terminal of your code editor. This will have your MongoDB database "fruitsDB" connected to the Nodejs server. Once this is completed, you can "CTRL + C" to end the terminal.

CREATE:
In your code editor terminal, you will need to run "git checkout createOnly" to get access to this branch. Once in this branch you can run "node app.js" in the terminal. Once this is completed you will be able to view your database and collections in the mongo shell of your HyperTerminal. If successfully completed, you will also see the message ""successfully saved all the fruits to fruitsDB" in the console of your code editor. In your HypterTerminal, enter into the mongo shell "show dbs". You will be able to see all the databases. Once you see the database "fruitsDB" you can now enter in "use fruitsDB". Once selected, you can enter in "show collections" in the mongo shell. You will now see the collections "fruits" & "people". Enter in "db.fruits.find()" and then "db.people.find". You will now be able to see the documents inserted into each collection. Once you are done you can "CTRL + C" to end the code editor terminal.

READ:
Now you can move on to the next branch, enter in "git checkout readOnly" in the code editor terminal. Once in this branch , enter in "node app.js" in the terminal. You will now be able to view all the documents in the "fruits" & "people" collection in your console. Once you are done you can "CTRL + C" to end the code editor terminal.

UPDATE:
Now you can move on the next branch, enter in "git checkout updateOnly" in the code editor terminal. Once in this branch , enter in "node app.js" in the terminal. Once successfully completed , you will see the message "Succesfully updated the document." in the console of the code editor.  You may now go back to your HyperTerminal and enter in "db.people.find()" in the mongo shell to see your document updated with the new favouriteFruit in your people collection. Once you are done you can "CTRL + C" to end the code editor terminal.

DELETE:
Now you can move on the next branch, enter in "git checkout deleteOnly" in the code editor terminal. Once in this branch , enter in "node app.js" in the terminal. Once successfully completed , you will see the messages - "Sucessfully deleted the document." & "Succesfully deleted all the document." in the console of the code editor. Now you can go back to to your HyperTerminal and enter in "db.fruits.find()" in the mongo shell. Once entered you will notice the documents with "name" property of "Apple" & "Orange" deleted from the fruits collection. Once you are done you can "CTRL + C" to end the code editor terminal.
