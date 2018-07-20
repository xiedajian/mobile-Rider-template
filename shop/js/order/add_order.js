
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
//上拉加载
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
					var table = document.body.querySelector('.main');
					var cells = document.body.querySelectorAll('.main_two');
					for (var i = cells.length, len = i + 3; i < len; i++) {
						var li = document.createElement('div');
						li.className = 'main_two';
						li.innerHTML = '<div class="main_two_list"><div class="two_list_top"><p><img src="../../img/user/meituan.png"/></p><p><span>美团外卖</span><span class="mui-ellipsis">000000000000000</span></p><p class="link look" data-link="wait_order_detail.html">查看详情</p></div><div class="two_list_two tel"><p>配送地址:</p><p><span><i>小明</i><i>18000000000</i><a href="tel:00000000000"><img src="../../img/order/iphone.png" alt="" /></a></span><span class="mui-ellipsis">中原国家广告产业园7号楼3层</span></p></div><div class="two_list_three"><ul><li><span class="mui-ellipsis">西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li><li><span class="mui-ellipsis">西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li><li><span class="mui-ellipsis">西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li><li><span class="mui-ellipsis">西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li><li><span class="mui-ellipsis">西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li><li><span class="mui-ellipsis">西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li><li><span>西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li></ul><p class="more"><span>展开更多</span><img src="../../img/order/xiala.png" alt="" /></p><div class="pay"><p><span>商品费</span><span>￥58</span></p><p><span>商品费</span><span>￥5</span></p></div><div class="zongJi"><span>总计：</span><span>￥61</span></div></div><div class="two_list_five">		   <p class="link" data-link="add_order.html" style="width: 60px;background: #CC3333;">追加</p></div></div></div>';
						//下拉刷新，新纪录插到最前面；
						table.insertBefore(li, table.firstChild);
					}
					mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //refresh completed
				}, 1500);
			}
			var count = 0;
			/**
			 * 上拉加载具体业务实现
			 */
			function pullupRefresh() {
				setTimeout(function() {
					mui('#pullrefresh').pullRefresh().endPullupToRefresh((++count > 2)); //参数为true代表没有更多数据了。
					var table = document.body.querySelector('.main');
					var cells = document.body.querySelectorAll('.main_two');
					for (var i = cells.length, len = i + 5; i < len; i++) {
						var li = document.createElement('div');
						li.className = 'main_two';
						li.innerHTML = '<div class="main_two_list"><div class="two_list_top"><p><img src="../../img/user/meituan.png"/></p><p><span>美团外卖</span><span class="mui-ellipsis">000000000000000</span></p><p class="link look" data-link="wait_order_detail.html">查看详情</p></div><div class="two_list_two tel"><p>配送地址:</p><p><span><i>小明</i><i>18000000000</i><a href="tel:00000000000"><img src="../../img/order/iphone.png" alt="" /></a></span><span class="mui-ellipsis">中原国家广告产业园7号楼3层</span></p></div><div class="two_list_three"><ul><li><span class="mui-ellipsis">西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li><li><span class="mui-ellipsis">西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li><li><span class="mui-ellipsis">西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li><li><span class="mui-ellipsis">西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li><li><span class="mui-ellipsis">西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li><li><span class="mui-ellipsis">西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li><li><span>西红柿炒鸡蛋盖浇饭</span><span>x1</span><span>￥9</span></li></ul><p class="more"><span>展开更多</span><img src="../../img/order/xiala.png" alt="" /></p><div class="pay"><p><span>商品费</span><span>￥58</span></p><p><span>商品费</span><span>￥5</span></p></div><div class="zongJi"><span>总计：</span><span>￥61</span></div></div><div class="two_list_five">		   <p class="link" data-link="add_order.html" style="width: 60px;background: #CC3333;">追加</p></div></div></div>';
						table.appendChild(li);
					}
				}, 1500);
			}
//			if (mui.os.plus) {
//				mui.plusReady(function() {
//					setTimeout(function() {
//						mui('#pullrefresh').pullRefresh().pullupLoading();
//					}, 10);
//
//				});
//			} else {
//				mui.ready(function() {
//					mui('#pullrefresh').pullRefresh().pullupLoading();
//				});
//			}
$('.zhuiJia').on('tap',function(){
	mui.alert('追加成功！');
})
