const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const partnerSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  producerName: String,
  passwordHash: String,
  location: [Number],
  products: [
    {
      productName: String,
      quantity: Number,
      unit: String,
      unitPrice: Number,
      harvestDate: Date,
    },
  ],
});

partnerSchema.plugin(uniqueValidator);

partnerSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  },
});

module.exports = mongoose.model('Partner', partnerSchema);
