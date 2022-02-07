const express = require('express');
const bodyParser = require('body-parser');
const api = require('./backend/routes/index')
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

app.use('/api', api);

if ( process.env.NODE_ENV === 'production') {
    //Express entrega assets de produção
    app.use(express.static('frontend/build'));
    
    //Express entrega index.html se não reconhecer a rota
    const path = require('path');
    app.get('*', (request, response) => {
        response.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    });
}

app.listen(process.env.PORT);