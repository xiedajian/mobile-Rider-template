$('.btn').on('tap', function() {
		if($('#pwd').val() == '' && $('#pwd1').val() == '') {
			mui.alert('均不能为空！');
		} 		
		else if($('#pwd').val() == ''){
			mui.alert('请输入帐号密码！');
		}
		else if($('#pwd1').val() == ''){
			mui.alert('请再次输入账号密码！');
		}		
		else if($('#pwd').val() != '' && $('#pwd1').val() != '') {
			if($('#pwd1').val() != $('#pwd').val()){
				mui.alert("两次密码不一致");
			}
			else{
				mui.alert('取消成功');
				
             }
			
	    }
				
	})