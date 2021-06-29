const express = require('express');

const {
  loginRouter, registerRouter, userRouter, homeRouter
} = require('./routes');
const { configuration } = require('./constants');

const app = express();

app.use('/', homeRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/users', userRouter);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(configuration.PORT, () => {
  console.log('localhost 3000');
});
