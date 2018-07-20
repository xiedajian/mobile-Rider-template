var hei=$('body').height();
console.log(hei);
$('input').focus(function(){				
	$('.mui-content').css('height',hei);
	$('body').css('height',hei);
	console.log(hei);
})
//$('#Vcode').focus(function(){
//	$('.mui-content').css({'top':'-65px','transition':'all .5s'});
//})
//$('#Vcode').blur(function(){
//	$('.mui-content').css({'top':'0','transition':'all .5s'});
//})
//$('#password').focus(function(){
//	$('.mui-content').css({'top':'-130px','transition':'all .5s'});
//})
//$('#password').blur(function(){
//	$('.mui-content').css({'top':'0','transition':'all .5s'});
//})
//$('#password1').focus(function(){
//	$('.mui-content').css({'top':'-195px','transition':'all .5s'});
//})
//$('#password1').blur(function(){
//	$('.mui-content').css({'top':'0','transition':'all .5s'});
//})
$('.register').on('tap', function() {
		if($('#phone').val() == '' && $('#password').val() == ''&& $('#Vcode').val() == '' && $('#area').html() == '') {
			alert('均不能为空！');
		} 
		else if($('#area').html() == ''){
			alert('请选择地址！');
		}
		else if($('#phone').val() == '') {
			alert('请输入手机号！');
		}
		else if($('#Vcode').val() == ''){
			alert('请输入验证码！');
		}
		else if($('#password').val() == ''){
			alert('请输入登录密码！');
		}		
		else if($('#phone').val() != '' && $('#password').val() != ''&& $('#area').html() != ''&& $('#Vcode').val() != '') {
			 var password=$('#password').val();
			 var phone = document.getElementById('phone').value;
		   if(!(/^1(3|4|5|7|8)\d{9}$/.test(phone))) {
			     alert("手机号码有误，请重填");		
		    }
			else if(password.length<6){
			     alert("密码长度必须大于六位！");
			}								
			else{
				alert('注册成功');
				mui.openWindow({
					url: '../../html/order/order.html',
					id: '../../html/order/order.html',
					show: {
						aniShow: 'zoom-fade-out',
						duration: 300
					}
				})
				
             }
			
	    }
				
	})
var of=true;
$(document).on('tap','.mui-icon-eye',function(){
  if(of){
  	$('.mui-icon-eye').css({'background':'url(../../img/enter/View-co@2x.png) no-repeat','background-size':'15px 11px'});
  	of=false;
  }else{
  	$('.mui-icon-eye').css({'background':'url(../../img/enter/View@2x.png) no-repeat','background-size':'15px 11px'});
  	of=true;
  }

})