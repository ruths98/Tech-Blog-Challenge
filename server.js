const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'exaHash',
  cookie: {
    // expires:10*60*1000,//10 minutes times 60 seconds times 1000 miliseconds in a second. change to 10 minutes of idle
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

//get routes
app.get('/', (req, res) => {
  res.render('home', { header: 'Tech Blog' })
})

app.get('/login', (req, res) => {
  res.render('login', { header: 'Login' })
})

app.get('/post', (req, res) => {
  res.render('post', { header: 'Post Details' })
})

app.get('/post/:id', (req,res) =>{
  res.render('postID')
})

app.get('/profile', (req, res) => {
  res.render('profile', { header: 'Your Profile' })
})

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
