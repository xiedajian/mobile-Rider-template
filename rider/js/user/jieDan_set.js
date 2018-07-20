//上班日选择
$('.day span').toggle(function(){
	$(this).css('background','#F2C100');
},function(){
	$(this).css('background','#ccc');
})

//开始时间
$('#start').on('tap',function(){
	var dtPicker = new mui.DtPicker({
	 "type": "time"
});
    dtPicker.show(function (selectItems) {    	
        $('.start_h').html(selectItems.h.value);
        $('.start_i').html(selectItems.i.value);
    })
    $('.mui-dtpicker-header p').remove();
})
//结束时间
$('#end').on('tap',function(){
	var dtPicker = new mui.DtPicker({
	 "type": "time"
});
    dtPicker.show(function (selectItems) {    	
        $('.end_h').html(selectItems.h.value);
        $('.end_i').html(selectItems.i.value);
    })
    $('.mui-dtpicker-header p').remove();
})