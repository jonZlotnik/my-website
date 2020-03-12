'use strict';
angular
    .module("Members", []) 
    .controller("MembersController" , function($scope) {
    
     $scope.users = [];
     $scope.selectedUser = null;
    
     $scope.ViewProfile = function(user) {
                         $scope.selectedUser = user;
        document.getElementById("MemberList").style.display = "none";
        document.getElementById("MemberDisplay").style.display = "block";
        document.getElementById("BackBtn").style.display = "block";
    }
     
     $scope.Back = function() {
        document.getElementById("MemberList").style.display = "block";
        document.getElementById("MemberDisplay").style.display = "none";
        document.getElementById("BackBtn").style.display = "none";
     }
    
    var DatabaseNode = "GammaLambda";
     function GetUsers() {
            if(navigator.onLine){
                console.log("Getting users...");
                GetUsersInternal();
            }
            else {
                console.log("No internet connection detected");
                return null;
            }
        }

        function GetUsersInternal() {
            
         var idRef = firebase.database().ref(DatabaseNode+"/Users");
         idRef.once('value', snapshot => {  
             var users = [];
             snapshot.forEach(user => {
                 var userObj = {
                     Username: user.child("Username").val(),
                     First_Name: user.child("First Name").val(),
                     Last_Name: user.child("Last Name").val(),
                     Birthday: user.child("Birthday").val(),
                     BrotherName: user.child("BrotherName").val(),
                     Contribution: user.child("None").val(),
                     Degree: user.child("Degree").val(),
                     Email: user.child("Email").val(),
                     Grad: user.child("GraduationDate").val(),
                     ImageURL: user.child("Image").val(),
                     NotificationId: user.child("NotificationId").val(),
                     Position: user.child("Position").val(),
                     School: user.child("School").val(),
                     UserId: user.child("UserID").val
                 };
                 users.push(userObj);
             });
             
             $scope.$apply(function () {
                $scope.users = users;
             });
             
         });

         }
            GetUsers();
});
    
