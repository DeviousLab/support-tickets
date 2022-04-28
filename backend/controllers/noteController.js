const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Ticket = require('../models/ticketModel');
const Note = require('../models/noteModel');

const getNotes = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }
  const ticket = await Ticket.findById(req.params.ticketId);
  if (ticket.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error(`Tickets can only be accessed by the user who created them ${ticket.user.toString()} and ${req.user.id}`);
  }
  const notes = await Note.find({ ticket: req.params.ticketId });
  res.status(200).json(notes);
});

const createNote = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }
  const ticket = await Ticket.findById(req.params.ticketId);
  if (ticket.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error(`Tickets can only be accessed by the user who created them ${ticket.user.toString()} and ${req.user.id}`);
  }
  const note = await Note.create({ 
    ticket: req.params.ticketId, 
    text: req.body.text,
    isStaff: false,
    user: req.user.id
  });
  res.status(200).json(note);
});

module.exports = {
  getNotes,
  createNote
}