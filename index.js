const express = require('express');
const app = express();
const path = require('path');

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Define the views directory
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index', {name: "Jenaro"});
});
app.get('/login', (req, res)=>{
res.render('login');

});
app.get('register', (req, res)=>
{
    res.render('register');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
