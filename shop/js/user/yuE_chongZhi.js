$('.rio').on('tap',function(){
	$('.radio').attr({'src':'../../img/order/xuankuang.png','class':'xuankuang radio'});
	$(this).find('.radio').attr({'src':'../../img/order/xuanzhong.png','class':'xuanzhong radio'});
})
$('.pri').focus(function(){
	if($(this).val().indexOf('￥')==-1){
		$(this).val('￥'+$(this).val());
	}else{
		$(this).val($(this).val());
	}
	
})