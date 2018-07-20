$('.ping_tai').on('tap',function(){
	var img_src;
	var span_html;
	$('.pingTai_pop').css('display','block');
	$('.pingTai_pop p').on('tap',function(){
		$('.pingTai_pop').css('display','none');
		img_src=$(this).find('img').attr('src');
		img_lengh=$(this).find('img').css('width');
		span_html=$(this).find('span').html();
		$('.ping_tai .txt').html('');
		$('.ping_tai .txt').append('<img src='+img_src+' style="width:'+img_lengh+'"/>');
	    $('.ping_tai .txt').append('<span>'+span_html+'</span>');
	});
	
})

//
$('.bei_zhu').on('tap',function(){
	var span_html;
	$('.beizhu_pop').css('display','block');
	$('.beizhu_pop p').on('tap',function(){
		$('.beizhu_pop').css('display','none');	
		span_html=$(this).html();
		$('.bei_zhu .txt').html('');
	    $('.bei_zhu .txt').append('<span>'+span_html+'</span>');
	});
	
})

//
$(document).on('tap',function(e){
	if(e.target.className=='pingTai_pop'){
		$('.pingTai_pop').css('display','none');
	}	
	if(e.target.className=='beizhu_pop'){
		$('.beizhu_pop').css('display','none');
	}	
})
//输入框获取焦点带￥符号
$('.pri').focus(function(){
	if($(this).val().indexOf('￥')==-1){
		$(this).val('￥'+$(this).val());
	}else{
		$(this).val($(this).val());
	}
	
})
