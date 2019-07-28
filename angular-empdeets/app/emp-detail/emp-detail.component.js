'use strict';

// Register `empDetail` component, along with its associated controller and template
angular.
  module('empDetail').
  component('empDetail', {
    templateUrl: 'emp-detail/emp-detail.template.html',
    controller: ['$http', '$routeParams',                           //passing the relevant services
      function EmpDetailController($http, $routeParams) {
        var self = this;

        $http.get('employees/' + $routeParams.employeeId + '.json').then(function(response) {
          self.employee = response.data;
        });
      }
    ]
  });