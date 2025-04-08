const express = require('express');
const User = require('./models/User');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;


const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/user_crud_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("✅ Connected to MongoDB");
}).catch(err => {
  console.error("❌ MongoDB connection error:", err);
});
// --------------------
// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Static files

app.use(express.static('public'));

// In-memory user data
let users = [];


app.get('/', async (req, res) => {
  const users = await User.find();
  res.render('index', { users });
});


app.get('/add', (req, res) => {
  res.render('add');
});

app.post('/add', async (req, res) => {
  const { name, email } = req.body;
  await User.create({ name, email });
  res.redirect('/');
});

app.get('/edit/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.render('edit', { user });
});

app.post('/edit/:id', async (req, res) => {
  const { name, email } = req.body;
  await User.findByIdAndUpdate(req.params.id, { name, email });
  res.redirect('/');
});

app.post('/delete/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.redirect('/');
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
