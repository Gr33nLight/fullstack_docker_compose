import express from 'express';
import auth from './routes/auth.js';
import users from './routes/users.js';
import contacts from './routes/contacts.js';

// Load dotenv - replaced by docker-compose environment
//import dontenv from 'dotenv';
//dontenv.config();

import connectDB from './config/db.js';

const app = express();

// Connect MongoDB
connectDB();

// Init Middleware, enable body data
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

app.use('/auth', auth);

app.use('/users', users);

app.use('/contacts', contacts);
