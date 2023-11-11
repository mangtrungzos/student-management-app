const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../server/controllers/connectdb');

router.post('/', async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM users WHERE name = ?", [req.body.name]);
        console.log('Query result:', result);

        const rows = result && result.length > 0 ? result[0] : [];  
        if (!rows || rows.length === 0) {
            return res.status(400).send('Cannot find user');
        }

        const user = rows[0];

        if (user && user.password && (await bcrypt.compare(req.body.password, user.password))) {
            res.redirect('../client/pages/home.html')
        } else {
            res.send('Not allow');
        }
    } catch(error) {
        console.error(error);
        res.status(500).send();
    }
});

module.exports = router;