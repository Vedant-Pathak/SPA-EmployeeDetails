angular.module('empList').component('empList',{
    templateUrl: 'emp-list/emp-list.template.html',
    controller: ['$http', function EmpListController($http) {
        var self = this;
        self.orderProp = 'age';
  
        $http.get('employees/employees.json').then((response) => {
          self.phones = response.data;
        });
      }]
});