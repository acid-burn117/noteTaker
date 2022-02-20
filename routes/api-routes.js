const router = require("express").Router();
const db = require("../db/db.json");
const fs = require("fs");

router.get("/notes", (req, res) => {
    let notes = fs.readFile("../db/db.json", function(err, data){
        console.log(data)
    });
    // res.json(notes);
});

module.exports = router