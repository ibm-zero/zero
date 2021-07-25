const bcrypt = require('bcrypt');
const partnersRouter = require('express').Router();
const Parter = require('../models/parter');

partnersRouter.get('/', async (request, response) => {
    const partners = await partnersRouter.find({});
    response.json(partners);
})

partnersRouter.post('/', async (request, response) => {
    const body = request.body;

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(body.password, saltRounds);

    const partner = new Partner({
        email: body.email,
        producerName: body.producerName,
        location: body.location,
        passwordHash
    });

    const savedPartner = await partner.save();

    response.json(savedPartner);

});

partnersRouter.put('/:id', async (request, response) => {
    const body = request.body;

    const partner = {
        products : [
            {
            producerName: body.productName,
            quantity: body.quantity,
            unit: body.unit,
            unitPrice: body.unitPrice,
            harvestDate: body.harvestDate,
            }
        ],
    };

    const savedPartner = await partner.save();

    response.json(savedPartner);

});

module.exports = partnersRouter;
