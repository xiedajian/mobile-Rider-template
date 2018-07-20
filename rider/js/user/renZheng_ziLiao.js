
//
$('.xingbie').on('tap',function(){
	$('.xingbie_pop').css('display','block');			
})
$('.nan').on('tap',function(){
	$('.ok').remove();
	$('.nan').find('.radio').css('border','1px solid #ccc');
	$(this).find('.radio').append('<img src="../../img/enter/checked.png" class="ok"/>');
	$(this).find('.radio').css('border','1px solid #fff');
	var xingb=$(this).find('.xb_txt').html();
	$('.xingbie').find('.bot2').html(xingb);  
	setTimeout(function(){
		$('.xingbie_pop').css('display','none');
	},500)
	
})
