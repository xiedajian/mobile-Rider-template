$('.main_one p').on('tap',function(){
	$('.rao img').attr('src','../../img/user/radio.png');
	$(this).find('.rao img').attr('src','../../img/user/radioed.png');
})
//
$('.main_two').focus(function(){
	$('.main_fore').css('display','none');
	if($(this).val().indexOf('￥')==-1){
		$(this).val('￥'+$(this).val());
	}else{
		$(this).val($(this).val());
	}
})
$('.main_two').blur(function(){
	$('.main_fore').css('display','block');
})
