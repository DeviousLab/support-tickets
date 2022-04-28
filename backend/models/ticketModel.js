const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  product: {
    type: String,
    required: [true, 'Please provide a product'],
    enum: ['iPhone', 'MacBook Pro', 'MacBook Air', 'Mac Studio', 'iPad', 'AirPods', 'Apple Watch']
  },
  description: {
    type: String,
    required: [true, 'Please provide a summary of the issue'],
  },
  status: {
    type: String,
    required: true,
    enum: ['Open', 'In-Progress', 'Closed'],
    default: 'Open'
  }
},
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Ticket', ticketSchema);