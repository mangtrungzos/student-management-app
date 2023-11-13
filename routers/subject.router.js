const express = require('express');
const db = require('../server/controllers/connectdb');
const router = express.Router();

// Get all students from the database
router.get('/', (req, res) => {
    db.query('SELECT * FROM monhoc', (err, result) => {
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

router.post('/', (req, res) => {
    const {MAMH, TENMH, SOTC} = req.body;
    const query = 'INSERT INTO monhoc (MAMH, TENMH, SOTC) VALUES (?, ?, ?)'
    
    db.query(query,[MAMH, TENMH, SOTC], (error, results) => {
        if (error) throw error
        res.send('Student added successfully ' + results.insertId);
    });
});

module.exports = router;