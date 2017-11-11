//加载背景图片
$(function(argument) {
  	$('.banner').css('height',$(document).height()) ;
});
//获得用于显示错误信息的元素
var checkResult=document.querySelector('.check-submit');
checkResult.style.visibility = 'hidden';
var submits =function(){
	//获得name输入框的值
	var nameEle=document.getElementById('InputName');
	var name=nameEle.value;
	//获得密码输入框的值
	var pwdEle=document.getElementById('password');
	var pwd=pwdEle.value;
	//设置参数
	var params='name='+name+'&'+'pwd='+pwd;
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4 ){
			if (xhr.status>=200 &&xhr.status<300 || xhr.status ==304){
		    	console.log(xhr.responseText);
		    	var result =JSON.parse(xhr.responseText);
		        if(result.code ==0){
		       	 location.href="js5-result.html";
		        }else if(result.code == -5004){
		        	//失败后出现红字
		        	checkResult.style.visibility = 'visible';
		        	checkResult.innerHTML='密码错误';
		        
		        } else {
		        	checkResult.style.visibility = 'visible';
		        	checkResult.innerHTML='用户名不存在';
		        }
	    	}  
		}  
	   
	}  
	var url='/carrots-admin-ajax/a/login';
	xhr.open("POST",'/carrots-admin-ajax/a/login',true); 
	xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded"); 
	var form=document.getElementById('form-info');
	xhr.send(params);
};
