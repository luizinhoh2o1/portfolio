const router = require('express').Router();
const portfolio = require('./portfolio');
require('../db/mongoConnection');

router.get('/', (request, response) => {
    response.json({
        success : false,
        message : 'Please, do not call /api, it is for our server.'
    });
});

router.use('/portfolio', portfolio);

module.exports = router;
