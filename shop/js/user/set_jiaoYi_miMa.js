$('.btn').on('tap', function() {
		if($('#phone').val() == '' && $('#psd1').val() == ''&& $('#psd').val() == ''&& $('#Vcode').val() == '') {
			mui.alert('均不能为空！');
		} 		
		else if($('#phone').val() == ''){
			mui.alert('请输入手机号！');
		}
		else if($('#Vcode').val() == ''){
			mui.alert('请输入验证码！');
		}
		else if($('#psd').val() == ''){
			mui.alert('请输入新密码！');
		}
		else if($('#psd1').val() == ''){
			mui.alert('请确认新密码！');
		}
		else if($('#phone').val() != '' && $('#psd').val() != ''&& $('#psd1').val() != ''&& $('#Vcode').val() != '') {
			 var password=$('#psd').val();
			 var phone = $('#phone').val();
			if(password.length<6){
			     mui.alert("密码长度必须大于六位！");
			}
			else if(!(/^1(3|4|5|7|8)\d{9}$/.test(phone))){
				mui.alert('手机号有误，请重新输入')
			}
			else if($('#psd').val() != $('#psd1').val()){
				mui.alert("两次密码不一致");
			}
			else{
				mui.alert('修改密码成功');
				
             }
			
	    }
				
	})