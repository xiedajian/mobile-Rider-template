var hei=$('.two_list_three ul li').length*25+10;
console.log(hei);
$('.more').toggle(function(){
	$('.two_list_three ul').css({'height':hei,'transition':'all 0.5s'});
	$('.two_list_three ul').css({'height':hei,'-webkit-transition':'all 0.5s'});
	$(this).find('span').html('点击收起');
	$(this).find('img').css({'transform':'rotate(180deg)','transform-origin':'center'});
	
},function(){
	$('.two_list_three ul').css({'height':'55px','transition':'all 0.5s'});
	$('.two_list_three ul').css({'height':'55px','-webkit-transition':'all 0.5s'});
	$(this).find('span').html('展开更多');
	$(this).find('img').css({'transform':'rotate(0deg)','transform-origin':'center'});
})
