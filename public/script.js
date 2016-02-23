angular.module('myApp',[]);

angular.module('myApp')
	.controller('lingoTroller', ['$scope', '$http', function($scope, $http){
			var s = $scope
			var h = $http

			
			s.submitter = function(ourTrans){
					// window.location.href="/"
			h.post('/translate', ourTrans)
				.then(function(dataFromServer){
					console.log(dataFromServer)
					s.translation = dataFromServer.data
					console.log("The scope translation= " + s.translation)

				})
			}


// window.location.href

	}])