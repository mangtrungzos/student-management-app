const express = require('express');
const router = express.Router();
const db = require('../server/controllers/db');

router.delete('/:MASV', (req, res) => {
    const query = 'DELETE FROM diemsv WHERE masv='+ req.params.MASV;

    db.query(query, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal server error');
        } else{
            res.send(result);
        }
    });
});

module.exports = router;