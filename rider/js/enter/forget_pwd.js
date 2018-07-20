
$('.btn').on('tap', function() {
				if($('#phone').val() == ''&&$('#Vcode').val() == '') {
					
					$('.tip').html('均不为空！');
					$('.com_pop').css('display','block');
				} else if($('#phone').val() == '') {
					
					$('.tip').html('请输入手机号！');
					$('.com_pop').css('display','block');
				} else if($('#Vcode').val() == '') {
					
					$('.tip').html('请确认验证码！');
					$('.com_pop').css('display','block');
				}else if($('#Vcode').val() != ''&&$('#phone').val() != '') {
					var phone = $('#phone').val();
					if(!(/^1(3|4|5|7|8)\d{9}$/.test(phone))) {
						     alert("手机号码有误，请重填");		
					}else{											   
						 $('.com_pop').css('display','none');
						 mui.openWindow({
								url: 'forget_pwd_1.html',
								id:  'forget_pwd_1.html',
								show: {
									aniShow: 'zoom-fade-out',
									duration: 300
								}
							})
						
					}
			
				}
			
			})
			$('.enter').on('tap',function(){
				 $('.com_pop').css('display','none');
				 
			})