
var mongoose = require('mongoose')

var wordsSchema = mongoose.model('wordsSchema', {
	words : Array


	// HQs         : [{type : mongoose.Schema.ObjectId, ref : 'HQ'}]
	// userName   : {type : String, unique:true}

})

var ourWords = new wordsSchema({
	words : ['foot', 'dinner', 'blue', 'apple','grass','circle','hand','head','kite', 'sea', 'project','host', 'subject', 'mother', 'father', 'knowledge', 'ask', 'reality', 'general', 'society', 'name', 'him', 'her', 'also', 'experience', 'time', 'dimension', 'follow','moment', 'folder', 'backpack', 'pencil', 'notebook' , 'novel', 'touch', 'strike', 'this', 'that', 'eye', 'union', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'look', 'character', 'suppose', 'sleep', 'major', 'method', 'main', 'biology', 'purple', 'monkey','dishwasher', 'sad', 'happy','angry', 'nice', 'pain', 'joy','ghost','spirit','boat','title','hunter']
	})




module.exports = {
	wordsSchema : wordsSchema,
	ourWords : ourWords
}

