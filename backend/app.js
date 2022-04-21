const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const userRoutes = require('./routes/user');


app.use(express.json());
app.use(bodyParser.json());

// Evite les bloquage CORS en autorisant les entêtes :
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Initialisation des routes Post et Users :
app.use('/api/auth', userRoutes);

module.exports = app;