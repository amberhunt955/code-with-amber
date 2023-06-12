require('dotenv').config()
const express = require('express');

const app = express();

//* MIDDLEWARE
// allows us to send any json file using a client
app.use(express.json())

//* LISTEN AT DESIGNATED PORT
const PORT = process.env.PORT | 3001;

app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}...`);
})