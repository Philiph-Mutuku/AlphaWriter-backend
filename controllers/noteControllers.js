const { default: mongoose } = require("mongoose");
const Note = require("../models/noteModel");

const createNewNote = async (req, res) => {
    const { title, description, body } = req.body;
    const note = await Note.create({title: title, description: description, body: body})
      .then(() => res.status(200).json({mssg: "Succesfully sent new Note"}))
      .catch((error) => console.log(error)) 

    //res.json({mssg: note})
}

const getAllNotes = async (req, res) => {
    const notesList = await Note.find({}).sort({createdAt: -1})
    
    res.status(200).json(notesList)
}

const getSingleNote = async (req, res) => {
    const { id } = req.params;

    const note = await Note.findById(id)
    res.status(200).json(note)
}

const updateNotes = async (req, res) => {
    const { id } = req.params;

    const note = await Note.findByIdAndUpdate(id)

    res.status(200).json(note);
}

const deleteNote = async  (req, res) => {
  const { id } = req.params;

  const note = await Note.findByIdAndDelete(id)
  res.status(200).json({mssg: `Succesfully deleted note ${id}`})
}

module.exports = {
    createNewNote,
    getAllNotes,
    getSingleNote,
    updateNotes,
    deleteNote
}