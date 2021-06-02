const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password:{
    type:String,
    required:true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  address: [{
    zipcode: {
      type: 'String',
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
  }],
});
module.exports = mongoose.model('User', Schema);
