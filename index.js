const express = require('express');
const apiRoute = require('./router/_file')
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
app.use(cors());
const makeConnection = require('./utils/db_connection');
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.send('Fabrik Assignment API');
});

app.use('/api',apiRoute)



const port = process.env.PORT || 5000;


app.listen(port, () => {
    makeConnection().then(()=>{
        console.log(`Listening on port ${port} and database is connected`);
    }).catch((err)=>{
        console.log(err);
    });
   
});