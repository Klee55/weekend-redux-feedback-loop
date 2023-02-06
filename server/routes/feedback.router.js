const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


//post feedback function
router.post('/', (req, res) => {
    console.log('post request made');
    console.log(req.body);

    let feedback = req.body;

    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") 
                     VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
    .then(result => {
        res.sendStatus(201);
    })
    .catch(error => {
        res.sendStatus(500);
    })
});



module.exports = router;