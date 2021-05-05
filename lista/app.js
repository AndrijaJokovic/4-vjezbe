var app = angular.module('myApp',[]);

app.controller('myCtrl', function($scope){
  $scope.lista = [
      {
      name: 'Web Development',
      price: 300,
      active:false
      },
      {
      name: 'Desing',
      price: 400,
      active:false
      },
      {
      name: 'Integration',
      price: 250,
      active:false
      },
      {
      name: 'Training',
      price: 220,
      active:false
      }
  ];
  $scope.switch = function($event){
    
    if(this.item.active === true){
      this.item.active = false;
    }else{
      this.item.active = true;
    };
  };

    $scope.total= function($event){
      
      let totall=0;
        angular.forEach($scope.lista, function(item){
          if(item.active === true){
            totall+=item.price;
            
          } 
        })
        
        return totall;
       }


  }
)