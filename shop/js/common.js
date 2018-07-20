	var rootPath='http://192.168.3.88:8080/jfsc';
	var rootPath1='http://192.168.3.135:8080/jfsc';
	/**
	 * 根据条件查询店铺对象的条件集合
	 * data:advertstatus':true},
	 */
	function QueryTerm(){ 
		this.categoryId; 
		this.ishot; 
		this.province; 
		this.city; 
		this.area; 
		this.pageNo; 
		this.pageSize; 
		this.typeid;
	}; 
	/**
	 * 点击分类跳转页面
	 * @param categoryId
	 */
	function getShopsByCategory(categoryId){
		if(categoryId==2){		
			window.location.href='dianYing2.html?categoryId='+35; 
		}else if(categoryId==4){		
			window.location.href='shangChao.html?categoryId='+categoryId; 
		}else if(categoryId==3){		
			window.location.href='xiuXian_fuWu.html?categoryId='+categoryId; 
		}else{
			window.location.href='meiShi_waiMai.html?categoryId='+categoryId; 		
		}
	}
	function addDataToBox(data,source,boxId,url,type,multiDownFlag){
		$.ajax({
			url:url,
			//data:{'categoryId':categoryId,'pageNo':pageNo,'pageSize':pageSize,'province':province,'city':city},
			data:data,
			dataType:'JSON',
			success:function(data){
				console.log(JSON.stringify(data));
				if(multiDownFlag==1){
					pageNo1=data.data.pageNo;
					pageSize1=data.data.pageSize;
					totalPage1=data.data.totalPage;
				}else if(multiDownFlag==2){
					pageNo2=data.data.pageNo;
					pageSize2=data.data.pageSize;
					totalPage2=data.data.totalPage;
				}else if(multiDownFlag==3){
					pageNo3=data.data.pageNo;
					pageSize3=data.data.pageSize;
					totalPage3=data.data.totalPage;
				}else{
					pageNo=data.data.pageNo;
					pageSize=data.data.pageSize;
					totalPage=data.data.totalPage;
				}
				pageNo=data.data.pageNo;
				pageSize=data.data.pageSize;
				totalPage=data.data.totalPage;
				var dataList;
				if(type==1){
					dataList=data.data.listRoute;
				}else if(type==3){
					dataList=data.result;
				}
				else{
					dataList=data.data;
				}
				//console.log(data.data);
				var render = template.compile(source);
				var html = render({						
						list:dataList
				});
				//console.log(html)
				var oldHtml=document.getElementById(boxId).innerHTML;
				document.getElementById(boxId).innerHTML = oldHtml+html;
			},
			error:function(data){
			}
	 });	
  }
	/**
	    日期格式化方法
	   调用示例
	   var time1 = new Date().Format("yyyy-MM-dd");
	   var time2 = new Date().Format("yyyy-MM-dd HH:mm:ss");  
	 */   
	Date.prototype.Format = function (fmt) { //author: meizz 
	    var o = {
	        "M+": this.getMonth() + 1, //月份 
	        "d+": this.getDate(), //日 
	        "H+": this.getHours(), //小时 
	        "m+": this.getMinutes(), //分 
	        "s+": this.getSeconds(), //秒 
	        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
	        "S": this.getMilliseconds() //毫秒 
	    };
	    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	    for (var k in o)
	    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	    return fmt;
	};
	function getQueryString(name) { 
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
		var r = window.location.search.substr(1).match(reg); 
		if (r != null) return unescape(r[2]); return null; 
	} 
/**
 * 轮播图展示
 * @param adsenseid
 */
	
function carousel(adsenseid){
	mui.ajax({
		url:rootPath+'/advertControllerapi/selectByfirst',
	data:{'pageNo':1,'adsenseid':adsenseid,'advertstatus':true},
	dataType:'JSON',
	success:function(data){
		var advertStr='';
		var advertPoint='<div class="mui-slider-indicator">';
		var arr=JSON.parse(data).data;
		var length=arr.length
		console.log(length);
		$.each(arr, function(index,value) {
			
			if(index==0){
				advertStr='<div class="mui-slider-group mui-slider-loop"><div class="mui-slider-item mui-slider-item-duplicate">'
					+'<a href="javascript:void(0);" onclick="skipPage(\''+value.adverturl+'\')"><img src="'+value.advertpic+'" id="banner"> </a></div>'
					+advertStr;
				advertPoint=advertPoint+'<div class="mui-indicator mui-active"></div>'	
			}else{
				advertPoint=advertPoint+'<div class="mui-indicator"></div>'	
			}
			
			advertStr=advertStr+'<div class="mui-slider-item">'
			+'<a href="javascript:void(0);" onclick="skipPage(\''+value.adverturl+'\')"><img src="'+value.advertpic+'" id="banner"> </a></div>';
			if(index==length-1){
				advertStr=advertStr+'<div class="mui-slider-item mui-slider-item-duplicate">'
				+'<a href="javascript:void(0);" onclick="skipPage(\''+value.adverturl+'\')"><img src="'+value.advertpic+'" id="banner"> </a></div>';
			}		
		});
		var box=document.getElementById('slider');
		box.innerHTML=(advertStr+'</div>'+advertPoint+'</div>');
		var gallery = mui('.mui-slider');
		gallery.slider({
			interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
			});
			
		}
		
	});
}