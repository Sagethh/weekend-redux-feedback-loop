const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => { // main GET request
  let qText = 'SELECT * FROM "feedback";'; // query text for the pool query
  pool.query(qText) // query the qText
  .then(result => {
    res.send(result.rows); // send back result rows
  })
  .catch (error => { // catch any errors and console log them
    console.log(error);
    res.sendStatus(500); // send back an error status
  });
});

router.delete('/:id', (req, res) => {
  pool.query('DELETE FROM "feedback" WHERE id=$1;', [req.params.id])
  .then(result => {
    res.sendStatus(200);
  })
  .catch(error => {
    console.log(error);
    res.sendStatus(500);
  });
});

router.put('/:id', (req, res) => {
  pool.query('UPDATE "feedback" SET "flagged" = "!flagged" WHERE id=$1;', [req.params.id])
  .then (result => {
    res.sendStatus(200);
  })
  .catch(error => {
    console.log(error);
    res.sendStatus(500);
  });
});

router.post('/',  (req, res) => { // main POST request
  let feedback = req.body; // set variable to call
  console.log(`Adding feedback`, feedback); // check to make sure the stuff we are getting is accurate
  let qText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                VALUES ($1, $2, $3, $4);`; // query text to use in pool query
  pool.query(qText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments]) // query the qText
  .then(result => {
    res.sendStatus(200); // send back a success status
  })
  .catch(error => { // catch any errors and log them
    console.log(error);
    res.sendStatus(500); // send back an error status
  });
});

module.exports = router;