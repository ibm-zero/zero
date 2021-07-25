const ordersRouter = require('express').Router();
const Order = require('../models/order');

ordersRouter.post('/', async (request, response) => {
    const body = request.body;

    const order = new Order({
      order: [
        {
          productName: body.productName,
          quantity: body.quantity,
          unit: body.unit,
          unitPrice: body.unitPrice,
          harvestDate: body.harvestDate,
        },
      ],
      groceryDate: body.groceryDate,
      totalPrice: body.totalPrice,
      user: body.userId,
      partner: body.partnerId,
    });

    const savedOrder = await order.save();

    response.json(savedOrder);
});