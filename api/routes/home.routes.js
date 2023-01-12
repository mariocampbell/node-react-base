const express = require('express');
const HomeServices = require('../services/home.services');

const router = express.Router();
const homeServices = new HomeServices();

router
  .get('/', async (req, res) => {
    const data = await homeServices.find();
    res.json(data);
  })

  .post('/', (req, res) => {
    console.log('request', req);
    res.json({
      data: [],
    });
  });

module.exports = router;
