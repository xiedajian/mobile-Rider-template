
///
$('.lishi_txt li').toggle(function(){
	$(this).find('img').attr('src','../../img/order/shoucang3.png');
},function(){
	$(this).find('img').attr('src','../../img/order/shoucang4.png');
})
////
$('.clear').on('tap',function(){
	$('.lishi_txt li').remove();
	$('#r-result').css('display','none')
})
//
$('.search').focus(function(){
	$('.clear_icon').css('display','block');
	$('.liebiao_main').css('display','block');
	$('.lishi_main').css('display','none');
})
$('.search').blur(function(){
	$('.clear_icon').css('display','none');	
	$('.liebiao_main').css('display','none');
	$('.lishi_main').css('display','block');
})
$('.clear_icon').on('tap',function(){
	$('.search').val(' ');
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
			