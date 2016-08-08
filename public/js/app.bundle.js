webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * App Module
	 */
	__webpack_require__(1);

	/**
	 * Services
	 */
	__webpack_require__(2);
	__webpack_require__(3);

	/**
	 * Controllers
	 */
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);
	__webpack_require__(8);

	/**
	 * Directives
	 */
	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(11);


/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * Creates a framework for the bookshare application.
	 * @module
	 **/

	angular.module('bookApp', ['ngRoute'])
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	'use strict';

	    $locationProvider.html5Mode(true);

	    $routeProvider
	      .when('/', {
	        templateUrl: 'app/home/home.html'
	      })
	      .when('/account', {
	        templateUrl: 'app/account/account.html',
	        controller: 'AccountController',
	        controllerAs: 'account'
	      })
	      .when('/allBooks', {
	        templateUrl: 'app/bookDisplay/allBooks.html'
	      })
	      .when('/login', {
	        templateUrl: 'app/authorization/login/login.view.html',
	        controller: 'LoginController',
	        controllerAs: 'login'
	      })
	      .when('/register', {
	        templateUrl: 'app/authorization/register/register.view.html',
	        controller: 'RegisterController',
	        controllerAs: 'register'
	      })
	      .when('/userBooks', {
	        templateUrl: 'app/bookDisplay/userBooks.html'
	        //Controller is declared in the directive.
	      })
	      .otherwise({redirectTo: '/'});

	}]);


/***/ },
/* 2 */
/***/ function(module, exports) {

	/**
	 * Deals with the authentication of the user, registration and logging in and out.
	 * @service
	 **/

	(function () {
	  'use strict';

	  angular
	    .module('bookApp')
	    .service('AuthService', AuthService);

	  AuthService.$inject = ['$http', '$window'];

	  function AuthService ($http, $window) {

	    var vm = this;

	    vm.currentUser = currentUser;
	    vm.getToken = getToken;
	    vm.getUsername = getUsername;
	    vm.isLoggedIn = isLoggedIn;
	    vm.login = login;
	    vm.logout = logout;
	    vm.register = register;
	    vm.saveToken = saveToken;



	    function saveToken(token) {
	      $window.localStorage['mean-token'] = token;
	    }

	    function getToken() {
	      return $window.localStorage['mean-token'];
	    }

	    function isLoggedIn() {
	      var token = getToken();
	      var payload;

	      if(token){
	        payload = token.split('.')[1];
	        payload = $window.atob(payload);
	        payload = JSON.parse(payload);

	        return payload.exp > Date.now() / 1000;
	      } else {
	        return false;
	      }
	    }


	    function currentUser() {
	      if(isLoggedIn()){
	        var token = getToken();
	        var payload = token.split('.')[1];
	        payload = $window.atob(payload);
	        payload = JSON.parse(payload);
	        console.log(payload.email);
	        return {
	          email : payload.email,
	          name : payload.name
	        };
	      }
	    }

	    function getUsername() {
	      var email = currentUser().email;
	      console.log(email);
	      if ( email ) {
	        return email;
	      } else {
	        return '';
	      }
	    }


	    function register(user) {
	      return $http.post('/api/register', user).success(function(data){
	        saveToken(data.token);
	      });
	    }


	    function login(user) {
	      return $http.post('/api/login', user).success(function(data) {
	        saveToken(data.token);
	      });
	    }


	    function logout() {
	      $window.localStorage.removeItem('mean-token');
	    }


	  }


	})();

/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * Deals with retrieving, saving and modifying books.
	 * @service
	 **/

	(function() {
	  'use strict';

	  angular
	    .module('bookApp')
	    .service('DataService', DataService);

	  DataService.$inject = ['$http', '$q', 'AuthService'];

	  function DataService($http, $q, AuthService) {

	    var vm = this;

	    vm.deleteBook = deleteBook;
	    vm.getAllBooks = getAllBooks;
	    vm.getBook = getBook;
	    vm.getUserBooks = getUserBooks;
	    vm.saveBook = saveBook;


	    function getAllBooks() {
	      console.log('get all books');
	      return $http.get('/api/books');
	    }

	    
	    function getBook(title) {
	      return $http.get('https://openlibrary.org/search.json?&jscmd=details&q=' + title);
	    }


	    function getUserBooks() {
	      return $http.get('/api/books/' + AuthService.getUsername());
	    }


	    function saveBook(book) {
	      if (!book._id) {
	        console.log('save successful');
	        $http.post('/api/books', book);
	      }
	    }


	    function deleteBook(book) {
	      console.log(book.title);
	      if (!book._id) {
	        return $q.resolve();
	      }
	      return $http.delete('/api/books/' + book._id).then(function() {
	        console.log('I deleted the ' + book.title + ' book!');
	      });
	    }


	  }

	})();


/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * Controls the users account.
	 * @controller
	**/

	(function() {
	  /* jshint strict: true */
	  'use strict';

	  angular
	    .module('bookApp')
	    .controller('AccountController', AccountController);
	  
	  AccountController.$inject = ['$window', '$location', 'DataService', 'AuthService'];
	  
	  function AccountController(AuthService) {

	    var vm = this;

	    vm.accountName = AuthService.currentUser().name;
	    vm.userName = AuthService.currentUser().email;


	    activate();


	    ///////////////////////////////////////////////////////////////


	    function activate() {

	    }

	  }
	  
	})();


/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * Controls the users login.
	 * @controller
	 **/

	(function () {

	  angular
	  .module('bookApp')
	  .controller('LoginController', LoginController);

	  LoginController.$inject = ['$location', '$window', '$route', 'AuthService'];

	  function LoginController($location, $window, $route, AuthService) {

	    var vm = this;

	    vm.credentials = {
	      email : '',
	      password : ''
	    };
	    vm.logUserOut = logUserOut;
	    vm.logUserOn = logUserOn;
	    vm.sessionToken = $window.localStorage['mean-token'];


	    function logUserOut() {
	      AuthService.logout();
	      $location.path('/');
	      $route.reload();
	    }


	    function logUserOn() {

	      console.log('logging in');
	      AuthService
	        .login(vm.credentials)
	        .error(function(err){
	          console.log(err);
	        })
	        .then(function(){
	          $location.path('/userBooks');
	          $route.reload();
	        });
	    }

	  }

	})();


/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * Controls the users registration.
	 * @controller
	 **/

	(function () {

	  angular
	    .module('bookApp')
	    .controller('RegisterController', RegisterController);

	  RegisterController.$inject = ['$location', '$route', 'AuthService'];

	  function RegisterController($location, $route,  AuthService) {

	    var vm = this;

	    vm.onSubmit = onSubmit;

	    vm.credentials = {
	      name : '',
	      email : '',
	      password : ''
	    };

	    function onSubmit() {

	      console.log('Submitting registration');
	      AuthService
	        .register(vm.credentials)
	        .error(function(err){
	          console.log(err);
	        })
	        .then(function(){
	          $location.path('/account');
	          $route.reload();
	        });
	    }

	  }

	})();


/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * Controls the books
	 * @controller
	 **/

	(function() {
	  'use strict';

	  angular
	    .module('bookApp')
	    .controller('DisplayBooksController', DisplayBooksController);

	  DisplayBooksController.$inject = ['$window', '$location', 'DataService', 'AuthService'];

	  function DisplayBooksController($window, $location, DataService, AuthService) {

	    var vm = this;

	    vm.books = [];
	    vm.createBookObj = createBookObj;
	    vm.currentPage = $location.path();
	    vm.deleteBook = deleteBook;
	    vm.getAllBooks = getAllBooks;
	    vm.getUserBooks = getUserBooks;
	    vm.isLoggedIn = AuthService.isLoggedIn();
	    vm.searchBook = searchBook;

	console.log(vm.currentPage);
	    activate();


	    ///////////////////////////////////////////////////////////////


	    function activate() {

	      if ($window.localStorage['mean-token']) {
	        if (vm.currentPage === '/userBooks') {
	          vm.getUserBooks();
	        }
	        if (vm.currentPage === '/allBooks') {
	          vm.getAllBooks();
	        }
	      }
	    }

	    //Using data returned from openlibrary.org, generates an object for an individual book.
	    function createBookObj(data) {

	      var bookObj = {
	        title : data.docs[0].title_suggest,
	        isbn : data.docs[0].isbn[0],
	        image : 'http://covers.openlibrary.org/b/isbn/' + data.docs[0].isbn[0] + '-M.jpg',
	        reviews : ['No Reviews'],
	        description : 'No description. Write one.',
	        owner: AuthService.getUsername()
	      };

	      vm.books.push(bookObj);
	      DataService.saveBook(bookObj);

	    }


	    function deleteBook(book) {

	      DataService.deleteBook(book)
	        .then(function() {
	          vm.books.splice(book, 1);
	        });

	    }


	    function getAllBooks() {

	      DataService.getAllBooks()
	        .success(function(data) {
	          vm.books = data.books || [];
	          console.log(vm.books);
	        })
	        .error(function(err) {
	          console.log(err);
	        });

	    }


	    function getUserBooks() {

	      DataService.getUserBooks()
	        .success(function(data) {
	          vm.books = data.books || [];
	          console.log(vm.books);
	        })
	        .error(function(err) {
	          console.log(err);
	        });

	    }


	    //Searches for a book by title by making a call to the open library api.
	    function searchBook(book) {

	      console.log(book);
	      DataService.getBook(book)

	        .success(function(data) {
	          createBookObj(data);
	        })

	        .error(function(err) {
	          console.log(err);
	        });

	    }


	  }

	})();


/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * Controls the navigation, and navigation routing.
	 * @controller
	 **/

	(function() {
	  'use strict';

	  angular
	    .module('bookApp')
	    .controller('NavController', NavController);

	  NavController.$inject = ['$location', 'AuthService'];

	  function NavController($location, AuthService) {

	    var vm = this;

	    vm.isLoggedIn = AuthService.isLoggedIn();
	    vm.navigateAccount = navigateAccount;
	    vm.navigateAllBooks = navigateAllBooks;
	    vm.navigateHome = navigateHome;
	    vm.navigateUserBooks = navigateUserBooks;
	    vm.tab = 1;


	    function navigateAccount() {
	      $location.url('/account');
	    }

	    function navigateHome() {
	      $location.url('/');
	    }

	    function navigateUserBooks() {
	      $location.url('/userBooks');
	    }

	    function navigateAllBooks() {
	      $location.url('/allBooks');
	    }


	  }

	})();


/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Displays the navigation.
	 * @directive
	 **/

	angular.module('bookApp')
	  .directive('bsNavigation', function(){
	    return {
	      templateUrl: 'app/navigation/bsNavigation.html',
	      replace: true,
	      controller: 'NavController'
	    };
	});


/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Creates the display form for searching for a book.
	 * @directive
	 **/


	angular.module('bookApp')
	  .directive('bsSearchBook', function(){
	    return {
	      templateUrl: 'app/bookDisplay/search/bsSearchBook.html',
	      controller: 'DisplayBooksController',
	      controllerAs: 'display'
	    };
	  });


/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Creates the display for users books and all books.
	 * @directive
	 **/


	angular.module('bookApp')
	  .directive('bsDisplayBooks', function(){
	    return {
	      templateUrl: 'app/bookDisplay/directive/bsDisplayBooks.html',
	      controller: 'DisplayBooksController',
	      controllerAs: 'display'
	    };
	  });


/***/ }
]);