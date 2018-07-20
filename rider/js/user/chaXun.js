window.onload=function(){
	$('.search').focus();
}
$('.search').focus(function(){
	$('.clear_icon').css('display','block')
})
$('.search').blur(function(){
	$('.clear_icon').css('display','none')
})
$('.clear_icon').on('tap',function(){
	$('.search').val(' ');
})
//
var hei=$('.mui-content').height()-42;
var hei1=$('body').height()-86;
if(hei<$('body').height()){
	$('.nav_txt').css('height',hei1);
}
else{
	$('.nav_txt').css('height',hei);
}
//
$('.reset').on('tap',function(){
	$('.time_top input').val(' ');
})
$('.sure').on('tap',function(){
	$('.nav_txt').css('display','none');
	$('.nav_tit p').find('span').css('color','#333');
	$('.nav_tit p').find('img').attr('src','../../img/user/dianji.png');
	of=true;
})
$('.pingTai_choose li').on('tap',function(){
	$('.nav_txt').css('display','none');
	$('.nav_tit p').find('span').css('color','#333');
	$('.nav_tit p').find('img').attr('src','../../img/user/dianji.png');
	of=true;
})
//
$(document).on('tap',function(e){
	if(e.target.className=='nav_txt'){
		$('.nav_txt').css('display','none');
		$('.nav_tit p').find('span').css('color','#333');
	    $('.nav_tit p').find('img').attr('src','../../img/user/dianji.png');
	    of=true;
	}
})
//
var of=true;
$('.nav_tit p').on('tap',function(){
	if(of){		
		$('.nav_tit p').find('span').css('color','#333');
		$('.nav_tit p').find('img').attr('src','../../img/user/dianji.png');	
		$(this).find('span').css('color','#6A4A23');
		$(this).find('img').attr('src','../../img/user/dianji_2.png');
		$('.nav_txt').css('display','block');
		$('.nav_txt>div').css('display','none');
		$('.nav_txt').children().eq($(this).index()).css('display','block');
		of=false;
	}else{
		$('.nav_txt').css('display','none');
		$('.nav_tit p').find('span').css('color','#333');
	    $('.nav_tit p').find('img').attr('src','../../img/user/dianji.png');
	    of=true;
	}
	
})
//
mui.init({
	pullRefresh: {
		container: '#pullrefresh',
		down: {
			callback: pulldownRefresh
		},
		up: {
			contentrefresh: '正在加载...',
			callback: pullupRefresh
		}
	}
});
/**
 * 下拉刷新具体业务实现
 */
function pulldownRefresh() {
	setTimeout(function() {
		history.go(0) 
//		mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //refresh completed
	}, 1500);
}
var count = 0;
/**
 * 上拉加载具体业务实现
 */
function pullupRefresh() {
	setTimeout(function() {
		mui('#pullrefresh').pullRefresh().endPullupToRefresh((++count > 2)); //参数为true代表没有更多数据了。
		for (var i = 0; i < 3; i++) {
             $('.main_two_list').append('<div><p><span>6/12</span><span>2017</span></p><p class="mui-ellipsis">[美团]订单编号0000000000000000000</p><p>+￥10.00</p></div>')
		}
	}, 1500);
}
//日期
$('.sr').on('tap',function(){
	var dtPicker = new mui.DtPicker({
		type:'date'
	});
    dtPicker.show(function (selectItems) {      
        var year=selectItems.y.text;
        var month=selectItems.m.text;
        var day=selectItems.d.text;
        $('.year').val(year);
	    $('.month').val(month);
	    $('.day').val(day);        
    })   
})
$('.sr1').on('tap',function(){
	var dtPicker = new mui.DtPicker({
		type:'date'
	});
    dtPicker.show(function (selectItems) {      
        var year=selectItems.y.text;
        var month=selectItems.m.text;
        var day=selectItems.d.text;
        $('.year1').val(year);
	    $('.month1').val(month);
	    $('.day1').val(day);        
    })   
})
