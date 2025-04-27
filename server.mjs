import createError from 'http-errors';
import express, { json, urlencoded } from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import pug from 'pug';

import usersRouter from './routes/users.mjs';
import indexRouter from './routes/index.mjs';
import adminRouter from './routes/admin.mjs';

const port = process.env.PORT || 3000;
const address = process.env.HOST || '0.0.0.0';

const app = express();

// Получаем __dirname для ES-модулей
const __dirname = dirname(fileURLToPath(import.meta.url));

// view engine setup
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, address, () => {
  console.log(`Example app listening on http://${address}:${port}`);
});