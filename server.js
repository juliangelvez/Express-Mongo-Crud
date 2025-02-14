//console.log("hola!");


const express = require('express');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: 'http://localhost:8088'
}

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended:true}));

const db = require('./app/models')
db.mongoose
.connect(db.url,{
    useNewUrlParser: true,
    useUnifiedTopology : true,
})
.then(() => {
    console.log('DB connection succesfully');    
})
.catch(err => {
    console.log('DB connection not succesfully');
    process.exit();
});

app.get('/', (req, res) => {
    res.json({message: 'Hello there'})
});

const PORT =  process.eventNames.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`)   
});