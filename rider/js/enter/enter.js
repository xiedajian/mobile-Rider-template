var hei=$('body').height();
$('input').focus(function(){				
	$('.mui-content').css('height',hei);
	$('body').css('height',hei);
})

//$('#phone').focus(function(){
//	$('.mui-content').css({'top':'-65px','transition':'all .5s'});
//})
//$('#phone').blur(function(){
//	$('.mui-content').css({'top':'0','transition':'all .5s'});
//})
$('#password').focus(function(){
	$('.mui-content').css({'top':'-65px','transition':'all .5s'});
})
$('#password').blur(function(){
	$('.mui-content').css({'top':'0','transition':'all .5s'});
})
$('.enter').on('tap', function() {
	window.location.href = '../../html/order/order.html';
	return;
		if($('#phone').val() == '' && $('#password').val() == '') {
			mui.alert('请输入手机号和密码！');
		} 
		else if($('#phone').val() == '') {
			alert('请输入手机号！');
		} 		
		else if($('#password').val() == ''){
			alert('请输入密码！');
		}
		else if($('#phone').val() != '' && $('#password').val() != '') {
			 var password=$('#password').val();
			 var phone = document.getElementById('phone').value;
		   if(!(/^1(3|4|5|7|8)\d{9}$/.test(phone))) {
			     alert("手机号码有误，请重填");		
		    }
			else if(password.length<6){
			     alert("密码长度必须大于六位！");
			}
			else{
				mui.openWindow({
					url:"../../html/order/order.html",
					id: "../../html/order/order.html",
					show: {
						aniShow: 'zoom-fade-out',
						duration: 300
					}
				})
				
             }
			
	    }
				
	})
//密码是否显示
var of=true;
$(document).on('tap','.mui-icon-eye',function(){
  if(of){
  	$('.mui-icon-eye').css({'background':'url(../../img/enter/View@2x.png) no-repeat right 25px','background-size':'15px 11px'});
  	of=false;
  }else{
  	
  	$('.mui-icon-eye').css({'background':'url(../../img/enter/View-co@2x.png) no-repeat right 25px','background-size':'15px 11px'});
  	of=true;
  }

})


