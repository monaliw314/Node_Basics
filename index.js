//Working with data-types

/*var app = require('./app')
console.log("like");
var a = 30;
var b =10;
var c = 0;
console.log(a+b+c);
console.log(app)
console.log(app.x)
console.log(app.demo())

const arr = [1,2,4,5,6,7,9,2,10];
let new_array = arr.filter(number => number%2==0)
console.log(new_array);*/

//--------------------------------------------------------
// Creating server using only nodeJS

/*const http = require('http')
http.createServer((req,res)=>{
    res.write("Hello, This is monali.");
    res.end();
}).listen(4500) */

//--------------------------------------------------------
//crete server and print dummy data from dummy file

/*const http = require('http');
const data = require('./data');
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(data));
  res.end();
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});*/

//------------------------------------------------------------
//create server and routes using express 

/*const express = require('express');
const app = express();
app.get('',(req,res)=>{
    res.send(`
        <h1>hello, This is home page</h2>
        <a href="/about">Go to about page</a>
    `);
});

app.get('/about',(req,res)=>{
    res.send(`
    <input type="text" placeholder="enter username"/>
    <button type="button">click me</button>
    <a href="/">Go to home page</a>
    `);
})

app.get('/help',(req,res)=>{
    res.send([
        {
            name: 'monali w',
            email: 'mona@abc.in'
        },
        {
            name: 'mona w',
            email: 'mona@abc.in'
        }
    ]);
})

app.listen(4000);*/

//--------------------------------------------------------
//create server and routes using static and path

const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.join(__dirname,'public');

app.use(express.static(publicPath))

app.listen(4000);

//----------------------------------------------------------