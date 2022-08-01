const {Schema, model} = require('mongoose')

const schema = new Schema({
  title: {type: String},
  metronome: {type: String},
  download: {type: String},
  language: {type: String},
  text: {type: String},
  chords: {type: String},
  linksVideo: [{type: String}],
  isFavorite: {type: Boolean},
  isConcert: {type: Boolean}
}, {
  timestamps: true
})

module.exports = model('Song', schema)