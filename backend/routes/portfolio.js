const router = require('express').Router();
const { request, response } = require('express');
const res = require('express/lib/response');
const Portfolio = require('../models/Portfolio');

//Create
router.post('/', async (request, response) => {
    const portfolio = new Portfolio({
        title: request.body.title,
        description: request.body.description,
    });
    try {
        const savedPortfolio = await portfolio.save();
        response.json({
            success: true,
            data: savedPortfolio
        });
    }
    catch(error) {
        response.json({
            success: false,
            message: error
        });
    }
});

//Read
router.get('/', async (request, response) => {
    try {
        const portfolio = await Portfolio.find();

        response.json({
            success : true,
            data: portfolio
        });
    }
    catch(error) {
        response.json({
            success: false,
            message: error
        });
    }
});

router.get('/:slug', async (request, response) => {
    try {
        const portfolio = await Portfolio.findOne({
            slug: request.params.slug
        });
        response.json({
            success: true,
            data: portfolio
        });
    }
    catch(error) {
        response.json({
            success: false,
            message: error
        });
    }
});

//Update
router.patch('/:slug', async (request, response) => {
    try {
        await Portfolio.updateOne({
            slug: request.params.slug
        },
        {
            title: request.body.title,
            description: request.body.description
        });

        response.json({
            success: true
        });
    }
    catch(error) {
        response.json({
            success: false,
            message: error
        });
    }
});

//Delete
router.delete('/:slug', async (request, response) => {
    try {
        const deletedPortfolio = await Portfolio.deleteOne({
            slug: request.params.slug
        });
        response.json({
            success: true,
            deleted: deletedPortfolio.deletedCount
        });
    }
    catch(error) {
        response.json({
            success: false,
            message: error
        });
    }
});

module.exports = router;