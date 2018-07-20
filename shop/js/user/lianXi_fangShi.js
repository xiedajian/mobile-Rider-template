$('.cancel').on('tap',function(){
	$('.keFu_pop').css('display','none')
})
$('.lianxi').on('tap',function(){
	$('.keFu_pop').css('display','block')
})
$('.add').on('tap',function(){
	if($('.top_list').length>1){
		return;
	}else{
		$(this).parent().after('<div class="top_list"><span class="ms">电话2</span><input type="number" name="" id="" value="18000000000" /></div>');
	}
	
	
})