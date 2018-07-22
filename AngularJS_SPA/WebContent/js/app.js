var app = angular.module('myApp', []);
app.config(function($routeProvider) {
	$routeProvider
		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'loginController'
		})		
		.when('/auth', {
			templateUrl: 'views/Products.html',
			controller: 'authController'
		})		
		.when('/Products', {
			templateUrl: 'views/Products.html',
			controller: 'ProductController'
		})
		.when('/Details', {
			templateUrl: 'views/Details.html',
			controller: 'DetailsController'
		})
		.when('/price', {
			templateUrl: 'views/price.html',
			controller: 'priceController'
		})						
		.otherwise({
			redirectTo: '/login'
		});
});

app.controller('ProductController', function($scope){
	//Controller Here
	$scope.message = "Products";
});

app.controller('DetailsController', function($scope){
	//Controller Here
	$scope.message = "Details";
});

app.controller('priceController', function($scope){
	//Controller Here
	$scope.message = "Price Details will be displayed Soon";
});

app.controller('loginController', function($scope){
	//Controller Here
	$scope.message = "Welcome to Login Page";
});

app.controller('authController',['$scope', '$http', '$injector', function($scope,$http,$injector) {
		var username=$scope.username;
		var pwd=$scope.pwd;
		var requestType = 'Login';
		$window.alert("Hello ");
		if(username!=null && pwd!=null)
		{
			$window.alert("No Data Returned");
			$scope.message2 = "Login Contains UserName and Pwd";
		} 
		else if(pwd == null && username == null)
		{
			$window.alert("No Data Returned 2");
			$scope.message2 = "Please provide both UserName and Pwd";
		}
		/*else if(document.myform.password.value == "" || document.myform.username.value == "")
		{
			if(document.myform.username.value == "")
			{
				$scope.message = "Please provide userName";
				$('div.LoginError').text("Please enter UserName").css('color','red');
			}
			else if(document.myform.password.value == "")
			{
				$scope.message = "Please provide pwd";
				$('div.LoginError').text("Please enter a Password").css('color','red');
			}			
		}*/
  }]);