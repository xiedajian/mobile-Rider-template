
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
             $('.main_two').append('<div><p class="main_tit">5月</p><div class="main_two_list"><div class="two_list_top link"  data-link="wanCheng_order_detail.html"><p><img src="../../img/user/meituan.png"/></p><p><span>美团外卖</span><span class="mui-ellipsis">000000000000000</span></p><p><span>2017-6-16</span><span>10:13</span></p></div><div class="two_list_mid link"  data-link="wanCheng_order_detail.html"><div><p>取</p><p><span class="mui-ellipsis">杨国福麻辣烫</span><span class="mui-ellipsis">中原国家产业园2号楼厚街店铺</span></p></div><div><p>送</p><p class="mui-ellipsis">中原国家广告产业园7号楼3层</p></div></div><div class="two_list_bot"><p class="del">删除</p></div></div></div>')
		}
	}, 1500);
}
//删除本条记录
$(document).on('tap','.del',function(){
	$(this).parent().parent().parent().remove();
})
