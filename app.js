angular.module("services", []).factory("memo", function() {
  var memo = this;
  return memo;
});

angular.module("memo", []).controller("memoCtrl", function($scope, $http) {
  $http.get("data/champions.json").then(function(response) {
    $scope.champions = Object.values(response.data.data);
    $scope.cards = [];
    for (let i = 0; i < 3; i++) {
      var id = Math.floor(Math.random() * ($scope.champions.length - 1));
      //console.log($scope.champions[id].name);
      $scope.cards.push($scope.champions[id].key);

      
    }
    console.log("Heroes: "+ $scope.cards);

    /* Double loop to get pairs of cards*/
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 3; j++) {
        generateCard($scope.cards[j], i);
        //console.log($scope.cards);
      }
      $scope.cards = shuffle($scope.cards);
    }

   
  });

  //console.log($scope.champions);
});

function generateCard(name, num) {
  $(".playboard").append(
    '<div class="col-lg-3 col-md-4 col-xs-6 card"><figure class="thumbnail" href="#"><img class="img-responsive" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/' +
      name +
      "_" +
      num +
      '.jpg" alt=""><div class="champName">' +
      name +
      "</div></figure></div>"
  );
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

