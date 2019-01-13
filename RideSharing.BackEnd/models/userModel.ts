import mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },  
    isDriver: {
        type: Boolean,
    },  
    registrataionNumber: {
        type: String,
    },  
    engineNumber: {
        type: String,
    },  
    chassisNumber: {
        type: String,
    },  
});

module.exports = mongoose.model('user', UserSchema)