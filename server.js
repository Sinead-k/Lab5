const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyParser = require("body-parser");
const { urlencoded } = require('body-parser');

// app.use is run every time the page is refreshed
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Welcome to Data Representation & Querying')
})

// when you go to url localhost:4000/whatever prints
app.get('/whatever', (req, res)=>{
    res.send('Hello from whatever')
})

app.get('/hello/:name', (req, res)=>{
    res.send('Hello ' +req.params.name)
})

app.get('/api/movies', (req, res)=>{
    const movies = [
        {
        "Title": "Avengers: Infinity War",
        "Year": "2018",
        "imdbID": "tt4154756",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
        "Title": "Captain America: Civil War",
        "Year": "2016",
        "imdbID": "tt3498820",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
    ];

    res.json({
        mymovies:movies
    })
})

app.get('/test', (req, res)=>{
    res.sendFile(__dirname+'/index.html');
})

app.get('/name', (req, res)=>{
    res.send('Hello ' + req.query.fname + ' ' + req.query.lname);
})

// Listens out for a post request to this URL
app.post('/name', (req, res)=>{
    res.send('POST request complete. Hello '+req.body.fname+' '+req.body.lname);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})