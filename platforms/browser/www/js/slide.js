/*! Slide home | India Brasil */

$("#next").click(function() {
			var visible = $("#slide li:visible");
			var next = visible.next();

			visible.fadeOut(500, function(){
				if (next.length == 0) {
					$("#slide li:first").fadeIn(500);
				}
				else {
					next.fadeIn(500);
				}
			});
		});


		//that is the PREVIEWS buttom
		$("#prev").click(function(){
			var visible = $("#slide li:visible");
			var prev = visible.prev();

			visible.fadeOut(500, function(){
				if(prev.length == 0) {
					$("#slide li:last").fadeIn(500);
				}
				else {
					prev.fadeIn(500);
				}

			});
		});