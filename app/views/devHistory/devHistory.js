"use strict";angular.module("myApp.DevHistory",["ngRoute"]).config(["$routeProvider",function(t){t.when("/devhistory",{templateUrl:"views/devHistory/devHistory.html",controller:"DevHistoryCtrl"})}]).controller("DevHistoryCtrl",["$rootScope","$scope","$routeParams",function(t,e,o){t.showBanner=!1,e.projects=[],e.init=function(){var t=new AV.Query("Project");t.limit(5),t.equalTo("isRecommended",!0),t.find().then(function(t){e.projects=[],t.forEach(function(t){var o=t.get("image").thumbnailURL(260,160),i=t.get("title"),r=t.get("debitAmount"),n=t.id;e.projects.push({id:n,mainImage:o,title:i,amount:r}),e.$apply()}),e.$apply()}).catch(function(t){alert(JSON.stringify(t))})},e.init()}]);