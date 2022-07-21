const {Schema, model} = require('mongoose')

const schema = new Schema({
  name: {type: String},
  surname: {type: String},
  oldSurname: {type: String},
  email: {type: String, required: true, unique: true},
  password: {type: String},
  sex: {type: String, enum: ['male', 'female']},
  image: {type: String},
  userRule: {type: String},
  birthday: {type: Number}
}, {
  timestamps: true
})

module.exports = model('User', schema)