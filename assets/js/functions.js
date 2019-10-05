$(document).ready(function(){
  navScroll();
  workSlide();
});

function navScroll(){
  $("nav a").click(function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        window.location.hash = hash;
      });
    }
  });
}


function workSlide(){
  $(".thumb").click(function(){
    var slide = $(this).data("order");
    var percent = "-"+(slide*100)+"%";

    $(".slides").css("left", percent);
    $(".project-slide").show();
  });

  $(".return-arrow").click(function(){
    $(".slides").css("left", "0");
    $(".project-slide").hide(800);
  });
}