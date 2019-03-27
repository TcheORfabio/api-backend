const mongoose = require('../connection');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true, unique: true },
  uuid: { type: String, required: true, unique: true },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  password: { type: String, required: true, select: false },
  phones: [{
    number: { type: String, required: true },
    ddd: { type: String, required: true },
  }],
  lastLoginAt: { type: Date, default: Date.now },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;

