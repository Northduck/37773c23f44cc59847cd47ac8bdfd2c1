$(function() {
			var $clientcarousel = $('#clients-list');
			var clients = $clientcarousel.children().length;
			var clientwidth = (clients * 220); // 140px width for each client item 
			$clientcarousel.css('width', clientwidth);
			var rotating = true;
			var clientspeed = 0;
			var seeclients = setInterval(rotateClients, clientspeed);
			$(document).on({
				mouseenter: function() {
					rotating = false; // turn off rotation when hovering
				},
				mouseleave: function() {
					rotating = true;
				}
			}, '#clients');

			function rotateClients() {
				if(rotating != false) {
					var $first = $('#clients-list li:first');
					$first.animate({
						'margin-left': '-220px'
					}, 5000, "linear", function() {
						$first.remove().css({
							'margin-left': '0px'
						});
						$('#clients-list li:last').after($first);
					});
				}
			}
		});
	
$(function() {
		$('.pop').on('click', function() {
			$('.imagepreview').attr('src', $(this).find('img').attr('data-img'));
			$('#imagemodal').modal('show');   
		});		
});