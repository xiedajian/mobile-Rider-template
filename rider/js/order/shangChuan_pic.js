 function imgChange(obj1, obj2) {
		            //获取点击的文本框
		            var file = document.getElementById("file");
		            //存放图片的父级元素
		            var imgContainer = document.getElementsByClassName(obj1)[0];
		            //获取的图片文件
		            var fileList = file.files;
		            //文本框的父级元素
		            var input = document.getElementsByClassName(obj2)[0];
		            var imgArr = [];
		            //遍历获取到得图片文件
		            for (var i = 0; i < fileList.length; i++) {
		                var imgUrl = window.URL.createObjectURL(file.files[i]);
		                imgArr.push(imgUrl);
		                var img = document.createElement("img");
		                img.setAttribute("src", imgArr[i]);
		                var imgAdd = document.createElement("div");
		                imgAdd.setAttribute("class", "z_addImg");
		                imgAdd.appendChild(img);
		                imgContainer.appendChild(imgAdd);
		                
		            };
		            $('.z_photo').append('<p style="clear:both"></p>')
		            imgRemove();
		        };

        function imgRemove() {
            var imgList = document.getElementsByClassName("z_addImg");
            var mask = document.getElementsByClassName("z_mask")[0];
            var cancel = document.getElementsByClassName("z_cancel")[0];
            var sure = document.getElementsByClassName("z_sure")[0];
            for (var j = 0; j < imgList.length; j++) {
                imgList[j].index = j;
                imgList[j].onclick = function() {
                    var t = this;
                    mask.style.display = "block";
                    cancel.onclick = function() {
                        mask.style.display = "none";
                    };
                    sure.onclick = function() {
                        mask.style.display = "none";
                        t.style.display = "none";
                    };

                }
            };
        };

$('.pingji1>img').on('tap',function(){
	$(this).parent().find('img').attr('src','../../img/user/hxx.png');
	var a= $(this).index();
	for(var i=0;i<=a;i++){
		$(this).parent().find('img').eq(i).attr('src','../../img/user/xx.png')
	}
})

var a=$('.z_addImg').length;
if(a>8){
	alert(1);
}
