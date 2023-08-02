const express = require('express');
const cors = require('cors');
const { authenticateJWT } = require('./middleware/auth');
const { NotFoundError } = require('./expressError')

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const workRoutes = require('./routes/works')

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(authenticateJWT);

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/works', workRoutes);

app.get('/', async (req, res, next) => {
  return res.status(200).json({Hello: "World!"})
})

app.use((req, res, next) => {
  return next(new NotFoundError());
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: {message, status}
  });
});

module.exports = app;