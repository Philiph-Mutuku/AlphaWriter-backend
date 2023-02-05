const Note = require("../models/noteModel");
const User = require("../models/userModel");

const createNewNote = async (req, res) => {
    const { title, description, body } = req.body;
    const note = await Note.create({title: title, description: description, body: body})
      .then(() => res.status(200).json({mssg: "Succesfully sent new Note"}))
      .catch((error) => console.log(error)) 

    //res.json({mssg: note})
}

const getAllNotes = async (req, res) => {
    const notesList = await Note.find({ createdAt: -1 })
      .then (() => {console.log(notesList)})
      .catch((error) => console.log(error))
}

const getSingleNote = async (req, res) => {
    const { id } = req.params.id;

    const note = await Note.findById(id)
      .then(() => {
        res.status(200).json(note)
      })
      .catch((error) => {
        res.status(404).json({err: error})
      })
}

const updateNotes = async (req, res) => {
    const { id } = req.params.id;

    const note = User.findByIdAndUpdate(_id, req.body)
}

const deleteNote = async  (req, res) => {
    res.json({mssg: `Deleteing note witb id ${req.params.id}`})
}

module.exports = {
    createNewNote,
    getAllNotes,
    getSingleNote,
    updateNotes,
    deleteNote
}