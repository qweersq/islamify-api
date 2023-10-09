const express = require('express');
const sequelize = require('./database');
require('dotenv').config();

sequelize.sync().then(() => { console.log('db is ready'); });

const app = express();

app.use(express.json());

const userRouter = require('./Routes/user');
const authRouter = require('./Routes/auth');

app.use('/users', userRouter);
app.use('/auth', authRouter);


app.listen(process.env.PORT, () => {
    console.log('server running on port 5001');
});