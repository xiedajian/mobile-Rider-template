$('.btn').on('tap', function() {
		if($('#pwd').val() == '' && $('#pwd1').val() == ''&& $('#pwd2').val() == '') {
			mui.alert('均不能为空！');
		} 		
		else if($('#pwd').val() == ''){
			mui.alert('请输入原密码！');
		}
		else if($('#pwd1').val() == ''){
			mui.alert('请输入新密码！');
		}
		else if($('#pwd2').val() == ''){
			mui.alert('请确认新密码！');
		}
		else if($('#pwd').val() != '' && $('#pwd1').val() != ''&& $('#pwd2').val() != '') {
			 var password=$('#pwd1').val();
			
			if(password.length<6){
			     mui.alert("密码长度必须大于六位！");
			}
			else if($('#pwd1').val() != $('#pwd2').val()){
				mui.alert("两次密码不一致");
			}
			else{
				mui.alert('修改密码成功');
				
             }
			
	    }
				
	})