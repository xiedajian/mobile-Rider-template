//遮罩层高度
var hei;
setInterval(function(){
	hei=$('.two_list_three ul li').length*25+10;
	var hei1=$('.mui-content').height()+105;
	if(hei1<$('body').height()){
		$('.phone_pop').css('height',$('body').height());
		$('.quxiao_pop').css('height',$('body').height());
		$('.qxOrder_pop').css('height',$('body').height());
		$('.addPay_pop').css('height',$('body').height());
		
	}else{
		$('.phone_pop').css('height',hei1);
		$('.quxiao_pop').css('height',hei1);
		$('.qxOrder_pop').css('height',hei1);
		$('.addPay_pop').css('height',hei1);
	}
})

//展开更过
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
/////////////电话显示弹框
$('.tel').on('tap',function(){
	$('.phone_pop').css('display','block');
	$('.cancel').on('tap',function(){
		$('.phone_pop').css('display','none');
	})
})
//取消订单显示弹框
$('.cancel_order').on('tap',function(){
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
	$('.jine').focus(function(){
		$('.jine').val(' ');
		$('.jine').val('￥'+$('.jine').val())
	});
	$('.cancel').on('tap',function(){
		$('.addPay_pop').css('display','none');
	})
	$('.enter').on('tap',function(){
		$('.addPay_pop').css('display','none');
	})
})
///单机遮罩层，弹框消失
$(document).on('tap',function(e){
	if(e.target.className=='qxOrder_pop'){
		$('.qxOrder_pop').css('display','none');
	}
})
//倒计时
gou();
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