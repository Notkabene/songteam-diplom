const {Schema, model} = require('mongoose')

const schema = new Schema({
  name: {type: String},
  surname: {type: String},
  email: {type: String, required: true, unique: true},
  password: {type: String},
  sex: {type: String, enum: ['male', 'female']},
  image: {type: String},
  // positionTeam: [{type: Schema.Types.ObjectId, ref: 'Quality'}],
  userRule: {type: String},
  birthday: {type: String}
}, {
  timestamps: true
})

module.exports = model('User', schema)