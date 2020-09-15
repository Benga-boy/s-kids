const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, trim: true },
  date: { type: Date, required: true },
  time: { type: String },
  longitude: { type: String },
  latitude: { type: String },
  image: { type: String, required: true }
}, {
  timestamps: true
})

eventSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('Event', eventSchema)