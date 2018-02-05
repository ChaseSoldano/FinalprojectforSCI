app.controller("booksController", ["$scope", "$resource", function($scope, $resource){

//  function meetupsController($scope){
var Book = $resource("/api/books")
Book.query(function(results){
  $scope.books = results;
})

    // $scope.meetups = []
    // $scope.meetups = [
    //   {name: "MEAN SF DEVELOPERS"},
    //   {name: "some other meetups"}
    // ]
    $scope.createBook = function () {
    var book = new Book ();
    book.name=$scope.bookName;
    book.$save(function(result){
      $scope.books.push(result);
      $scope.bookName = "";
    });
    }
  //}
}])


// angular.module("meanapp",[]).controller("meetupsController",meetupsController);
