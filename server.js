const express = require('express');

const app = express();
const api = require('./backend/routes/index')

app.get('/', (request, response) => {
    response.json({
        'success' : true
    });
});

app.use('/api', api);

const ServerPORT = 3000;
app.listen(ServerPORT);