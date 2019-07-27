angular.module('empdeetApp').
config(
    ['$routeProvider', function config($routeProvider){
        $routeProvider.
        when('/employees',                //URL fragment 
        {template: '<emp-list></emp-list>'
        }).
        when('/employees/:name', {            //$routeParam defined
            template: '<emp-detail></emp-detail>'
          }).
          otherwise('/employees');
      }
    ]);