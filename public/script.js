angular.module('myApp',[]);

angular.module('myApp')
	.controller('lingoTroller', ['$scope', '$http', function($scope, $http){
			var s = $scope
			var h = $http
			s.score = 0
			s.reveal = [false, false, false, false, false, false, false, false, false, false]
			s.misArr = [false, false, false, false, false, false, false, false, false, false]
			s.quizEnd = false
			


			// s.words = words.words

			// s.selection = function(){

				

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

						s.questArray = dataFromServer.data.originalText.split(", ")
						// console.log('the quest array object is ' + s.questArray)
						s.answerArray = dataFromServer.data.translatedText.split(", ")
						s.counter = 0
						s.mistakes = 0


						//find out if the answer is correct
							s.quizAnswer = function(userAnswer){

							console.log("User answer = " + userAnswer)
								if (userAnswer === s.answerArray[s.counter]){
									console.log(s.answerArray[s.counter])
									console.log("CORRECT SUH!")
									s.reveal[s.counter] = true
									console.log(s.reveal)
									s.rightReveal = function($index){
										// console.log(s.reveal[s.counter])
										return s.reveal[$index]
									}
									s.counter += 1
									s.score +=1
									if (s.counter === 10){
										s.quizEnd = true
									}
									// s.reveal[s.counter] = true

								} else {
									console.log("WRONG SUH!")
									console.log(s.answerArray[s.counter])
									s.misArr[s.counter] = true
									s.wrongReveal = function($index){
										// console.log(s.misArr[s.counter])
										return s.misArr[$index]
									}
									s.counter += 1
									s.mistakes += 1
										if (s.mistakes >=3){
											window.location.href="/quiz.html"
										}
								}
							}
					})
				}

			

			


// window.location.href

	}])