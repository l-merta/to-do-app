require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const passport = require('passport');
require('./config/passport.js');
const authRoutes = require('./routes/authRoutes');
const { sequelize } = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5200;

// Use CORS middleware
app.use(cors());

// Serve static files from React's build
app.use(express.static("public"));

// Session middleware (should be added before passport.session())
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'default_secret', // Ensure this is set in production
    resave: false,
    saveUninitialized: false,
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/auth', authRoutes);

// Connect to database
sequelize.sync().then(() => console.log('Database connected'));

// API route returning JSON object
app.get("/api", (req, res) => {
  res.json({ "api": "Hello World" });
});

// Serve the main HTML file for any non-API routes
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
