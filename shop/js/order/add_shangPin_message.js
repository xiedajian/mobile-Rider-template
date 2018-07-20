
function aa(obj){
	obj.blur(function(){
		$('.btn').css('display','block');
		if($('.spmc').val()!=''&&$('.spdj').val()!=''&&$('.spsl').val()!=''){
			if($('.message_list').css('marginBottom')=='0px'){
				$('.message_list').css('marginBottom','10px');				
			}
			
				$('.message_list').prepend('<p><span class="ms">商品信息</span><span class="mui-ellipsis mc">'+$('.spmc').val()+'</span><span>x'+$('.spsl').val()+'</span><span>￥'+$('.spdj').val()+'</span></p>');
			
						
		}
	})
	obj.focus(function(){
		$('.btn').css('display','none');
	})
}

aa($('.spsl'));aa($('.spdj'));aa($('.spmc'));
$('.contain').on('tap',function(){
	$('input').val(' ');
})
 $('.del').on('tap',function(){
 	$('.mc').css('width','35%');
 	$('.message_list p').append('<span class="delete">删除</span>');
    $('.delete').on('tap',function(){
    	$(this).parent().remove();
    })
 })
