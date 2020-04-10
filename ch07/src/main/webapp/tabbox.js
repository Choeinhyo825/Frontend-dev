var TabBox = {
	init : function() {
		$(function() {
			TabBox._onWindowLoad();
		})
	},
	_onWindowLoad : function() {
		var liTabs = $(".tab-box ul li");
		for (var i = 0; i < liTabs.length; i++) {
			$(liTabs[i]).click(TabBox._onTabClicked);
		}
	},
	_onTabClicked : function() {
		// unselect
		var liSelecetds = $('.selected');
		(liSelecetds.length == 1) && ($(liSelecetds[0]).attr('class', ''));
		

		// seclect
		$(this).attr('class', 'selected');
		
		$('.tab-box div').text($(this).text());
	}
}