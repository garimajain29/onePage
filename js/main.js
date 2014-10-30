/**
 * Created with JetBrains PhpStorm.
 * User: 090555
 * Date: 10/16/14
 * Time: 10:48 AM
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function(){
    var caro = $('.carousel').carousel({
        interval: 10000 //changes the speed
    })
})
var app = angular.module("app", []);
app.controller("menuController", [ '$scope','$http', function($scope,$http){

    // http request
    $http.get("json/GAME_DETAILS.json").
        success(function(data) {
            $scope.myMenu = data; // $scope.myMenu = data from http
            console.log($scope.myMenu);
        })
    $scope.getmenu =function(){
        $(".menuPop").slideToggle(300);
        $('.carousel').carousel('pause')
    }
    $scope.onMenuItemClick = function(index){
        $(".menuPop").slideUp();
        $(".carousel").carousel(index);
    }

    $scope.hideMe = function(){
        console.log(event.target);
       $(".menuPop").slideUp();
        $('.carousel').carousel({
            interval: 10000 //changes the speed
        })
    }
}])

app.directive('tooltip', function () {
    return {
        restrict:'A',
        link: function(scope, element, attrs)
        {
            $(element)
                .attr('title',scope.$eval(attrs.tooltip))
                .tooltip({placement: "right",animation: true});
        }
    }
})
