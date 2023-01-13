const express = require('express');
const HomeServices = require('../services/home.services');

const router = express.Router();
const homeServices = new HomeServices();

const body = [
  {
    total: 1,
    results: 'Skyneta',
  },
];

router
  .get('/', async (req, res) => {
    const data = await homeServices.find();
    res.json(data);
  })

  .post('/', (req, res) => {
    console.log({ req });
    res.json(body);
  });

module.exports = router;
