const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({

    name:{
        type: String,
        // required: [true, 'A dog name must be informed'],    
        trim: true
    },

    breed:{
        type: String,
        // required: [true, 'A dog breed must be informed'],
        trim: true
    },

    age:{
        type: Number,
        // required: [true, 'A dog age must be informed'],
        trim: true
    },

    sex:{
        type: String,
        // required: [true, 'A dog sex must be informed'],    
        trim: true
    },

    photo:{
        type: String,
        trim: true
    },

});


const userSchema = new mongoose.Schema({

    name:{
        type: String,
        required: [true, 'A name must be informed'],    
        trim: true
    },

    email:{
        type: String,
        required: [true, 'An email must be informed'],    
        trim: true,
        unique: true
    },

    password:{
        type: String,
        required: [true, 'A password must be informed'],    
        trim: true
    },

    zipcode:{
        type: String,    
        trim: true
    },

    adress:{
        type: String,
        // required: [true, 'An adress must be informed'],    
        trim: true
    },

    latitude:{
        type: Number,
        // required: [true, 'A latitude must be informed'],    
        trim: true
    },

    longitude:{
        type: Number,
        // required: [true, 'A longitude must be informed'],    
        trim: true
    },

    phone:{
        type: Number,
        //required: [true, 'A phone must be informed'],    
        trim: true
    },

    photo:{
        type: String, 
        trim: true
    },

    dogs: [dogSchema]
});

const User = mongoose.model('User', userSchema);
module.exports = User;
