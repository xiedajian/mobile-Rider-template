
$('.btn').on('tap', function() {
		if($('#phone').val() == '' && $('#password').val() == '') {
			mui.alert('请输入帐号和密码！');
		} 
		else if($('#phone').val() == '') {
			mui.alert('请输入帐号！');
		} 		
		else if($('#password').val() == ''){
			mui.alert('请输入密码！');
		}
		else if($('#phone').val() != '' && $('#password').val() != '') {
			mui.alert('绑定成功');
	    }
				
	})
		

