const mongoose = require('mongoose');

const walkerSchema = new mongoose.Schema({

    name:{
        type: String,
        required: [true, 'A name must be informed.'],
        trim: true
    },

    rate:{
        type: Number,
        default: 5.0
    },

    ride:{
        type: Number,
        default: 0
    },

    longitude:{
        type: Number,
        required: [true, 'A longitude must be informed'],    
        trim: true
    },

    latitude:{
        type: Number,
        required: [true, 'A latitude must be informed'],    
        trim: true
    },

    photo:{
        type: String, 
        trim: true
    }

});

