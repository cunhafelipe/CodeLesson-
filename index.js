const express = require('express');
require('express-async-errors');
const app = express();
const logger = require('morgan');
const PORT = process.env.SERVER_PORT || 3000;
const userRouter = require('./src/routes/users');

app.use(logger('dev'));
app.use(express.json());
app.use(userRouter);


try {
  try {
    require('./src/database/config')();
  } catch (error) {
    console.error(error.message)
  }
  app.listen(PORT, () => {
    console.log(`Server iniciou na url http://locahost:${PORT}`);
  });
} catch (error) {
  console.error(error.message)
}
