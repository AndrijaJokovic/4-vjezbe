var app = angular.module('myApp',[]);

app.controller('myCtrl',function($scope){
    $scope.menus = [
        {'title':'HOME', 'type':1},
        {'title':'PROJECTS','type':1},
        {'title':'SERVICES', 'type':1},
        {'title':'CONTACT', 'type':1}
    ];
    $scope.myFunction = function($event){
        $scope.field = this.meni.title;
         angular.forEach($scope.menus, function(menu){
             menu.type=1;
         })
        this.meni.type=2;
        $scope.style1 ='red';
     
}});
