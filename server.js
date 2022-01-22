const express = require('express');
const bodyParser = require('body-parser');
const api = require('./backend/routes/index')
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

app.get('/', (request, response) => {
    response.json({
        success : true
    });
});

app.use('/api', api);

app.listen(process.env.PORT);