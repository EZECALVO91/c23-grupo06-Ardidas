require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');
const userLoggedMiddleware = require('./middleware/userLoggedMiddleware');
const cors = require('cors');



const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products')
// const dashReactRouter = require('./routes/dashboardReact')

//APIS
const usersApiRouter = require('./routes/APIS/userApis');
const productsApiRouter = require('./routes/APIS/productsApis');
const dashboardApiVite = require('./routes/APIS/dashboardApis');

const app = express();


//Para usar las apis, se instala, se requiere y se implementa cors. Esto se hace para poder comunicar dos servidores distintos
//al momento de setearlo, en el origen ponemos el servidor desde el cual hacemos el pedido a la api.
app.use(cors({
  origin: "http://localhost:8000"
}))

// view engine setup
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(methodOverride('_method'))
app.use(session({
  secret: 'Ardidas_secret', 
  resave: false,
  saveUninitialized: false
}))
app.use(userLoggedMiddleware)

/////
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
// app.use('/dashboard', dashReactRouter);

//APIS APP.USE
app.use('/api', usersApiRouter);
app.use("/api/products", productsApiRouter)
app.use("/api", dashboardApiVite);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
