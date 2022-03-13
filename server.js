const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3001;

const routes = require('./controllers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);



// const ErrorHandler = require('./error/ErrorHandler');

//making sessionn object
const sess = {
  secret: 'TravelSecret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

//calling express session midleware
app.use(session(sess));

const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });

//const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));

//app.use(routes);
app.use(require('./controllers/'));



sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
