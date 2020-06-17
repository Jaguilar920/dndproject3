////////////////
//CONSTANTS
////////////////

const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const Character = require('./models/characters.js');
require('dotenv').config();
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/project2';

/*  Middleware  */

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

/*  Mongoose  */

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
});
mongoose.connection.once('open', () => {
    console.log('mdb connect')
});

/////////////
//ROUTES
////////////

/*  get  */

app.get('/', (req, res) => {
    res.json(Character)
})

/*  create  */

app.post('/', (req, res) => {
    chars.push(req.body.Character)
    res.json(Character)
})

/*  update  */

app.put('/:index', (req, res) => {
    const {index} = req.params
    Character[index] = req.body.Character
    res.json(Character)
})

/*  delete  */

app.delete('/:index', (req, res) => {
    const {index} = req.params
    Character.splice(index, 1)
    res.json(Character)
})


app.listen(3001, () => {
    console.log('listening on port 3001')
})