const express = require('express');
const app = express();
const db = require('./server/controllers/db');
const cors = require('cors');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const scoreRouter = require('./routers/scores.router');
const deleteRouter = require('./routers/delete.router');
const updateRouter = require('./routers/update.router');
const getScoreRouter = require('./routers/scores.router');
const updateScoreRouter = require('./routers/update.score.router');
const deleteScoreRouter = require('./routers/delete.score.router');
const addNewScoreRouter = require('./routers/scores.router');
const exportExcelFileRouter = require('./routers/export.FileExcelScore.Router');

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/score', scoreRouter);
app.use('/students/delete', deleteRouter);
app.use('/students/update', updateRouter);
app.use('/getScore', getScoreRouter);
app.use('/score/update', updateScoreRouter);
app.use('/score/delete', deleteScoreRouter)
app.use('/score', addNewScoreRouter);
app.use('/exportScore', exportExcelFileRouter);


// Allow requests from any origin
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Content-Type', 'application/json');
    next();
});

// Get all students from the database
app.get('/students', (req, res) => {
    db.query('SELECT * FROM sinhvien', (err, result) => {
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

// Add new students to the list of students
app.post('/students', (req, res) => {
    const {MASV, TENSV, DCSV, MALP} = req.body;
    const query = "INSERT INTO sinhvien (MASV, TENSV, DCSV, MALP) VALUES (?, ?, ?, ?)"
    
    db.query(query,[MASV, TENSV, DCSV, MALP], (error, results) => {
        if (error) throw error
        res.send('Student added successfully' + results.insertId);
    });
});


// Search students 
app.get('/getStudent/:MASV', (req, res) => {
    const masv = req.params.MASV;
    const query = "SELECT * FROM sinhvien WHERE MASV=?"
    db.query(query,[masv], (err, result) => {
      if (err) {
        console.error('Error querying:' + err.message);
        res.status(500).send({err: 'Database query error'});
        return;
      }

      if (result.length > 0) {
        const student = result[0];
        res.json(student);
      } else {
        res.status(404).json({error: 'Not found'});
      }
    });
});

// Get scores


// -------------------- Login ---------------- //

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


// Process requests to delete students
app.post('/students/delete', (req, res) => {
    const studentId = req.body.studentId;

    // Delete students from database
    // db.query()

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