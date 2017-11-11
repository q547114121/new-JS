//加载背景图片
$(function (argument) {
	 $('.banner').css('height',$(document).height()) ;
});

angular.module('app',[]).controller('ctrl', ['$scope','$http', function($scope,$http){
	$scope.submit=function(event) {
		$http({
			method:'POST',
			url:'/carrots-admin-ajax/a/login',
			params:{
				name:$scope.name,
				pwd:$scope.pwd
			}
		}).then(function (res) {
			console.log(res.data);
			if(res.data.code ==0){
				location.href="js5-result.html";
			}else if (res.data.code ==-5003) {
				//返回验证信息
				$scope.resError='用户名不存在';
			}else{
				$scope.resError='密码错误';
			}
		},function (res) {
			//打印错误信息
			console.log(res);
		})
	};
}]);