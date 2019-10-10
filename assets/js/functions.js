$(document).ready(function(){
  navScroll();
  workSlide();
});



function navScroll(){
  $("nav a").click(function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      scrollTo(hash);
    }
  });
}


function workSlide(){
  $(".thumb").click(function(){
    var slide = $(this).data("order");
    var percent = "-"+(slide*100)+"%";

    $(".slides").css("left", percent);
    $(".project-slide").show();

    scrollTo("#work");

  });

  $(".return-arrow").click(function(){
    $(".slides").css("left", "0");
    $(".project-slide").hide(800);

    scrollTo("#work");
  });
}

function scrollTo(location) {
  $('html, body').animate({
      scrollTop: $(location).offset().top
  }, 800);
}