"use strict";angular.module("myApp.OrganizationStructure",["ngRoute"]).config(["$routeProvider",function(t){t.when("/organizationStructure",{templateUrl:"views/organizationStructure/organizationStructure.html",controller:"OrganizationStructureCtrl"})}]).controller("OrganizationStructureCtrl",["$rootScope","$scope","$routeParams",function(t,r,n){t.showBanner=!1,r.projects=[],r.init=function(){var t=new AV.Query("Project");t.limit(5),t.equalTo("isRecommended",!0),t.find().then(function(t){r.projects=[],t.forEach(function(t){var n=t.get("image").thumbnailURL(260,160),e=t.get("title"),i=t.get("debitAmount"),o=t.id;r.projects.push({id:o,mainImage:n,title:e,amount:i}),r.$apply()}),r.$apply()}).catch(function(t){alert(JSON.stringify(t))})},r.init()}]);