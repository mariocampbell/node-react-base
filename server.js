const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

const webpack = require('webpack');
const webpackDev = require('webpack-dev-middleware');
const routerApi = require('./api/routes');
const config = require('./webpack.config');

// middlewares
app.use(express.json());
app.use(express.static('public'));
app.use(webpackDev(webpack(config)));

// routes api
routerApi(app);
// routes client
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
