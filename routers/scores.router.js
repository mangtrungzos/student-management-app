const express = require('express');
const router = express.Router();
const db = require('../server/controllers/db');

// Process request to display scores
router.get('/', (req, res) => {
    const query = `
        SELECT DIEMSV.MASV, DIEMSV.MAMH, MONHOC.TENMH, DIEMSV.DIEM
        FROM DIEMSV
        JOIN MONHOC 
        ON DIEMSV.MAMH = MONHOC.MAMH
    `;
    db.query(query, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.send(result);
        }
    });
});

// Get Scores 

router.get('/:MASV', (req, res) => {
    const masv = req.params.MASV;
    const query = `
        SELECT DIEMSV.MASV, DIEMSV.MAMH, MONHOC.TENMH, DIEMSV.DIEM
        FROM DIEMSV
        JOIN MONHOC 
        ON DIEMSV.MAMH = MONHOC.MAMH
        WHERE DIEMSV.MASV = ?
    `; 
    db.query(query, [masv], (err, result) => {
        if (err) {
            console.error('Error querying: '+ err.message);
            res.status(500).send({err: 'Database query error'});
        } else if (result.length > 0) {
            const scores = result[0];
            res.json(scores);
        } else {
            res.status(404).json({error: 'Not found'});
        }
    });
});

router.post('/', (req, res) => {
    const { MASV, MAMH, DIEM } = req.body;
    const query = 'INSERT INTO diemsv (MASV, MAMH, DIEM) VALUES (?, ?, ?)';
    db.query(query, [MASV, MAMH, DIEM], (err, resluts) => {
        if (err) {
            console.error('Error when adding to diemsv:' + err.message);
            res.status(500).json({error: 'Error when adding to diemsv'});
        } else {
            console.log('Data added successfully');
            res.status(200).json({message: 'Data added successfully'});
        }
    });
});

module.exports = router;