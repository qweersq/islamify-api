const express = require('express');
const sequelize = require('./database');
const User = require('./Model/User');

sequelize.sync().then(() => { console.log('db is ready'); });

const app = express();

app.post('/users', async (req, res) => {
    User.create(req.body).then(() => {
        res.send('user created');
    }).catch(err => {
        res.json(err);
    });
});

app.get('/users', async (req, res) => {
    User.findAll().then(() => {
        res.send('TESTT');
    }).catch(err => {
        res.json(err);
    });
} );

app.listen(3000, () => {
    console.log('server running on port 3000');
});