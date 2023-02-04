const express = require('express');
const Note = require('../models/noteModel');
require('dotenv').config();

const router = express.Router();

//Get all the user's notes
router.get('/', (req, res) => {
    const Notes = Note;
    console.log(Notes);
})

//Getting a single note(Search)
router.get('/id', (req, res) => {
    
})

//Updating a note
router.get('/id', (req, res) => {
    
})

//Creating a new note
router.post('/', (req, res) => {
    const { title, description, body } = req.params.body;
    const note = Note.create({title, description, body})
      .then(() => {res.status(200).json(note)})
      .catch((error) => console.log(error))
})

//Deleting a note
router.get('/id', (req, res) => {
    
})