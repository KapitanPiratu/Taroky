const express = require('express');
const app = express();
const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('./server/database.db', sqlite.OPEN_READWRITE);
const bcrypt = require('bcrypt');
const port = 80;

app.use(express.static('public'));
app.use(express.json());

app.listen(port, () => {
    console.log(`application running on port ${port}`)
})