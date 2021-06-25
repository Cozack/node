const express = require('express');
const expressHbs = require('express-handlebars');
const path = require('path');
const fs = require('fs/promises');

const usersPath = path.join(__dirname,'users.json');
let error = '';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'static')));

app.set('view engine', '.hbs');
app.engine('.hbs', expressHbs({
    defaultLayout:false
}));
app.set('views', path.join(__dirname, 'static'));

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/users', async (req, res) => {
    const users = await fs.readFile(usersPath);
    res.render('users', {users: JSON.parse(users)});
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', async (req, res) => {
    const users = await fs.readFile(usersPath);
    const { email, password } = req.body;
    const foundUser = JSON.parse(users).find(user => user.email === email && user.password === password);

    if (!foundUser) {
        error = 'please register';
        res.redirect('/error');
        return;
    }
    res.redirect(`/users/${foundUser.id}`);
});

app.get('/users/:userId', async (req, res) => {
    const { userId } = req.params;
    const users = await fs.readFile(usersPath);
    const foundUser = JSON.parse(users).find(user => user.id === +userId);

    res.render('user', foundUser );
})

app.get('/error', (req, res) => {
    res.render('error', { error });
});

app.get('/registration', (req, res) => {
    res.render('registration');
});

app.post('/registration', async (req, res) => {
    const users = await fs.readFile(usersPath);
    const  userData  = req.body;
    const allUsers = JSON.parse(users);
    const existUser = allUsers.find(user => user.email===userData.email);

    if (existUser){
        res.json('this email already exist');
    }
    allUsers.push( {...userData, id: allUsers.length + 1});

    await fs.writeFile(usersPath,JSON.stringify(allUsers));
    res.redirect(`/login`);
});

app.listen(3000,() => {
    console.log('localhost 3000');
})
