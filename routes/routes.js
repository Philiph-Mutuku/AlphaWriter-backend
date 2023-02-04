const express = require('express');
const { getAllNotes, getSingleNote, updateNotes, createNewNote, deleteNote } = require('../controllers/noteControllers');
const Note = require('../models/noteModel');
require('dotenv').config();

const router = express.Router();

//Get all the user's notes
router.get('/', getAllNotes);

//Getting a single note(Search)
router.get('/:id', getSingleNote);

//Updating a note
router.patch('/:id', updateNotes);

//Creating a new note
router.post('/', createNewNote);

//Deleting a note
router.delete('/:id', deleteNote)

module.exports = router;