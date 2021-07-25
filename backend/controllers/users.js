const bcrypt = require('bcrypt');
const usersRouter = require('express').Router();
const User = require('../models/user');
const Order = require('../models/order');

usersRouter.get('/', async (response) => {
  const users = await User.find({});
  response.json(users);
});

usersRouter.post('/', async (request, response) => {
  const body = request.body;

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(body.password, saltRounds);

  const user = new User({
		email: body.email,
    username: body.username,
    name: body.name,
    passwordHash,

  });

	const savedUser = await user.save();
	
  response.json(savedUser);
});

usersRouter.put('/grocery-list/:id', async (request, response) => {
  const body = request.body;

  const user = {
      groceryList: [
        {
          productName: body.productName,
          itWasBought: body.itWasBought,
          quantity: body.quantity,
          totalPrice: body.totalPrice,
          groceryDate: body.groceryDate,
        }
    ]
  };

  User.findByIdAndUpdate(request.params.id, user, { new: true })
    .then((updatedUser) => {
      response.json(updatedUser);
    })
    .catch((error) => next(error));

});

userRouter.get('/:id', async (request, response) => {
  const order = await Order.findById(id).populate('order');
  if(order){
      response.json(order);
  } else { 
      response.status(404).end();
  }
});

usersRouter.put('/order/:id', async (request, response) => {
  const body = request.body;

  const order = {
    order: body.orderId,
  }

  User.findByIdAndUpdate(request.params.id, user, { new: true })
  .then((updatedUser) => {
    response.json(updatedUser);
  })
  .catch((error) => next(error));

});

module.exports = usersRouter;
