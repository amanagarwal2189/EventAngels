const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient
var db
//express doesnt know how to handle the reading input values from th forms. Hence body parerare used to do that
const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

//////////////here's the DB////////////
/////connect to db and then start the server
MongoClient.connect("mongodb://localhost:27017/newdb", (err, database) => {
	if(!err){
		db=database
		app.listen(3000, function() {
  			console.log('listening on 3000')
		})
	}
  // ... start the server
})


//dont fret.. => is a function substitute in ES6


//read from the database
app.get('/', (req, res) => {
  res.sendFile('f:/Github/eventangels/public/index.html')
})

///entry into DB
app.post('/dummy1', (req, res) => {
 db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)
	console.log('saved to database')
    res.redirect('/readthis')
  })
})

//read from DB

app.get('/readthis',(req,res)=>{
	db.collection('quotes').find().toArray(function(err, results) {
  		console.log("Are we even reaching here?")
  		console.log(results)
  	// send HTML file populated with quotes here
  	res.redirect('/')
	})
})






