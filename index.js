const express = require('express');
const connectDB = require('./config/db');
const app = express();
console.log("Hello World");
// Connect Database
connectDB();

app.use(express.json({ extended: false }));

const PORT = 5002;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

