
$('.fujin').on('tap',function(){
	$('.shoucang').css({'color':'#6a4a23','background':'#fff'});
	$(this).css({'color':'#fff','background':'#6a4a23'});	
	$(this).find('img').attr('src','../../img/enter/fujin1.png');
	$('.shoucang').find('img').attr('src','../../img/enter/shoucang.png');
	$('.fujin_txt').css('display','block');
	$('.shoucang_txt').css('display','none');
})
$('.shoucang').on('tap',function(){
	$(this).css({'color':'#fff','background':'#6a4a23'});
	$('.fujin').css({'color':'#6a4a23','background':'#fff'});	
	$(this).find('img').attr('src','../../img/enter/shoucang1.png');
	$('.fujin').find('img').attr('src','../../img/enter/fujin.png');
	$('.shoucang_txt').css('display','block');
	$('.fujin_txt').css('display','none');
})
///
$('.fujin_txt li').toggle(function(){
	$(this).find('img').attr('src','../../img/enter/shoucang3.png');
},function(){
	$(this).find('img').attr('src','../../img/enter/shoucang4.png');
})
$('.shoucang_txt li').toggle(function(){	
	$(this).find('img').attr('src','../../img/enter/shoucang4.png');
},function(){
	$(this).find('img').attr('src','../../img/enter/shoucang3.png');
})
/////////////////////////////////////////////////////////////////////////
//初始化地图对象，加载地图

	var map = new AMap.Map("allmap", {
		resizeEnable: true,
		center: [113.573879, 34.805141], //地图中心点
		zoom: 15 //地图显示的缩放级别
	});	
      
	  //获取用户所在城市信息
    function showCityInfo() {
        //实例化城市查询类
        var citysearch = new AMap.CitySearch();
        //自动获取用户IP，返回当前城市
        citysearch.getLocalCity(function(status, result) {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    var cityinfo = result.city;
                    console.log(status);
                    console.log(result);
                    document.getElementById('weizhi').innerHTML = cityinfo;
                    //添加点标记，并使用自己的icon
				    var marker=new AMap.Marker({
						map: map,
						position: [113.573879, 34.805141],						
						icon: new AMap.Icon({
							size: new AMap.Size(15, 21), //图标大小
							image: "../../img/enter/home_icon_dw.png"
							//		            imageOffset: new AMap.Pixel(0, -60)
						})
					});
                }
            } else {
                document.getElementById('weizhi').innerHTML = result.info;
            }
        });
    }
	
showCityInfo();	