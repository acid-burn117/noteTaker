const router = require("express").Router();
const db = require("../db/db.json");
const fs = require('fs');
const util = require("util");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

router.get('/notes', (req, res) => {
    let notes = readFileAsync("./db/db.json", "utf8");
    notes.then(note => {
        parsedNotes = [].concat(JSON.parse(note));
        res.json(parsedNotes);
    });
});

router.post('/notes', (req, res) => {
    let newestNotes = req.body
    let notes = readFileAsync("./db/db.json", "utf8");
    notes.then(note => {
        parsedNotes = [].concat(JSON.parse(note));
        return parsedNotes
    }).then(newNotes => {
        const noteArray = [...newNotes, newestNotes]
        writeFileAsync('./db/db.json', JSON.stringify(noteArray))
    }).then(() => {
        let notes = readFileAsync("./db/db.json", "utf8");
        notes.then(note => {
            parsedNotes = [].concat(JSON.parse(note))
            res.json(parsedNotes);
        });
    });
});

module.exports = router