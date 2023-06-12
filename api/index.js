require('dotenv').config()
require('./config/db'); // connects to db
const express = require('express');

// create app instance
const app = express();

//* MIDDLEWARE
app.use(express.json())

// routes
app.use('/api/posts', require('./routes/api/posts'));

//* LISTEN AT DESIGNATED PORT
const PORT = process.env.PORT | 3001;

app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}...`);
})