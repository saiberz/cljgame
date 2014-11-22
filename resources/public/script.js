var app = angular.module("MyApp", ["ngResource"]);

app.controller("init",function ($scope,$resource){
    var actual = [];
    var WordAPI = $resource("http://randomword.setgetgo.com/get.php",
                            { callback: "JSON_CALLBACK" },
                            { get: { method: "JSONP" }});
    var audioElement = document.getElementById('audio');
    var newWord = function newWord (){
        WordAPI.get().$promise.then(
            function(data){
                WordsList.push(data.Word);                
            }
        );
    };
    newWord();        

    $scope.Start = function() {
        actual = WordsList[0];
        text.setText(actual);
        window.setInterval(function(){
            if(WordsList.length < 10) {newWord();}
        }, 1000);
    };
    $scope.keypress = function(keyEvent) {
        if(keyEvent.key ==  actual[0]){
            actual = actual.substr(1,actual.length);
            if(actual.length == 2){
                WordsList.splice(0,1);
                text.position.x = Math.random()*600;
                actual = WordsList[0];
            }
        }
        else {
            audioElement.currentTime = 0;
            audioElement.play();
        }
        text.setText(actual);
        renderer.render(stage);
        
    };
});
