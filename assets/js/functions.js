$(document).ready(function(){
  $(".project-slide").addClass("hidden");
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
    var which_slide = $(this).data("order");
    var percent = "-100%";

    $(".slides").css("left", percent);
    $("#slide-"+which_slide).removeClass('hidden');

    scrollTo("#work");

  });

  $(".return-arrow").click(function(){
    var which_slide = $(this).data("slide");
    
    $(".slides").css("left", "0");
    
    setTimeout(function () {
      $("#slide-"+which_slide).addClass('hidden');
    }, 800);

    scrollTo("#work");
  });
}


function scrollTo(location) {
  $('html, body').animate({
      scrollTop: $(location).offset().top
  }, 800);
}