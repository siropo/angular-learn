'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {

        $scope.snippet = '<p style="color:red;">Hi there</p>';
        $scope.boolVal = true;
        $scope.myStyle = { 'color': 'red' }
        $scope.myClass = "blue";

        $scope.event = {
            name: 'Angular Name',
            date: '1/1/2013',
            time: '10:30 am',
            location: {
                address: 'Pesho 1',
                city: 'Pernik',
                province: 'Gosho'
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Pesho1',
                    duration: 10,
                    upVoteCount: 0
                },
                {
                    name: 'Gosho',
                    duration: 110,
                    upVoteCount: 0
                },
                {
                    name: 'Vuicho',
                    duration: 120,
                    upVoteCount: 0
                }
            ]
        };

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };
    }
);