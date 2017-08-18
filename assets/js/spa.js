<script>
  angular.module('homepage',[]);
  angular.module('homepage').controller('base',['$scope',function($scope){
    $scope.things = [{
      id: 34343,
      name:'foo'
    }]
  }]);
</script>