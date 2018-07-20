//$('.btn').on('tap', function() {
//		if($('#password').val() == '' && $('#password1').val() == '') {
//			alert('请输入密码并进行确认！');
//		} 
//		else if($('#password').val() == '') {
//			alert('请输入密码！');
//		} 		
//		else if($('#password1').val() == ''){
//			alert('请确认密码！');
//		}
//		else if($('#password').val() != '' && $('#password1').val() != '') {
//			if($('#password').val().length<6||$('#password').val().length>16){
//		   	      alert("请输入6-16位密码");	
//		   }
//		   else if($('#password').val()!=$('#password1').val()){
//			     alert("两次密码不一致");		
//		   }else{
//				alert("修改密码成功");	
//				
//           }
//			
//	    }
//				
//	})
$('.btn').on('tap', function() {
				if($('#password').val() == ''&&$('#password1').val() == '') {
					
					$('.tip').html('请输入新密码并进行确认！');
					$('.com_pop').css('display','block');
				} else if($('#password').val() == '') {
					
					$('.tip').html('请输入新密码！');
					$('.com_pop').css('display','block');
				} else if($('#password1').val() == '') {
					
					$('.tip').html('请确认新密码！');
					$('.com_pop').css('display','block');
				} else if($('#password1').val() != $('#password').val()) {
					
					$('.tip').html('两次密码不一致！');
					$('.com_pop').css('display','block');
				} else if($('#password').val() != ''&&$('#password1').val() != '' && $('#password1').val() == $('#password').val()) {
					var password = $('#password').val();
					if(password.length < 6 || password.length > 16) {
						
						$('.tip').html('密码长度必须大于6位并小于16位！');
					    $('.com_pop').css('display','block');
					}else{
						$('.tip').html('修改成功！');
					    $('.com_pop').css('display','block');
					    $('.enter').on('tap',function(){
							 $('.com_pop').css('display','none');
							 mui.openWindow({
									url: '../..//html/enter/enter.html',
									id:  '../..//html/enter/enter.html',
									show: {
										aniShow: 'zoom-fade-out',
										duration: 300
									}
								})
						})
					}
			
				}
			
			})
			$('.enter').on('tap',function(){
				 $('.com_pop').css('display','none');
				 
			})