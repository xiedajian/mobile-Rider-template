
$('.fujin').on('tap',function(){
	$('.shoucang').css({'color':'#6a4a23','background':'#fff'});
	$(this).css({'color':'#fff','background':'#6a4a23'});	
	$(this).find('img').attr('src','../../img/order/fujin1.png');
	$('.shoucang').find('img').attr('src','../../img/order/shoucang.png');
	$('.fujin_txt').css('display','block');
	$('.shoucang_txt').css('display','none');
})
$('.shoucang').on('tap',function(){
	$(this).css({'color':'#fff','background':'#6a4a23'});
	$('.fujin').css({'color':'#6a4a23','background':'#fff'});	
	$(this).find('img').attr('src','../../img/order/shoucang1.png');
	$('.fujin').find('img').attr('src','../../img/order/fujin.png');
	$('.shoucang_txt').css('display','block');
	$('.fujin_txt').css('display','none');
})
///
$('.fujin_txt li').toggle(function(){
	$(this).find('img').attr('src','../../img/order/shoucang3.png');
},function(){
	$(this).find('img').attr('src','../../img/order/shoucang4.png');
})
/////////////////////////////////////////////////////////////////////////
function G(id) {
				return document.getElementById(id);
			}
			//			 
			// 百度地图API功能
			var map = new BMap.Map("allmap");
			var point = new BMap.Point(116.331398, 39.897445);
			map.centerAndZoom(point, 15);

			var geolocation = new BMap.Geolocation();
			geolocation.getCurrentPosition(function(r) {
				if(this.getStatus() == BMAP_STATUS_SUCCESS) {
					map.panTo(r.point);
					//					alert('您的位置：' + r.point.lng + ',' + r.point.lat);
					var pt = new BMap.Point(r.point.lng, r.point.lat);
					var myIcon = new BMap.Icon("../../img/order/home_icon_dw.png", new BMap.Size(32, 45));
					var marker2 = new BMap.Marker(pt, {
						icon: myIcon
					}); // 创建标注
					map.addOverlay(marker2); // 将标注添加到地图中
				} else {
					mui.alert('failed' + this.getStatus());
				}
			}, {
				enableHighAccuracy: true
			})
			/////////////////////////////////////////////////////////////////////////
			var ac = new BMap.Autocomplete( //建立一个自动完成的对象
				{
					"input": "suggestId",
					"location": map
				});

			ac.addEventListener("onhighlight", function(e) { //鼠标放在下拉列表上的事件
				var str = "";
				var _value = e.fromitem.value;
				var value = "";
				if(e.fromitem.index > -1) {
					value = _value.province + _value.city + _value.district + _value.street + _value.business;
				}
				str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;

				value = "";
				if(e.toitem.index > -1) {
					_value = e.toitem.value;
					value = _value.province + _value.city + _value.district + _value.street + _value.business;
				}
				str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
				G("searchResultPanel").innerHTML = str;
			});

			var myValue;
			ac.addEventListener("onconfirm", function(e) { //鼠标点击下拉列表后的事件
				var _value = e.item.value;
				myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
				G("searchResultPanel").innerHTML = "onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;

				setPlace();
			});

			function setPlace() {
				map.clearOverlays(); //清除地图上所有覆盖物
				function myFun() {
					var pp = local.getResults().getPoi(0).point; //获取第一个智能搜索的结果
					map.centerAndZoom(pp, 18);
					map.addOverlay(new BMap.Marker(pp)); //添加标注
				}
				var local = new BMap.LocalSearch(map, { //智能搜索
					onSearchComplete: myFun
				});
				local.search(myValue);
			}
			//////////////////////////////////////////////////////////
			