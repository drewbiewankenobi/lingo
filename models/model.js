
var mongoose = require('mongoose')

var wordsSchema = mongoose.model("wordsSchema", {
	words : Array


	// HQs         : [{type : mongoose.Schema.ObjectId, ref : "HQ"}]
	// userName   : {type : String, unique:true}

})

var ourWords = new wordsSchema({
	words : ['foot', 'dinner', 'blue', 'apple','grass','circle','hand','head','kite', 'sea']
	})




module.exports = {
	wordsSchema : wordsSchema,
	ourWords : ourWords
}

