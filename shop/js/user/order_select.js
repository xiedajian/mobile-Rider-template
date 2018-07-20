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
setInterval(function(){
	var hei=$('.mui-content').height();
	var hei1=$('body').height();
	if(hei<$('body').height()){
		$('.nav_txt').css('height',hei1);
		$('.del_pop').css('height',hei1);
	}
	else{
		$('.nav_txt').css('height',hei);
		$('.del_pop').css('height',hei);
	}
})

//
$('.reset').on('tap',function(){
	$('.time_top input').val(' ');
})
$('.sure').on('tap',function(){
	$('.nav_txt').css('display','none');
	$('.nav_tit p').find('span').css('color','#333');
	$('.nav_tit p').find('img').attr('src','../../img/user/dianji.png');
})
$('.pingTai_choose li').on('tap',function(){
	$('.nav_txt').css('display','none');
	$('.nav_tit p').find('span').css('color','#333');
	$('.nav_tit p').find('img').attr('src','../../img/user/dianji.png');
})
//
$(document).on('tap',function(e){
	if(e.target.className=='nav_txt'){
		$('.nav_txt').css('display','none');
		$('.nav_tit p').find('span').css('color','#333');
	    $('.nav_tit p').find('img').attr('src','../../img/user/dianji.png');
	}
})
//
$('.nav_tit p').on('tap',function(){
	$('.nav_tit p').find('span').css('color','#333');
	$('.nav_tit p').find('img').attr('src','../../img/user/dianji.png');	
	$(this).find('span').css('color','#6A4A23');
	$(this).find('img').attr('src','../../img/user/dianji_2.png');
	$('.nav_txt').css('display','block');
	$('.nav_txt>div').css('display','none');
	$('.nav_txt').children().eq($(this).index()).css('display','block');
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
             $('.main_two').append('<div><p class="main_tit">本月</p><div class="main_two_list"><div class="two_list_top link" data-link="finished_order_select.html"><p><img src="../../img/user/meituan.png"/></p><p><span>美团外卖</span><span class="mui-ellipsis">000000000000000</span></p><p><span>2017-6-16</span><span>10:13</span></p></div><div class="two_list_mid link" data-link="finished_order_select.html"><div><p>取</p><p><span class="mui-ellipsis">杨国福麻辣烫</span><span class="mui-ellipsis">中原国家产业园2号楼厚街店铺</span></p></div><div><p>送</p><p class="mui-ellipsis">中原国家广告产业园7号楼3层</p></div></div><div class="two_list_bot"><p class="del">删除</p></div></div></div>')
		}
	}, 1500);
}
//删除事件
var index;
$(document).on('tap','.del',function(){
	index=$(this).parent().parent().parent().index();	
	$('.del_pop').css('display','block');
	$('.del_pop .cancel').on('tap',function(){
		$('.del_pop').css('display','none');
	})
	
})
$(document).on('tap','.del_pop .enter',function(){
        $('.main_two').children().eq(index).remove();
		$('.del_pop').css('display','none');
		return false;
})

