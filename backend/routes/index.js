const router = require('express').Router();

const portfolio = require('./portfolio');

router.get('/', (request, response) => {
    response.json({
        'success' : true
    });
});

router.use('/portfolio', portfolio);

module.exports = router;