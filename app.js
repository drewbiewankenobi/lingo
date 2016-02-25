// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var googleTranslate = require('google-translate')('AIzaSyBK7uxnSgFdrVjaqyUFxJp1UI4LaNPf338');
// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
mongoose.connect('mongodb://localhost/lingo')
//DATA\\

var Lingo = mongoose.model( "Lingo", {
	language		: {type: String},
	languageTarget	: {type: String},
	word 			: {type: String},
})

var ourQuizController = require('./controllers/controller.js')

var wordsSchema = require('./models/model.js')
var ourWords = ourWords


// Routes \\
app.get('/', function(req, res){
  res.sendFile('HTML/index.html', {root : './public'});
});
// app.get('api/translate', function(req,res){
// 	if (err) {
// 	 		return handleError(err)
// 	 	}
// 	 	else {
// 			res.send(Lingo)
// 		}
// })

app.get('/quiz.html', function(req, res){
	res.sendFile('HTML/quiz.html', {root : './public'})
});

app.post('/quizrequest', ourQuizController.ourQuizFunction)
	


app.post('/translate', function(req, res){
	console.log("req.body: " + req.body)
	console.log("req.body.languageTarget: " + req.body.languageTarget)
	var x = new Lingo(req.body)
		// x.save(function(err){

		// if (err) {console.log("NO!")}
		// })
		console.log("Var x is: " + x)
	googleTranslate.translate(x.word, x.language, x.languageTarget, function(err, translation){
		res.send(translation)
	})
})

// app.get('api/translate', function(req,res){
// 	res.send()
// })

// Creating Server and Listening for Connections \\
var port = 4000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})