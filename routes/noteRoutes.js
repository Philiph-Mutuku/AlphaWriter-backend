const express = require('express');
const { getAllNotes, getSingleNote, updateNotes, createNewNote, deleteNote } = require('../controllers/noteControllers');
const Note = require('../models/noteModel');

const notesRouter = express.Router();

//Get all the user's notes
notesRouter.get('/', getAllNotes);

//Getting a single note(Search)
notesRouter.get('/:id', getSingleNote);

//Updating a note
notesRouter.patch('/:id', updateNotes);

//Creating a new note
notesRouter.post('/', createNewNote);

//Deleting a note
notesRouter.delete('/:id', deleteNote)

module.exports = notesRouter;