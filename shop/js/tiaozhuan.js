$(document).on('tap','.link', function() {
	var linkFile = $(this).attr('data-link');
	mui.openWindow({
		url: linkFile,
		id: linkFile,
		show: {
			aniShow: 'zoom-fade-out',
			duration: 300
		}
	})
})
