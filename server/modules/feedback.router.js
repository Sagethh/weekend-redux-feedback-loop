const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    let qText = 'SELECT * FROM "feedback";';
    pool.query(qText)
    .then(result => {
        res.send(result.rows);
    })
    .catch (error => {
        console.log(error);
        res.sendStatus(500);
    });
});

router.post('/',  (req, res) => {
    let feedback = req.body;
    console.log(`Adding feedback`, feedback);
  
    let qText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                 VALUES ($1, $2, $3, $4);`;
    pool.query(qText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
      .then(result => {
        res.sendStatus(200);
      })
      .catch(error => {
        console.log(error);
        res.sendStatus(500);
      });
});

module.exports = router;