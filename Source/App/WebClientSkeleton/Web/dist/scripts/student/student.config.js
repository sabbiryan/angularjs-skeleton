"use strict";angular.module("myApp",["ngRoute","ngResource"]).config(["$routeProvider",function(t){t.when("/student-list",{templateUrl:"views/student/student-list/student-list.tpl.html",controller:"StudentListController"}).when("/student-manage",{templateUrl:"views/student/student-manage/student-manage.tpl.html",controller:"StudentManageController"})}]);