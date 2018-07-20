
///
$('.lishi_txt li').toggle(function(){
	$(this).find('img').attr('src','../../img/enter/shoucang3.png');
},function(){
	$(this).find('img').attr('src','../../img/enter/shoucang4.png');
})
////
$('.clear').on('tap',function(){
	$('.lishi_txt li').remove();
	$('#r-result').css('display','none')
})
//
$('.search').focus(function(){
	$('.clear_icon').css('display','block');
	$('.liebiao_main').css('display','block');
	$('.lishi_main').css('display','none');
})
$('.search').blur(function(){
	$('.clear_icon').css('display','none');	
	$('.liebiao_main').css('display','none');
	$('.lishi_main').css('display','block');
})
$('.clear_icon').on('tap',function(){
	$('.search').val(' ');
})
			
 var map = new AMap.Map("allmap", {
        resizeEnable: true
    });
    //输入提示
    var auto = new AMap.Autocomplete({
        input: "suggestId"
    });