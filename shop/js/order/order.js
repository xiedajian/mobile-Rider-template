//遮罩层高度
//setInterval(function(){
//	var hei1=$('.mui-content').height();
//	if(hei1<$('body').height()){
//	$('.hl_Order_pop').css('height',$('body').height());
//	$('.yc_quxiao_pop').css('height',$('body').height());
//	$('.phone_pop').css('height',$('body').height());
//	$('.quxiao_pop').css('height',$('body').height());
//	$('.qxOrder_pop').css('height',$('body').height());
//	$('.addPay_pop').css('height',$('body').height());
//	$('.jiaoYi_pop').css('height',$('body').height());
//	$('.yc_begin_pop').css('height',$('body').height());
//}else{
//	$('.hl_Order_pop').css('height',hei1);
//	$('.yc_quxiao_pop').css('height',hei1);
//	$('.phone_pop').css('height',hei1);
//	$('.quxiao_pop').css('height',hei1);
//	$('.qxOrder_pop').css('height',hei1);
//	$('.addPay_pop').css('height',hei1);
//	$('.jiaoYi_pop').css('height',hei1);
//	$('.yc_begin_pop').css('height',hei1);
//}

//})	

setInterval(function(){
	if($('#slider').css('display')=='block'&&$('#item1mobile').attr('class')=='mui-slider-item mui-control-content mui-active'){
		$('.btn').css('display','block');
	}else{
		$('.btn').css('display','none');
	}
})	
///拖动悬浮按钮
document.addEventListener('DOMContentLoaded', function() {
	var oDiv = document.getElementById('xuanfu');
	var tX = 0;
	var tY = 0;
	oDiv.addEventListener('touchstart', function(ev) {
		var disX = ev.targetTouches[0].pageX - tX;
		var disY = ev.targetTouches[0].pageY - tY;

		oDiv.addEventListener('touchmove', function(ev) {
			tX = ev.targetTouches[0].pageX - disX;
			tY = ev.targetTouches[0].pageY - disY;
			if(tX < 0) //限制左边，不让它超出左边框
			{
				tX = 0;
			} else if(tX > document.documentElement.clientWidth - oDiv.offsetWidth) //限制右边，不让它超出右边框。计算方式:可视区的宽度-div距离左边的距离
			{
				tX = document.documentElement.clientWidth - oDiv.offsetWidth; // div现所在位置=可视区的宽度-div距离左边的距离
			}

			if(tY < 0) {
				tY = 0;
			} else if(tY > document.documentElement.clientHeight - oDiv.offsetHeight - 44) {
				tY = document.documentElement.clientHeight - oDiv.offsetHeight - 44;
			}

			oDiv.style.WebkitTransform = 'translate(' + tX + 'px,' + tY + 'px)';
		})

		oDiv.addEventListener('touchend', function(ev) {
			oDiv.ontouchmove = null;
			oDiv.ontouchend = null;
		})
		ev.preventDefault();
	}, false);

}, false);

//、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、

(function($) {
	//阻尼系数
	
	var deceleration = mui.os.ios ? 0.003 : 0.0009;
	$('.mui-scroll-wrapper').scroll({
		bounce: false,
		indicators: true, //是否显示滚动条
		deceleration: deceleration
	});
	$.ready(function() {
		//循环初始化所有下拉刷新，上拉加载。
		$.each(document.querySelectorAll('.mui-slider-group .mui-scroll'), function(index, pullRefreshEl) {
			$(pullRefreshEl).pullToRefresh({
				down: {
					callback: function() {											
						var self = this;
						setTimeout(function() {
							var div = self.element.querySelector('.main');
							div.insertBefore(createFragment(div, index, 10, true), div.firstChild);
                            createFragment(index);
							self.endPullDownToRefresh();
						}, 1000);
					}
				},
				up: {
					callback: function() {
						var self = this;
						setTimeout(function() {
							var div = self.element.querySelector('.main');
							div.appendChild(createFragment(div, index, 5));
                            createFragment(index);
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
					div1.className = 'main_two';
					div1.innerHTML='<div class="main_two_list"><div class="two_list_top"><p><img src="../../img/user/meituan.png"/></p><p><span>美团外卖</span><span class="mui-ellipsis">000000000000000</span></p><p class="check"><img src="../../img/order/xuankuang.png" class="wxz"/></p><p class="link look" data-link="order_detail.html">查看详情</p></div><div class="two_list_two tel"><p>配送地址:</p><p><span><i>小明</i><i>18000000000</i><a href="tel:00000000000"><img src="../../img/order/iphone.png" alt="" /></a></span><span class="mui-ellipsis">中原国家广告产业园7号楼3层</span></p></div><div class="two_list_three"><ul><li><span class="mui-ellipsis">西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li><li><span class="mui-ellipsis">西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li><li><span class="mui-ellipsis">西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li><li><span class="mui-ellipsis">西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li><li><span class="mui-ellipsis">西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li><li><span class="mui-ellipsis">西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li><li><span>西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li></ul><p class="more"><span>展开更多</span><img src="../../img/order/xiala.png" alt="" /></p><div class="pay"><p><span>商品费</span><span>￥58</span></p><p><span>商品费</span><span>￥5</span></p></div><div class="zongJi"><span>总计：</span><span>￥61</span></div></div><div class="two_list_five"><p class="publish">发布订单</p><p class="add">追加小费</p><p class="cancel_order">取消订单</p></div></div></div>';
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
					div1.className = 'main_two';
					div1.innerHTML='<div class="main_two_list"><div class="two_list_top"><p><img src="../../img/user/meituan.png"/></p><p><span>美团外卖</span><span class="mui-ellipsis">000000000000000</span></p><p class="link look" data-link="wait_order_detail.html">查看详情</p></div><div class="two_list_two tel"><p>配送地址:</p><p><span><i>小明</i><i>18000000000</i><a href="tel:00000000000"><img src="../../img/order/iphone.png" alt="" /></a></span><span class="mui-ellipsis">中原国家广告产业园7号楼3层</span></p></div><div class="two_list_three"><ul><li><span class="mui-ellipsis">西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li><li><span class="mui-ellipsis">西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li><li><span class="mui-ellipsis">西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li><li><span class="mui-ellipsis">西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li><li><span class="mui-ellipsis">西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li><li><span class="mui-ellipsis">西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li><li><span>西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li></ul><p class="more"><span>展开更多</span><img src="../../img/order/xiala.png" alt="" /></p><div class="pay"><p><span>商品费</span><span>￥58</span></p><p><span>商品费</span><span>￥5</span></p></div><div class="zongJi"><span>总计：</span><span>￥61</span></div></div><div class="two_list_five"><p class="wait">等待抢单<span class="djs"></span></p><p class="add">追加小费</p><p class="cancel_order">取消订单</p></div></div></div>';
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
					div1.className = 'main_two';
					div1.innerHTML='<div class="main_two"><div class="main_two_list"><div class="two_list_top"><p><img src="../../img/user/meituan.png"/></p><p><span>美团外卖</span><span class="mui-ellipsis">000000000000000</span></p><p class="look link" data-link="dqh_order_detail.html">查看详情</p></div><div class="two_list_two tel"><p>配送地址:</p><p><span><i>小明</i><i>18000000000</i><a href="tel:00000000000"><img src="../../img/order/iphone.png" alt="" /></a></span><span class="mui-ellipsis">中原国家广告产业园7号楼3层</span></p></div><div class="two_list_three"><ul><li><span class="mui-ellipsis">西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li><li><span class="mui-ellipsis">西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li><li><span class="mui-ellipsis">西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li><li><span class="mui-ellipsis">西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li><li><span class="mui-ellipsis">西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li><li><span class="mui-ellipsis">西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li><li><span>西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li></ul><p class="more"><span>展开更多</span><img src="../../img/order/xiala.png" alt="" /></p><div class="pay"><p><span>商品费</span><span>￥58</span></p><p><span>商品费</span><span>￥5</span></p></div><div class="zongJi"><span>总计：</span><span>￥61</span></div></div><div class="two_list_fore"><p><img src="../../img/user/touxiang.png"/></p><p class="link" data-link="qiShou_area.html"><span>于师傅 <i>18000000000</i></span> <span>已接单 <i>查看距离</i></span></p><p><a href="tel:00000000000"><img src="../../img/order/iphone.png" alt="" /></a></p><div class="add_order"><p class="link" data-link="add_order.html">追加订单</p></div></div><div class="two_list_five"><p class="cancel_order">取消订单</p></div></div></div>';
					fragment.appendChild(div1);
				}
				return fragment;
			}
			if(index == 3){
				var length =div.querySelectorAll('div').length;
				var fragment =document.createElement('div');
				var div1;
				for(var i=0;i<count;i++){
					div1=document.createElement('div');
					div1.className='main_two';
					div1.innerHTML='<div class="main_two"><div class="main_two_list" style="padding-bottom:10px"><div class="two_list_top"><p><img src="../../img/user/meituan.png"/></p><p><span>美团外卖</span><span class="mui-ellipsis">000000000000000</span></p><p class="look link" data-link="psz_order_detail.html">查看详情</p></div><div class="two_list_two tel"><p>配送地址:</p><p><span><i>小明</i><i>18000000000</i><a href="tel:00000000000"><img src="../../img/order/iphone.png" alt="" /></a></span><span class="mui-ellipsis">中原国家广告产业园7号楼3层</span></p></div><div class="two_list_three"><ul><li><span class="mui-ellipsis">西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li><li><span class="mui-ellipsis">西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li><li><span class="mui-ellipsis">西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li><li><span class="mui-ellipsis">西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li><li><span class="mui-ellipsis">西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li><li><span class="mui-ellipsis">西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li><li><span>西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li></ul><p class="more"><span>展开更多</span><img src="../../img/order/xiala.png" alt="" /></p><div class="pay"><p><span>商品费</span><span>￥58</span></p><p><span>商品费</span><span>￥5</span></p></div><div class="zongJi"><span>总计：</span><span>￥61</span></div></div><div class="two_list_fore"><p><img src="../../img/user/touxiang.png"/></p><p class="link" data-link="qiShou_area.html"><span>于师傅 <i>18000000000</i></span><span>配送中 <i>查看距离</i></span></p><p class="tel"><a href="tel:00000000000"><img src="../../img/order/iphone.png" alt="" /></a></p> </div></div></div>'
					fragment.appendChild(div1);
				}
				return fragment;
			}
			if(index == 4){
				var length =div.querySelectorAll('div').length;
				var fragment =document.createElement('div');
				var div1;
				for(var i=0;i<count;i++){
					div1=document.createElement('div');
					div1.className='main_two';
					div1.innerHTML='<div class="main_two" style="margin-bottom: 10px;"><div class="two_one">商户取消</div><div class="main_two_list" style="padding-bottom: 10px;"><div class="two_list_top"><p><img src="../../img/user/meituan.png"/></p><p><span>美团外卖</span><span class="mui-ellipsis">000000000000000</span></p><p class="look link" data-link="ycd_detail.html">查看详情</p></div><div class="two_list_two tel"><p>配送地址:</p><p><span><i>小明</i><i>18000000000</i><a href="tel:00000000000"><img src="../../img/order/iphone.png" alt="" /></a></span><span class="mui-ellipsis">中原国家广告产业园7号楼3层</span></p></div><div class="two_list_three"><ul><li><span class="mui-ellipsis">西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li><li><span class="mui-ellipsis">西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li>	<li><span class="mui-ellipsis">西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li><li><span class="mui-ellipsis">西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li><li><span class="mui-ellipsis">西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li><li><span class="mui-ellipsis">西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li><li><span>西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li></ul><p class="more"><span>展开更多</span><img src="../../img/order/xiala.png" alt="" /></p><div class="pay"><p><span>商品费</span><span>￥58</span></p><p><span>商品费</span><span>￥5</span></p></div><div class="zongJi" style="border-bottom: none;"><span>总计：</span><span>￥61</span></div></div>							   </div> <div class="two_three"><p class="hulue"><img src="../../img/order/hulue.png"/><span>忽略此单</span></p><p class="begin"><img src="../../img/order/chongxin.png"/><span>重新发单</span></p></div></div></div>'
					fragment.appendChild(div1);
				}
				return fragment;
			}
		};
	});
})(mui);
//////////展开更多变化
var of=true;
$(document).on('tap','.more',function(){
	var hei=$(this).prev().children().length*25+10;
	if(of){
		$(this).prev().css({'height':hei,'transition':'all 0.5s'});
		$(this).prev().css({'height':hei,'-webkit-transition':'all 0.5s'});
		$(this).find('span').html('点击收起');
		$(this).find('img').css({'transform':'rotate(180deg)','transform-origin':'center'});
	    of=false;
	}
	else{
		$(this).prev().css({'height':'55px','transition':'all 0.5s'});
		$(this).prev().css({'height':'55px','-webkit-transition':'all 0.5s'});
		$(this).find('span').html('展开更多');
		$(this).find('img').css({'transform':'rotate(0deg)','transform-origin':'center'});
		of=true;
	}	
})
////待发布下得一键发单
//$('.btn').on('tap',function(){
//	$('.check').css('display','block');
	$(document).on('tap','.wxz',function(){
		$(this).attr({'src':'../../img/order/xuanzhong.png','class':'xz'});
	})
	$(document).on('tap','.xz',function(){
		$(this).attr({'src':'../../img/order/xuankuang.png','class':'wxz'});
	})
//})

//////倒计时
gou()
function gou() {
	$(function() {
		var m = 5;
		var s = 59;
		timer = setInterval(function() {
			if(s < 10) {
				$('.djs').html('0' +m + ':0' + s);
			} else {
				$('.djs').html('0' +m + ':' + s);
			}
			--s;
			if(s < 0) {
				s = 59;
				m--;
			}
			if(s == 0 && m == 0) {
				clearInterval(timer);
			}
		}, 1000)

	})
}
////////////////////////异常单中的忽略订单
$(document).on('tap','.hulue',function(){
	$('.hl_Order_pop').css('display','block');
	$('.hl_Order_pop .hl').on('tap',function(){
		$('.hl_Order_pop').css('display','none');
	})
})
//异常单中的商户取消
$(document).on('tap','.two_one',function(){
	$('.yc_quxiao_pop').css('display','block');
	$('.yc_quxiao_pop .yc_enter').on('tap',function(){
		$('.yc_quxiao_pop').css('display','none');
	})
})
//异常单中的重新发单
$(document).on('tap','.begin',function(){
	$('.yc_begin_pop').css('display','block');
	$('.yc_begin_pop .yc_enter').on('tap',function(){
		$('.yc_begin_pop').css('display','none');
	})
	$('.yc_begin_pop .yc_cancel').on('tap',function(){
		$('.yc_begin_pop').css('display','none');
	})
})

/////////////单机电话
$(document).on('tap','.tel',function(){
	$('.phone_pop').css('display','block');
	$('.cancel').on('tap',function(){
		$('.phone_pop').css('display','none');
	})
})
//单机取消订单
$(document).on('tap','.cancel_order',function(){
	$('.quxiao_pop').css('display','block');
	$('.cancel').on('tap',function(){
		$('.quxiao_pop').css('display','none');
	})
	$('.enter').on('tap',function(){
		$('.quxiao_pop').css('display','none');
		$('.qxOrder_pop').css('display','block');
		$('.qxOrder_pop .qx').on('tap',function(){
			$('.qxOrder_pop .qx').css('color','#333');
			$(this).css('color','#6a4a23')
		})
		$('.qxOrder_pop .finished').on('tap',function(){
			$('.qxOrder_pop').css('display','none');
		})
	})
})
//单机追加小费
$(document).on('tap','.add',function(){
	$('.addPay_pop').css('display','block');
//	$('.jine').focus(function(){
//		$('.jine').val(' ');
//		$('.jine').val('￥'+$('.jine').val())
//	});	
	$('.addPay_pop .enter').on('tap',function(){
		$('.addPay_pop').css('display','none');
		$('.jiaoYi_pop').css('display','block');
		$('.jiaoYi_pop .enter').on('tap',function(){			
			$('.jiaoYi_pop').css('display','none');
			
		})
	})
})
//单机发布订单和一键发单
$(document).on('tap','.publish',function(){
	mui.alert('发布成功！')
})

///在遮罩层上单机
$(document).on('tap',function(e){
	if(e.target.className=='qxOrder_pop'){
		$('.qxOrder_pop').css('display','none');
	}
	if(e.target.className=='hl_Order_pop'){
		$('.hl_Order_pop').css('display','none');
	}
	if(e.target.className=='addPay_pop'){
		$('.addPay_pop').css('display','none');
	}
	if(e.target.className=='jiaoYi_pop'){
		$('.jiaoYi_pop').css('display','none');
	}
})
//当异常单显示时，上面的红点消失
var timer1=setInterval(function(){
	if($('.aa').attr('class')=='mui-control-item yc aa mui-active'){
        $('.aa').attr('class','mui-control-item aa mui-active');
        $('.aa').css({'color':'#6a4a23 !important','border-bottom':'2px solid #6a4a23 !important'});
        $('.aa').find('b').remove();
        clearInterval(timer);
	}
})
//单机悬浮按钮
var n=0;					
$('.tianjia').on('tap',function(){	
	
	n++;
	if(n==1){  
		$('.tianjia').css({'transform':'rotate(360deg)','transition':'all .5s'});
		$('.tianjia').css({'-webkit-transform':'rotate(360deg)','-webkit-transition':'all .5s'});
		$('.zzc').css('display','block');		
		$('.xuanfu').css({'width':'180px','height':'150px'});
    	$('.tianjia').css({'top':'80px','left':'80px'});
    	$('.quanBu').attr('class','quanBu_1');
    	$('.bianji').attr('class','bianji_1 link');
    	$('.meituan').attr('class','meituan_1');
    	$('.baidu').attr('class','baidu_1');
    	$('.eleme').attr('class','eleme_1');
	}
	n=0;
	
})
 $(document).on('tap',function(e){
 	if(e.target.className=='zzc'){
 		n=0;
 		$('.tianjia').css({'transform':'rotate(0deg)','transition':'all .5s'});
 		$('.tianjia').css({'-webkit-transform':'rotate(0deg)','-webkit-transition':'all .5s'});
     	$('.zzc').css('display','none');
     	$('.xuanfu').css({'width':'62px','height':'62px'});
     	$('.tianjia').css({'top':'0px','left':'0px'});
     	$('.quanBu_1').attr('class','quanBu');
    	$('.bianji_1').attr('class','bianji link');
    	$('.meituan_1').attr('class','meituan');
    	$('.baidu_1').attr('class','baidu');
    	$('.eleme_1').attr('class','eleme');
 	}
 })
 
//单机全部，百度，美团，饿了么显示出对应的单子
$('.quanBu').on('tap',function(){
	$('.tianjia').css({'transform':'rotate(0deg)','transition':'all .5s'});
	$('.tianjia').css({'-webkit-transform':'rotate(0deg)','-webkit-transition':'all .5s'});
	$('#slider').css('display','block');
	$('.none').css('display','none');
	$('.zzc').css('display','none');
 	$('.xuanfu').css({'width':'62px','height':'62px'});
 	$('.tianjia').css({'top':'0px','left':'0px'});
 	$('.quanBu_1').attr('class','quanBu');
	$('.bianji_1').attr('class','bianji link');
	$('.meituan_1').attr('class','meituan');
	$('.baidu_1').attr('class','baidu');
	$('.eleme_1').attr('class','eleme');
})
$('.baidu').on('tap',function(){
	$('.tianjia').css({'transform':'rotate(0deg)','transition':'all .5s'});
	$('.tianjia').css({'-webkit-transform':'rotate(0deg)','-webkit-transition':'all .5s'});
	$('#slider').css('display','block');
	$('.none').css('display','none');
	$('.zzc').css('display','none');
 	$('.xuanfu').css({'width':'62px','height':'62px'});
 	$('.tianjia').css({'top':'0px','left':'0px'});
 	$('.quanBu_1').attr('class','quanBu');
	$('.bianji_1').attr('class','bianji link');
	$('.meituan_1').attr('class','meituan');
	$('.baidu_1').attr('class','baidu');
	$('.eleme_1').attr('class','eleme');
})
$('.meituan').on('tap',function(){
	$('.tianjia').css({'transform':'rotate(0deg)','transition':'all .5s'});
	$('.tianjia').css({'-webkit-transform':'rotate(0deg)','-webkit-transition':'all .5s'});
	$('#slider').css('display','block');
	$('.none').css('display','none');
	$('.zzc').css('display','none');
 	$('.xuanfu').css({'width':'62px','height':'62px'});
 	$('.tianjia').css({'top':'0px','left':'0px'});
 	$('.quanBu_1').attr('class','quanBu');
	$('.bianji_1').attr('class','bianji link');
	$('.meituan_1').attr('class','meituan');
	$('.baidu_1').attr('class','baidu');
	$('.eleme_1').attr('class','eleme');
})
$('.eleme').on('tap',function(){
	$('.tianjia').css({'transform':'rotate(0deg)','transition':'all .5s'});
	$('.tianjia').css({'-webkit-transform':'rotate(0deg)','-webkit-transition':'all .5s'});
	$('#slider').css('display','block');
	$('.none').css('display','none');
	$('.zzc').css('display','none');
 	$('.xuanfu').css({'width':'62px','height':'62px'});
 	$('.tianjia').css({'top':'0px','left':'0px'});
 	$('.quanBu_1').attr('class','quanBu');
	$('.bianji_1').attr('class','bianji link');
	$('.meituan_1').attr('class','meituan');
	$('.baidu_1').attr('class','baidu');
	$('.eleme_1').attr('class','eleme');
})
$('.bianji').on('tap',function(){
	$('.tianjia').css({'transform':'rotate(0deg)','transition':'all .5s'});
	$('.tianjia').css({'-webkit-transform':'rotate(0deg)','-webkit-transition':'all .5s'});
	$('#slider').css('display','block');
	$('.none').css('display','none');
	$('.zzc').css('display','none');
 	$('.xuanfu').css({'width':'62px','height':'62px'});
 	$('.tianjia').css({'top':'0px','left':'0px'});
 	$('.quanBu_1').attr('class','quanBu');
	$('.bianji_1').attr('class','bianji link');
	$('.meituan_1').attr('class','meituan');
	$('.baidu_1').attr('class','baidu');
	$('.eleme_1').attr('class','eleme');
})
