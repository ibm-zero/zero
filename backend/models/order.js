const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  order: [
    {
      productName: String,
      quantity: Number,
      unit: String,
      unitPrice: Number,
      harvestDate: Date,
    },
  ],
  groceryDate: Date,
  totalPrice: Number,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  partner: { type: mongoose.Schema.Types.ObjectId, ref: 'Partner' },
});

orderSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Order', orderSchema);
