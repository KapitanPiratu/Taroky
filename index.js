const express = require('express');
const app = express();
const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('./server/database.db', sqlite.OPEN_READWRITE);
const bcrypt = require('bcrypt');
const port = 80;

app.use(express.static('public'));
app.use(express.json());

app.post('/login', (req, res) => {
    const {user, password} = req.body;

    db.get('SELECT * FROM users WHERE email = ? OR nickname = ?', [user, user], (err, row) => {
        if (err){
            console.log(err);
            res.sendStatus(500);
        }else if (!row){
            res.status(401).send('Account Not Found')
        }else{
            bcrypt.compare(password, row.password, (err, result) => {
                if (err){
                    console.log(err);
                    res.sendStatus(500);
                }else if (!result){
                    res.status(401).send('Incorrect Password');
                }else{
                    res.sendStatus(200);
                }
            })
        }
    })
})

app.post('/signup', (req, res) => {
    const {nickname, email, password} = req.body;

    bcrypt.hash(password, 5, (err, hash) => {
        if (err){
            console.log(err);
            res.sendStatus(500);
        } else {
            db.run('INSERT INTO users (nickname, email, password) VALUES (?, ?, ?)', [nickname, email, hash], (err) => {
                if (err){
                    console.log(err);
                    res.sendStatus(500);
                }else{
                    res.sendStatus(201);
                }
            })
        }
    })
})

app.listen(port, () => {
    console.log(`application running on port ${port}`)
})