const express = require('express'); 
const app = express(); 
const routeTest = require('./routes/routeTest'); 
const mongoose = require('mongoose'); 

app.use('/api/v1/', routeTest); 

mongoose.connect(
    'mongodb+srv://adimin:admin@cluster0.nakegvh.mongodb.net/?retryWrites=true&w=majority', 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        dbName: 'testDB', 
    }
).then(() => {
    console.log('Database Connection is Ready...'); 
    app.listen(8080); 
    console.log('Server Listening on Port 8080...'); 
}).catch((err) => {
    console.log(err); 
}); 

/* app.get("/users/:userId/books/:bookId", (req,res) => {
    res.send(req.params); 
}); 

app.listen(8080);  */