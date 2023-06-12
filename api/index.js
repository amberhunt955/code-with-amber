require('dotenv').config()
require('./config/db'); // connects to db
const express = require('express');

// create app instance
const app = express();

//* MIDDLEWARE
app.use(express.json())

// routes
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/users', require('./routes/api/users'));

//* LISTEN AT DESIGNATED PORT
const PORT = process.env.PORT | 3001;

app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}...`);
})