
  
$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});


/*==============================ARROW===================================*/



/*==============================ARROW===================================*/


  //your code here
  /*===============================PAge top=================================*/

$(function() {
  var pagetop = $('.pagetop');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });
});
/*====================HAMBURGER==================*/
$(function() {
  var pagetop = $('.test');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 900) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    /*$('body, html').animate({ scrollTop: 0 }, 100);*/
    return false;
  });
});
/*========================HAMBURGER====================*/




$(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
      return false;
    });
  });

/*===========================Navigation Script==================================*/
$(function() {
    $('.first').click (function() {
      $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
      return false;
    });
  });

$(function() {
    $('.second').click (function() {
      $('html, body').animate({scrollTop: $('section.ok1').offset().top }, 'slow');
      return false;
    });
  });
$(function() {
    $('.third').click (function() {
      $('html, body').animate({scrollTop: $('section.awards').offset().top }, 'slow');
      return false;
    });
  });
$(function() {
    $('.fourth').click (function() {
      $('html, body').animate({scrollTop: $('section.contact').offset().top }, 'slow');
      return false;
    });
  });
/*===========================Navigation Script==================================*/

$("#sandwich, .menu_item").click(function() {
  $("#sandwich").toggleClass("active");
});
/*============================functionality========================*/


$("#sandwich").click(function(){
	$(".slidebar_menu").fadeIn();
    $(".slidebar_menu").toggleClass("blue");
    $(".slidebar_menu").css("display", "block");

});

$(".fa-times").click(function(){
	$(".slidebar_menu").fadeIn();
    $(".slidebar_menu").toggleClass("blue");
    $("#sandwich").removeClass("active");
});


$(function() {
  var pagetop = $('.slidebar_menu');
  $(window).scroll(function () {
    if ($(this).scrollTop() < 800) {
      pagetop.removeClass("blue");
      $("#sandwich").removeClass("active");
    } 
  });
  pagetop.click(function () {
    /*$('body, html').animate({ scrollTop: 0 }, 100);*/
    return false;
  });
});



function moveToSelected(element) {

  if (element == "next") {
    var selected = $(".selected").next();
  } else if (element == "prev") {
    var selected = $(".selected").prev();
  } else {
    var selected = element;
  }

  var next = $(selected).next();
  var prev = $(selected).prev();
  var prevSecond = $(prev).prev();
  var nextSecond = $(next).next();

  $(selected).removeClass().addClass("selected");

  $(prev).removeClass().addClass("prev");
  $(next).removeClass().addClass("next");

  $(nextSecond).removeClass().addClass("nextRightSecond");
  $(prevSecond).removeClass().addClass("prevLeftSecond");

  $(nextSecond).nextAll().removeClass().addClass('hideRight');
  $(prevSecond).prevAll().removeClass().addClass('hideLeft');

}

// Eventos teclado
$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        moveToSelected('prev');
        break;

        case 39: // right
        moveToSelected('next');
        break;

        default: return;
    }
    e.preventDefault();
});

$('#carousel div').click(function() {
  moveToSelected($(this));
});

$('#prev').click(function() {
  moveToSelected('prev');
});

$('#next').click(function() {
  moveToSelected('next');
});

