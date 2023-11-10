const express = require('express');
const app = express();
const db = require('./controllers/db');
const port = process.env.PORT || 3000;
const cors = require('cors');
const bodyParser = require('body-parser');
const scoreRouter = require('../routers/scores');

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Allow requests from any origin
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use('/score', scoreRouter);

app.get('/students', (req, res) => {
    db.query('SELECT * FROM sinhvien', (err, result) => {
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

// Process students add request

app.post('/students', (req, res) => {
    const {MASV, TENSV, DCSV, MALP} = req.body;
    const query = "INSERT INTO sinhvien (MASV, TENSV, DCSV, MALP) VALUES (?, ?, ?, ?)"
    
    db.query(query,[MASV, TENSV, DCSV, MALP], (error, results) => {
        if (error) throw error
        res.send('Student added successfully' + results.insertId);
    });
});

// Process login request
app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Check login infor
    
    // Rediredct or return error message

});

// Process register request
app.post('/register', (req, res) => {
    const {username, password, email} = req.body;

    // Save registration information in database

    // Redirect or return error message

});

// Process requests to add new students
app.post('/students/add', (req, res) => {
    const {MASV, TENSV, DCSV, MALP} = req.body;

    // Save students information in database

    // Redirect or return success message

});

// Process requests to delete students
app.post('/students/delete', (req, res) => {
    const studentId = req.body.studentId;

    // Delete students from database

    // Redirect or return success message
});

// Process request to display class information
app.get('/class', (req, res) => {
    // Get class infor from database

    // Return page display class information
});

// Process request send message 
app.post('notification', (req, res) => {
    const message = req.body.message;

    // Send message to students

    // Redirect or return success message
});

// Process statistical request and create report
app.get('/statistics', (req, res) => {
    // Calculate statisticals from database

    // Return page displaying the results list and report
});

// Process request display account information
app.get('/account', (req, res) => {
    // Get account infor from database

    // Return page display account information
});

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));