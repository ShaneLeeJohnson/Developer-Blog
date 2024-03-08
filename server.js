const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const isAuthenticated = require('./utils/auth');

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/dashboard', isAuthenticated, (req, res) => {
    res.render('dashboard');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/signup', (req, res) => {
    res.render('signup');
})

app.listen(PORT, () => console.log('Now listening'));