const express = require('express');
const app = express();
const db = require('./server/controllers/connectdb');
const cors = require('cors');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

// Router middleware for connecting to the server 
const studentRouter = require('./routers/student.router');
const scoreRouter = require('./routers/scores.router');
const deleteRouter = require('./routers/delete.student.router');
const updateRouter = require('./routers/update.student.router');
const getScoreRouter = require('./routers/scores.router');
const updateScoreRouter = require('./routers/update.score.router');
const deleteScoreRouter = require('./routers/delete.score.router');
const addNewScoreRouter = require('./routers/scores.router');
const exportExcelFileRouter = require('./routers/export.FileExcelScore.Router');
const sendNotificationRouter = require('./routers/sendNotification.router')
const getStudentRouter = require('./routers/student.router');
const authenLoginRouter = require('./routers/authen.login.router')


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
    res.setHeader('Content-Type', 'application/json');
    next();
});

app.use('/students', studentRouter);
app.use('/getStudent', getStudentRouter);
app.use('/score', scoreRouter);
app.use('/students/delete', deleteRouter);
app.use('/students/update', updateRouter);
app.use('/getScore', getScoreRouter);
app.use('/score/update', updateScoreRouter);
app.use('/score/delete', deleteScoreRouter)
app.use('/score', addNewScoreRouter);
app.use('/exportScore', exportExcelFileRouter);
app.use('/sendemail', sendNotificationRouter);


// Get all students from the database


// Add new students to the list of students

// // Search students 

// Get scores


// -------------------- Login ---------------- //

// Process login request
app.use('/authenlogin', authenLoginRouter);




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