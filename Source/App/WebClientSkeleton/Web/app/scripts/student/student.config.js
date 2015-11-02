﻿"use-strict";

angular
    .module("myApp")
    .config([
        "$stateProvider", "$urlRouterProvider",
        function($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state("students", {
                    abstract: true,
                    url: "/students",
                    templateUrl: "views/student/student.tpl.html",
                    controller: "StudentController",
                    resolve: {
                        Students: [
                            "StudentListService", function(studentListService) {
                                return studentListService.get();
                            }
                        ]
                    }
                })
                .state("students.list", {
                    url: "",
                    templateUrl: "views/student/student.list/student.list.tpl.html"
                })
                .state("students.detail", {
                    url: "/{studentId:[0-9]{1,4}}",
                    views: {
                        '': {
                            templateUrl: "views/student/student.detail/student.detail.tpl.html",
                            controller: "StudentDetailController"
                        }
                    }
                })
                .state("students.edit", {
                    url: "/{studentId:[0-9]{1,4}}",
                    views: {
                        '': {
                            templateUrl: "views/student/student.manage/student.manage.tpl.html",
                            controller : ["$scope", "utils", "$stateParams", function($scope, utils, $stateParams) {
                                $scope.id = $stateParams.studentId;
                                $scope.student = utils.findById($scope.students, $scope.id);
                            }]
                        }
                    }
                })
                .state("students.create", {
                    url: "/create",
                    views: {
                        '': {
                            templateUrl: "views/student/student.manage/student.manage.tpl.html",
                            controller: "StudentManageController"
                        }
                    }
                });

        }
    ]);