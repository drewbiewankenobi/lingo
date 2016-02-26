
var mongoose = require('mongoose')

var wordsSchema = mongoose.model('wordsSchema', {
	words : Array

	// HQs        : [{type : mongoose.Schema.ObjectId, ref : 'HQ'}]
	// userName   : {type : String, unique:true}

})

var ourWords = new wordsSchema({
	words : [
	'foot', 'dinner', 'blue', 'apple','grass', 'circle', 'hand', 'head', 'kite', 'sea', 'project','host', 'subject', 'mother', 'father', 'knowledge', 'ask', 'reality', 'general', 'society', 'name', 'him', 'her', 'also', 'experience', 'time', 'dimension', 'follow','moment', 'folder', 'backpack', 'pencil', 'notebook' , 'novel', 'touch', 'strike', 'this', 'that', 'eye', 'union', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'look', 'character', 'suppose', 'sleep', 'major', 'method', 'main', 'biology', 'purple', 'monkey','dishwasher', 'sad', 'happy','angry', 'nice', 'pain', 'joy', 'ghost', 'spirit', 'boat', 'title', 'hunter', 'fashion', 'dollar', 'meditation', 'artisan', 'axe', 
		'health','plain', 'author', 'try', 'stomach','after', 'background', 'vacant', 'smuggler', 'confidential', 'expert','odd', 'primitive', 'fighter', 'release', 'hills', 'identical', 'comfortable', 'shine', 'bare', 'reckless', 'formula', 'data', 'hope', 'less', 'rotten', 'pity', 'shock', 'sadistic', 'cannon', 'effective', 'huge', 'servant', 'luxurious','money', 'fate', 'fox', 'rabbit', 'element', 'dog', 'cat', 'insect', 'pig', 'chicken', 'horse', 'feather', 'blush', 'crime', 'lock', 'rain', 'snow', 'sun', 'sunshine', 'cloud', 'hot', 'cold', 'today', 'tomorrow']
	})




module.exports = {
	wordsSchema : wordsSchema,
	ourWords : ourWords
}

