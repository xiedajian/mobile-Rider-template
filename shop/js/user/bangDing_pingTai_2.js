
$('.btn').on('tap', function() {
		if($('#phone').val() == '' && $('#Vcode').val() == '') {
			mui.alert('请输入手机号和验证码！');
		} 
		else if($('#phone').val() == '') {
			mui.alert('请输入手机号！');
		} 		
		else if($('#Vcode').val() == ''){
			mui.alert('请输入验证码！');
		}
		else if($('#phone').val() != '' && $('#Vcode').val() != '') {
			mui.alert('绑定成功');
	    }
				
	})
		

