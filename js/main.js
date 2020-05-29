var RSS = {
	url: function(asset){
		var getUrl = window.location;
		var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1] + "/wp-content/themes/myblogtheme/includes/url.php";
		$.ajax({
			/*url: baseUrl,*/
			data: {asset: asset},
			method: 'POST',
			success: function(data) {
				console.log(data);
			}
		});
	},
	init: function() {
		$('<div>')
		.addClass('rss')
		.html('<a class="rss__link" href="<?php echo bloginfo(\'rss2_url\'); ?>"><img src="http://localhost/wordpress/wp-content/themes/myblogtheme/img/rss.png" ></a>')
		.appendTo('.mbt-sidebar .widget_categories');
		RSS.url('rss-img');
	}
};

$(document).ready(RSS.init);