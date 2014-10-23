
$('#view').click(function(){
	
	function showLoader(){
	
		$('.search-background').fadeIn(200);

	}
	
	function hideLoader(){
	
		$('.search-background').fadeOut(200);
		$('#paging_button').show();
	};
	
	$("#paging_button li").click(function(){
		
		showLoader();
		$("#paging_button li").css({'background-color' : ''});
		$(this).css({'background-color' : 'magenta'});

		$("#content").load("php/view.php?page=" + this.id, hideLoader);
		
		return false;
	});
	
	$("#1").css({'background-color' : 'magenta'});
	showLoader();
	$("#content").load("php/view.php?page=1", hideLoader);

	
});
