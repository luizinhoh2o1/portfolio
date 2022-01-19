const router = require('express').Router();

router.get('/', (request, response) => {

    const data = [
        {
            id : 1,
            name : 'My first project',
            createdAt : '2022-01-05'
        },
        {
            id : 2,
            name : 'My second project',
            createdAt : '2022-01-12'
        },
        {
            id : 3,
            name : 'My third project',
            createdAt : '2022-01-17'
        }
    ];

    response.json({
        'success' : true,
        data: data
    });
});

module.exports = router;