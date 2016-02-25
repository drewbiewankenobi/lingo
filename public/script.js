angular.module('myApp',[]);

angular.module('myApp')
	.controller('lingoTroller', ['$scope', '$http', function($scope, $http){
			var s = $scope
			var h = $http

			s.reveal = [false, false, false, false, false]

			// s.words = words.words

			// s.selection = function(){

				
			// 	s.reveal = true
			// 	var num = Math.floor(Math.random()* s.words.length)
			// 	console.log(num)
			// 	s.question1 = s.words[num]
			// 	return s.words[num]

			// }

			// console.log(s.words)

			s.submitter = function(ourTrans){
					// window.location.href="/"
			h.post('/translate', ourTrans)
				.then(function(dataFromServer){
					console.log(dataFromServer)
					s.translation = dataFromServer.data
					console.log("The scope translation= " + s.translation)

				})
			}

			//submits a language and gets data for questions/answers

			s.quizSub = function(quiz){
				
				h.post('/quizrequest', quiz)
					.then(function(dataFromServer){
						console.log(dataFromServer.data)
						
						//declarations

						var questArray = dataFromServer.data.originalText.split(", ")
						var answerArray = dataFromServer.data.translatedText.split(", ")
						s.reveal[0] = true;
						var counter = 0
						s.question = questArray[counter]
						s.answer = answerArray[counter]

						//find out if the answer is correct
							s.quizAnswer = function(answer){
							console.log("User answer = " + answer)
								if (answer === s.answer){
									console.log("CORRECT SUH!")
									counter += 1
									s.reveal[counter] = true

								} else {
									console.log("NO! DID YOU EVEN STUDY!?")
								}
							}
					})
					}

			

			


// window.location.href

	}])