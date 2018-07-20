//header条上的变化
setInterval(function(){
	$('.a').each(function(a,b){
		if($(this).hasClass('mui-active')){
            $('.b').css({'border-bottom':'3px solid #fff','color':'#333'}) ;
            $('.mui-title').children().eq(a).css({'border-bottom':'3px solid #6a4a23','color':'#6a4a23'});
	}
		})
	},10)
//获取高度
var hei=$('.mui-content').height();
var hei1;
setInterval(function(){
	hei1=$('body').height();
	$('.tiaojian_txt').css('height',hei1);		
})

//遮罩层
$('#item1mobile').css('height',hei);//新任务
$('#item2mobile').css('height',hei);//待取货
$('#item3mobile').css('height',hei);//配送中
//单机距离筛选
var of=true;
$('.tiaojian_tit').on('tap',function(){
	if(of){
		$('.tiaojian_txt').css('display','block');
		$('.tiaojian_tit').find('img').css({'transform':' rotate(180deg)','-webkit-transform':' rotate(180deg)'})
		$('.tiaojian_txt span').on('tap',function(){			
			$('.tiaojian_txt').css('display','none');		
			$('.tiaojian_tit').find('img').css({'transform':' rotate(0deg)','-webkit-transform':' rotate(0deg)'})
		    of=true;
		});
		of=false;
	}else{
		$('.tiaojian_txt').css('display','none');		
		$('.tiaojian_tit').find('img').css({'transform':' rotate(0deg)','-webkit-transform':' rotate(0deg)'})
	    of=true;
	}
	
})
//单机遮罩层
$(document).on('tap',function(e){
	if(e.target.className=='tiaojian_txt'){
		$('.tiaojian_txt').css('display','none');
		$('.tiaojian_tit').find('img').css({'transform':' rotate(0deg)','-webkit-transform':' rotate(0deg)'})
	    of=true;
	}
})
//单机左上角图标下拉框也要消失（单击下拉框没有收回的状态下，在单机小人进入下一页，载返回来回=会没有收回，所以要进行设置一下）
$('.left').on('tap',function(e){
	$('.tiaojian_txt').css('display','none');
	$('.tiaojian_tit').find('img').css({'transform':' rotate(0deg)','-webkit-transform':' rotate(0deg)'})
    of=true;
	
})
//阻尼系数
var deceleration = mui.os.ios ? 0.003 : 0.0009;
mui('.mui-scroll-wrapper').scroll({
	bounce: false,
	indicators: true, //是否显示滚动条
	deceleration: deceleration
});
mui.ready(function() {
	//循环初始化所有下拉刷新，上拉加载。
	mui.each(document.querySelectorAll('.mui-slider-group .mui-scroll'), function(index, pullRefreshEl) {
		mui(pullRefreshEl).pullToRefresh({
			down: {
				contentdown : "下拉可以刷新",//可选，在下拉可刷新状态时，下拉刷新控件上显示的标题内容
			    contentover : "释放立即刷新",//可选，在释放可刷新状态时，下拉刷新控件上显示的标题内容
			    contentrefresh : "正在刷新...",//可选，正在刷新状态时，下拉刷新控件上显示的标题内容
				callback: function() {
					var self = this;
					setTimeout(function() {
						var div = self.element.querySelector('.aa');
						div.insertBefore(createFragment(div, index, 10, true), div.firstChild);
						self.endPullDownToRefresh();
					}, 1000);
				}
			},
			up: {
				callback: function() {
					var self = this;
					setTimeout(function() {
						var div = self.element.querySelector('.aa');
						div.appendChild(createFragment(div, index, 5));
						self.endPullUpToRefresh();
					}, 1000);
				}
			}
		});
	});
	var createFragment = function(div, index, count, reverse) {
		if(index == 0) {
			var length = div.querySelectorAll('div').length;
			var fragment = document.createDocumentFragment();
			var div1;
			for(var i = 0; i < count; i++) {
				div1 = document.createElement('div');
				div1.className = 'item1_main';
				div1.innerHTML = '<div class="item1_main_one link" data-link="xinRenWu_detail.html"><div class="item1_one_top"><p><img src="../../img/order/logoxiao.png"/></p><p><span>捷速外卖</span><span>00000000000000000</span></p><p>顺路</p></div><div class="item1_one_mid"><p><span><b>13.00</b>元</span><span>本单收入</span></p><p><span><b>45</b>分钟内</span><span>期望送达时间</span></p></div><div class="item1_one_bot">基础费用 <span>8.00</span>元+特殊天气费用 <span>5.00</span>元</div></div> <div class="item1_main_one link" data-link="xinRenWu_detail.html"><div class="item1_two_top"><p>取</p><p><span>杨国福麻辣烫</span><span class="mui-ellipsis">中原国家产业园2号楼厚街店铺</span></p><p>0.53km</p></div><div class="item1_two_bot"><p>送</p><p>中原国家产业园7号楼3层</p><p>0.8km</p></div></div><div class="item1_main_three"><p>餐费未支付</p></div> <div class="item1_main_fore"><p class="qiang">抢单</p></div>';
				fragment.appendChild(div1);
			}
			return fragment;
		}
		if(index == 1) {
			var length = div.querySelectorAll('div').length;
			var fragment = document.createDocumentFragment();
			var div1;
			for(var i = 0; i < count; i++) {
				div1 = document.createElement('div');
				div1.className = 'item1_main';
				div1.innerHTML = '<div class="item1_main_two link" data-link="daiQuHuo_detail.html"><div class="item1_one_top"><p><img src="../../img/order/logoxiao.png"/></p><p><span>捷速外卖</span><span>00000000000000000</span></p></div><div class="item1_one_mid"><p><span><b>13.00</b>元</span><span>本单收入</span></p><p><span><b>45</b>分钟内</span><span>期望送达时间</span></p></div><div class="item1_one_bot">基础费用 <span>8.00</span>元+特殊天气费用 <span>5.00</span>元</div></div> <div  class="item1_main_two link" data-link="daiQuHuo_detail.html"><div class="item1_two_top"><p>取</p><p><span>杨国福麻辣烫</span><span class="mui-ellipsis">中原国家产业园2号楼厚街店铺</span></p><p>查看地图</p></div><div class="item1_two_bot"><p>送</p><p>中原国家产业园7号楼3层</p><p>查看地图</p></div></div><div class="item1_main_fore"><p class="link" data-link="shangChuan_pic.html">已取货</p></div>';
				fragment.appendChild(div1);
			}
			return fragment;
		}
		if(index == 2) {
			var length = div.querySelectorAll('div').length;
			var fragment = document.createDocumentFragment();
			var div1;
			for(var i = 0; i < count; i++) {
				div1 = document.createElement('div');
				div1.className = 'item1_main';
				div1.innerHTML = '<div  class="item1_main_two link"  data-link="peiSongZhong_detail.html"><div class="item1_one_top"><p><img src="../../img/order/logoxiao.png"/></p><p><span>捷速外卖</span><span>00000000000000000</span></p></div><div class="item1_one_mid"><p><span><b>13.00</b>元</span><span>本单收入</span></p><p><span><b>45</b>分钟内</span><span>期望送达时间</span></p></div><div class="item1_one_bot">基础费用 <span>8.00</span>元+特殊天气费用 <span>5.00</span>元</div></div> <div  class="item1_main_two link"  data-link="peiSongZhong_detail.html"><div class="item1_two_top"><p>取</p><p><span>杨国福麻辣烫</span><span class="mui-ellipsis">中原国家产业园2号楼厚街店铺</span></p><p>查看地图</p></div><div class="item1_two_bot"><p>送</p><p>中原国家产业园7号楼3层</p><p>查看地图</p></div></div><div class="item1_main_fore"><p class="yisongda">已送达</p></div>';
				fragment.appendChild(div1);
			}
			return fragment;
		}
		
		
		
	};
});
//一个显示状态，可不要
setTimeout(function(){
	$('nav').css('display','none');
	$('.zhuangtai1').css('display','block');
},1000)
//单机开工，收工
$('.zhuangtai').toggle(function(){
//	$('.zhuangtai1').css({'transform':'scale(0) rotate(360deg)','transition':'all .3s'});
//	$('.zhuangtai1').css({'-webkit-transform':'scale(0) rotate(360deg)','transition':'all .3s'});
//	setTimeout(function(){
//		 $('.zhuangtai1').css({'transform':'scale(1) rotate(0deg)','transition':'all .3s'});
//		 $('.zhuangtai1').css({'-webkit-transformtransform':'scale(1) rotate(0deg)','transition':'all .3s'});
//	},300)	
	$('.wkg').css('display','none');
	$('.mui-content').css('display','block');
	$(this).html('收工');
},function(){
//	$('.zhuangtai1').css({'transform':'scale(0) rotate(360deg)','transition':'all .3s'});
//	$('.zhuangtai1').css({'-webkit-transform':'scale(0) rotate(360deg)','-webkit-transition':'all .3s'});
//	setTimeout(function(){
//		 $('.zhuangtai1').css({'transform':'scale(1) rotate(0deg)','transition':'all .3s'});
//		 $('.zhuangtai1').css({'-webkit-transformtransform':'scale(1) rotate(0deg)','-webkit-transition':'all .3s'});
//	},300)	
	$('.wkg').css('display','block');
	$('.mui-content').css('display','none');
	$(this).html('开工');
})
//单机抢单，出现形式一,此处根据情况进行判断，我先给注释掉了
//$(document).on('tap','.qiang',function(){
//	$('.qiangdan_pop').css({'display':'block'});
//	$('.enter').on('tap',function(){
//		$('.qiangdan_pop').css('display','none');
//	})
//})
//单机抢单，出现形式二
$(document).on('tap','.qiang',function(){
	$('.qiangdan_pop1').css({'display':'block'});
	$('.enter').on('tap',function(){
		$('.qiangdan_pop1').css('display','none');
	})
	$('.cancel').on('tap',function(){
		$('.qiangdan_pop1').css('display','none');
	})
})
//单机已送达
$(document).on('tap','.yisongda',function(){
	$('.ysd_pop').css({'display':'block'});
	$('.enter').on('tap',function(){
		$('.ysd_pop').css('display','none');
	})
	$('.cancel').on('tap',function(){
		$('.ysd_pop').css('display','none');
	})
})