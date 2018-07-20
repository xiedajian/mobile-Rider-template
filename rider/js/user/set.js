//开关效果
$('.switch').toggle(function(){
	$(this).find('i').css({'transition':'all .5s','left':'23px','background':'url(../../img/user/checked.png) no-repeat','background-size':' 23px 23px'});
	$(this).css({'background':'#6a4a23','border': '2px solid #6a4a23','transition':'all .5s'});
},function(){
	$(this).find('i').css({'transition':'all .5s','left':'-2px','background':'url(../../img/user/check.png) no-repeat','background-size':' 23px 23px'});
	$(this).css({'background':'#f3f3f3','border': '2px solid #dedede','transition':'all .5s'});
})