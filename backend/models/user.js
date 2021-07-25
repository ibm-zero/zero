const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  name: String,
  passwordHash: String,
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
  groceryList: [
    {
      productName: String,
      itWasBought: Boolean,
      quantity: Number,
      totalPrice: Number,
      groceryDate: Date,
    },
  ],
  location: [Number],
});

userSchema.plugin(uniqueValidator);

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  },
});

module.exports = mongoose.model('User', userSchema);
