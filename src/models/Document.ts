import mongoose from 'mongoose'

let DocumentSchema = new mongoose.Schema({
    message: String
});

module.exports = mongoose.model("Document",DocumentSchema);