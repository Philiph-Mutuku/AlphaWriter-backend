const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const noteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
})

const Note = new mongoose.model('Note');
module.exports = Note;