const fs = require('fs')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Walker = require('./../models/walkerModel');
const User = require('../models/userModel');

dotenv.config({path:'./.env'});

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

// READING DATA FILE
const walkers = JSON.parse(fs.readFileSync(`${__dirname}/walker-data.json`, 'utf-8'));
const users = JSON.parse(fs.readFileSync(`${__dirname}/user-data.json`, 'utf-8'));

//IMPORT DATA INTO DB
const importData = async ()=>{

    try{
        const walkersDB =  Walker.create(walkers)
        const usersDb = User.create(users)
        await Promise.all([walkersDB, usersDb]);

        console.log('Data Successfuly created!');
        

    }catch(err) {
        console.log(err);
    }

    process.exit();
}

//DELETE ALL DATA FROM DB
const deleteData =  async ()=> {

    try{
        const walkersDBdel = Walker.deleteMany();
        const usersDBdel = User.deleteMany();
        await Promise.all([walkersDBdel, usersDBdel]);
        
        console.log('Data successfuly deleted!');
        
    }catch(err){
        console.log(err);
    }

    process.exit()
}

if(process.argv[2] === '--import'){
    importData();
}else if (process.argv[2] == '--delete'){
    deleteData();
};
