const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const path = require('path');

// Router middleware for connecting to the server 
const studentRouter = require('../client/routers/student.router');
const deleteRouter = require('../client/routers/delete.student.router');
const updateRouter = require('../client/routers/update.student.router');
const getStudentRouter = require('../client/routers/student.router');


const scoreRouter = require('../client/routers/scores.router');
const getScoreRouter = require('../client/routers/getScore.router');
const updateScoreRouter = require('../client/routers/update.score.router');
const deleteScoreRouter = require('../client/routers/delete.score.router');
// const addNewScoreRouter = require('./routers/scores.router');
const exportExcelFileRouter = require('../client/routers/export.FileExcelScore.Router');

const sendNotificationRouter = require('../client/routers/sendNotification.router');

const authenLoginRouter = require('../client/routers/authen.login.router');

const classRouter = require('../client/routers/class.router');
const getClassRouter = require('../client/routers/getClass.router');
const updateClassRouter = require('../client/routers/update.class.router')
const deleteClassRouter = require('../client/routers/delete.class.router');

const subjectRouter = require('../client/routers/subject.router');
const updateSubjectRouter = require('../client/routers/update.subject.router');
const deleteSubjectRouter = require('../client/routers/delete.subject.router');
const getSubjectRouter = require('../client/routers/getSubject.router')


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static('public'));


// Allow requests from any origin
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Content-Type', 'application/json');
    next();
});


// Student
app.use('/students', studentRouter);
app.use('/getStudent', getStudentRouter);
app.use('/students/delete', deleteRouter);
app.use('/students/update', updateRouter);

// Scores
app.use('/scores', scoreRouter);
app.use('/getScores', getScoreRouter);
app.use('/scores/update', updateScoreRouter);
app.use('/scores/delete', deleteScoreRouter);

app.use('/exportScore', exportExcelFileRouter);

// Notifications
app.use('/sendemail', sendNotificationRouter);

// Class
app.use('/class', classRouter);
app.use('/getClass', getClassRouter);
app.use('/class/update', updateClassRouter);
app.use('/class/delete', deleteClassRouter);

// Subjects
app.use('/subjects', subjectRouter);
app.use('/subject/update', updateSubjectRouter);
app.use('/getSubject', getSubjectRouter);
app.use('/subject/delete', deleteSubjectRouter);


// Process login request
app.use('/authenlogin', authenLoginRouter);

app.get('/', (req, res) => {
	// Render login template
	res.sendFile(path.join(__dirname + '/client/pages/login.html'));
});

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));