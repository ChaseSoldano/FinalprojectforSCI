app.controller("meetupsController", ["$scope", "$resource", function($scope, $resource){

//  function meetupsController($scope){
var Meetup = $resource("/api/meetups")
Meetup.query(function(results){
  $scope.meetups = results;
})

    // $scope.meetups = []
    // $scope.meetups = [
    //   {name: "MEAN SF DEVELOPERS"},
    //   {name: "some other meetups"}
    // ]
    $scope.createMeetup = function () {
    var meetup = new Meetup ();
    meetup.name=$scope.meetupName;
    meetup.$save(function(result){
      $scope.meetups.push(result);
      $scope.meetupName = "";
    });
    }
  //}
}])


// angular.module("meanapp",[]).controller("meetupsController",meetupsController);
