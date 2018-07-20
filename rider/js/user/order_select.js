//input获取、失去焦点事件
$('.search').focus(function(){
	$('.clear_icon').css('display','block')
})
$('.search').blur(function(){
	$('.clear_icon').css('display','none')
})
//单机取消图标，input为空
$('.clear_icon').on('tap',function(){
	$('.search').val(' ');
})
//动态写入遮罩层得高
var hei=$('.mui-content').height()-42;
var hei1=$('body').height()-86;
if(hei<$('body').height()){
	$('.nav_txt').css('height',hei1);
}
else{
	$('.nav_txt').css('height',hei);
}
//重置
$('.reset').on('tap',function(){
	$('.time_top input').val(' ');
})
//确定
$('.sure').on('tap',function(){
	$('.nav_txt').css('display','none');
	$('.nav_tit p').find('span').css('color','#333');
	$('.nav_tit p').find('img').attr('src','../../img/user/dianji.png');
	of=true;
})
//平台筛选li
$('.pingTai_choose li').on('tap',function(){
	$('.nav_txt').css('display','none');
	$('.nav_tit p').find('span').css('color','#333');
	$('.nav_tit p').find('img').attr('src','../../img/user/dianji.png');
	of=true;
})
//单击遮罩层弹框消失
$(document).on('tap',function(e){
	if(e.target.className=='nav_txt'){
		$('.nav_txt').css('display','none');
		$('.nav_tit p').find('span').css('color','#333');
	    $('.nav_tit p').find('img').attr('src','../../img/user/dianji.png');
	    of=true;
	}
})
//时间筛选，平台筛选单机时间
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
             $('.main_two').append('<div><p class="main_tit">本月</p><div class="main_two_list"><div class="two_list_top link" data-link="wanCheng_order_detail.html"><p><img src="../../img/user/meituan.png"/></p><p><span>美团外卖</span><span class="mui-ellipsis">000000000000000</span></p><p><span>2017-6-16</span><span>10:13</span></p></div><div class="two_list_mid link" data-link="wanCheng_order_detail.html"><div><p>取</p><p><span class="mui-ellipsis">杨国福麻辣烫</span><span class="mui-ellipsis">中原国家产业园2号楼厚街店铺</span></p></div><div><p>送</p><p class="mui-ellipsis">中原国家广告产业园7号楼3层</p></div></div><div class="two_list_bot"><p class="del">删除</p></div></div></div>')
		}
	}, 1500);
}
//删除事件
$(document).on('tap','.del',function(){
	$(this).parent().parent().parent().remove();
})
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
