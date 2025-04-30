import dotenv from 'dotenv';
dotenv.config();
import createError from 'http-errors';
import express, { json, urlencoded } from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import nunjucks from 'nunjucks';


import usersRouter from './routes/users.mjs';
import indexRouter from './routes/index.mjs';
import adminRouter from './routes/admin.mjs';
import mailRouter from './routes/mail.mjs';

const port = process.env.PORT || 3000;
const address = process.env.HOST || '0.0.0.0';

const app = express();
// Настройка Nunjucks
nunjucks.configure('views', {
  autoescape: true,
  express: app,
});
// Получаем __dirname для ES-модулей
const __dirname = dirname(fileURLToPath(import.meta.url));

// view engine setup
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'njk');
app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);
app.use('/mail', mailRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.locals.env = req.app.get('env'); // <<< добавить эту строку
  res.status(err.status || 500);
  res.render('error');
});


app.listen(port, address, () => {
  console.log(`Example app listening on http://${address}:${port}`);
});