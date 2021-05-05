var app = angular.module('myApp',[]);

app.controller('myCtrl', function($scope){
   $scope.edit ="Edit me.";
  
   $scope.pokazi = function($event){
      $event.stopPropagation();
      $event.preventDefault();
      $scope.toggle = true;    
}

$scope.gasi = function($event){
   if(EventTarget.class !== 'ok')
   $scope.toggle = false;
}
})
 

