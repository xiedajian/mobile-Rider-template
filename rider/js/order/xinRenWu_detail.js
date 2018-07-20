//上拉框，下拉框，初始化top值
var hei1 = $('body').height();
var hei = hei1 - 205;
console.log(hei);
$('.main').css({
	'height': "155px",
	'top': hei + 'px'
});
//下拉
$('.xl').on('tap', function() {

	var hei1 = $('body').height();
	var hei = hei1 - 205;
	$('.bb').css('display', 'none');
	$('.main').css({
		'top': hei + 'px',
		'height': "155px"
	});
	$(this).css('display', 'none');
	$('.sl').css('display', 'block');

})
//上拉
$('.sl').on('tap', function() {
	$('.bb').css('display', 'block');
	var hei = $('body').height();
	$('.main').css('height', 'auto');
	var hei2 = $('.main').height();
	var hei1 = hei - hei2;
	if(hei1 < 55) {
		hei1 = 55
	}
	$('.main').css({
		"transition": "all 2s",
		"-webkit-transition": "all 1s",
		'top': hei1 + 'px'
	});
	$(this).css('display', 'none');
	$('.xl').css('display', 'block');

})
//、、、、、、、
// 百度地图API功能
var map = new BMap.Map("allmap");
var point = new BMap.Point(113.573879, 34.805141);
map.centerAndZoom(point, 13);
//第一个标注和文字标注
var sContent =
	"<img style='border:1px solid #ccc;border-radius:50%' id='imgDemo' src='../../img/order/logoxiao.png' width='42' height='42'/>";
var pt = new BMap.Point(113.573879, 34.805141);
var myIcon = new BMap.Icon("../../img/enter/home_icon_dw.png", new BMap.Size(15, 21));
var marker = new BMap.Marker(pt, {
	icon: myIcon
}); // 创建标注
map.addOverlay(marker); // 将标注添加到地图中
var label = new BMap.Label("", {
	offset: new BMap.Size(-10, -50)
});
label.setStyle({
	color: "#ccc"
});
marker.setLabel(label);
//第二个标注和信息窗口
var sContent1 =
	"<img style='border:1px solid #ccc;border-radius:50%' id='imgDemo1' src='../../img/order/yang.png' width='44' height='44'/>";
var pt1 = new BMap.Point(113.573879, 34.835881);
var myIcon1 = new BMap.Icon("../../img/enter/home_icon_dw.png", new BMap.Size(15, 21));
var marker1 = new BMap.Marker(pt1, {
	icon: myIcon1
}); // 创建标注
map.addOverlay(marker1); // 将标注添加到地图中
var infoWindow1 = new BMap.InfoWindow(sContent1); // 创建信息窗口对象        
marker1.openInfoWindow(infoWindow1);
//
$(document).on('tap','.qiang',function(){
	$('.qiangdan_pop').css('display','block');
	$('.enter').on('tap',function(){
		$('.qiangdan_pop').css('display','none');
	})
})
