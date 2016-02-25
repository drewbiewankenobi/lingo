angular.module('myApp',[]);

angular.module('myApp')
	.controller('lingoTroller', ['$scope', 'words', '$http', function($scope, words, $http){
			var s = $scope
			var h = $http

			s.reveal = false

			s.words = words.words

			s.selection = function(){
				s.reveal = true
				var num = Math.floor(Math.random()* s.words.length)
				console.log(num)
				s.question1 = s.words[num]
				return s.words[num]

			}

			console.log(s.words)

			s.submitter = function(ourTrans){
					// window.location.href="/"
			h.post('/translate', ourTrans)
				.then(function(dataFromServer){
					console.log(dataFromServer)
					s.translation = dataFromServer.data
					console.log("The scope translation= " + s.translation)

				})
			}

			s.quizSub = function(quiz){
				
				h.post('/quizrequest', quiz)
					.then(function(dataFromServer){
						console.log(dataFromServer.data)
						s.reveal = true;
					})

			}

			


// window.location.href

	}])