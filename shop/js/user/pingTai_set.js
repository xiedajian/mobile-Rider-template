$('.switch').toggle(function(){
	$(this).find('i').css({'transition':'all .5s','left':'25px'});
	$(this).css({'background':'#6a4a23','transition':'all .5s'});
},function(){
	$(this).find('i').css({'transition':'all .5s','left':'2px'});
	$(this).css({'background':'#999','transition':'all .5s'});
})
