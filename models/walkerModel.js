const mongoose = require('mongoose');

const walkerSchema = new mongoose.Schema({

    name:{
        type: String,
        required: [true, 'A name must be informed.'],
        trim: true
    },

    email:{
        type: String,
        required: [true, 'An email must be informed'],    
        trim: true,
        unique: true
    },

    rate:{
        type: Number,
        default: 5.0
    },

    rides:{
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

    phone:{
        type: Number,
        required: [true, 'A phone must be informed'],    
        trim: true
    },

    photo:{
        type: String, 
        trim: true
    }

});

const Walker = mongoose.model('Walker', walkerSchema);
module.exports = Walker;
