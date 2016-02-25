var googleTranslate = require('google-translate')('AIzaSyBK7uxnSgFdrVjaqyUFxJp1UI4LaNPf338');
var wordsSchema = require('../models/model.js');

var languageCodes = {

	Afrikaans : 'af',
	Albanian : 'sq',
	Arabic : 'ar',
	Armenian : 'hy',
	Azerbaijani : 'az',
	Basque : 'eu',
	Belarusian : 'be',
	Bengali : 'bn',
	Bosnian : 'bs',
	Bulgarian : 'bg',
	Catalan : 'ca',
	Cebuano : 'ceb',
	Chichewa : 'ny',
	Croatian : 'hr',
	Czech : 'cs',
	Danish : 'da',
	Dutch : 'nl',
	English : 'en',
	Esperanto : 'eo',
	Estonian : 'et',
	Filipino : 'tl',
	Finnish : 'fi',
	French : 'fr',
	Galician : 'gl',
	Georgian : 'ka',
	German : 'de',
	Greek : 'el',
	Gujarati : 'gu',
	Haitian : 'ht',
	Hausa : 'ha',
	Hebrew : 'iw',
	Hindi : 'hi',
	Hmong : 'hmn',
	Hungarian : 'hu',
	Icelandic : 'is',
	Igbo : 'ig',
	Indonesian : 'id',
	Irish : 'ga',
	Italian : 'it',
	Japanese : 'ja',
	Javanese : 'jw',
	Kannada : 'kn',
	Kazakh : 'kk',
	Khmer : 'km',
	Korean : 'ko',
	Lao : 'lo',
	Latin : 'la',
	Latvian : 'lv',
	Lithuanian : 'lt',
	Macedonian : 'mk',
	Malagasy : 'mg',
	Malay : 'ms',
	Malayalam : 'ml',
	Maltese : 'mt',
	Maori : 'mi',
	Marathi : 'mr',
	Mongolian : 'mn',
	Myanmar : 'my',
	Nepali : 'ne',
	Norwegian : 'no',
	Persian : 'fa',
	Polish : 'pl',
	Portuguese : 'pt',
	Punjabi : 'ma',
	Romanian : 'ro',
	Russian : 'ru',
	Serbian : 'sr',
	Sesotho : 'st',
	Sinhala : 'si',
	Slovak : 'sk',
	Slovenian : 'sl',
	Somali : 'so',
	Spanish : 'es',
	Sudanese : 'su',
	Swahili : 'sw',
	Swedish : 'sv',
	Tajik : 'tg',
	Tamil : 'ta',
	Telugu : 'te',
	Thai : 'th',
	Turkish : 'tr',
	Ukrainian : 'uk',
	Urdu : 'ur',
	Uzbek : 'uz',
	Vietnamese : 'vi',
	Welsh : 'cy',
	Yiddish : 'yi',
	Yoruba : 'yo',
	Zulu : 'zu'
}

var ourQuizFunction = function(req, res){
	var langSel = req.body.language
	console.log("QuizFunction is firing --> " + req.body.language)
	var y = wordsSchema.ourWords.words.join(', ')
	console.log("Variable 'y' is --> " + y)
	var transArray = []
	googleTranslate.translate(y, "en", req.body.language, function(err, translation){
		res.send(translation)
	})
	
	/* Validator */
	// for (codes in languageCodes) {
	// 	if (langSel === languageCodes[codes]){
	// 		res.send('thank you for choosing ' + codes)
	// 	} 
	// 	else if (langSel !== languageCodes[codes]) {
	// 		res.send("please choose a valid language code, dum dum.")
	// 	}
	// }


}

var ourQuizAnswer = function(req, res){

}


module.exports = {
	ourQuizFunction : ourQuizFunction
}


