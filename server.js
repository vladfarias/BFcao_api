const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path:'./.env'});

const app = require('./app');
const DB = process.env.DATABASE.replace(
    '<PASSWORD>', 
    process.env.DATABASE_PASSWORD)

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(()=>{
    // console.log(con.connection); con is a parameter
    console.log('DB conection sucessfull!');
});

const port = process.env.PORT || 8000;
app.listen(port, ()=>{
    console.log(`App running on port ${port}...`);
});