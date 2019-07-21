angular.module('empList').component('empList',{
    templateUrl: 'emp-list/emp-list.template.html',
    controller: ['$http', function EmpListController($http) {
        var self = this;
        self.orderProp = 'salary';
  
        $http.get('employees/employees.json').then((response) => {
          self.employees = response.data;
        });
      }]
});