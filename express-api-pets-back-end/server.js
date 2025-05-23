const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const logger = require('morgan');
const cors = require('cors')
const PORT = process.env.PORT || 3000

const petRouter = require('./controllers/pets')
const testRouter = require('./controllers/test-jwt')
const authRouter = require('./controllers/auth')
const userRouter = require('./controllers/users')

app.use(cors({ origin: 'http://localhost:5173' }))

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.json());
app.use(logger('dev'));

// Routes go here
app.use('/pets', petRouter)
app.use('/test', testRouter)
app.use('/users', userRouter)
app.use('/auth', authRouter)

app.listen(PORT, () => {
  console.log('The express app is ready!');
});