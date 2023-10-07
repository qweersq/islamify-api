const express = require('express');
const sequelize = require('./database');
const User = require('./Model/User');
const { status } = require('express/lib/response');
const { SuccessResponse } = require('./Utils/response');

sequelize.sync().then(() => { console.log('db is ready'); });

const app = express();

app.use(express.json());

const userRouter = require('./Routes/user');
const authRouter = require('./Routes/auth');

app.use('/users', userRouter);
app.use('/auth', authRouter);


app.listen(3000, () => {
    console.log('server running on port 3000');
});