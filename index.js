const express = require('express');
const app = express();

//express doesnt know how to handle the reading input values from th forms. Hence body parerare used to do that
const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))


app.listen(3000, function() {
  console.log('listening on 3000')
})


//dont fret.. => is a function substitute in ES6
app.get('/', (req, res) => {
  res.sendFile('f:/Github/eventangels/public/index.html')
})

app.post('/dummy1', (req, res) => {
  console.log("Form submitted");
})