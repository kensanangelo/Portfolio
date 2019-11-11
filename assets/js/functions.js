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

    $(".slides").addClass('project-open');
    $("#slide-"+which_slide).removeClass('hidden');

    setTimeout(function () {
      $(".thumb-slide").addClass('hidden');
    }, 800);

    scrollTo("#work");
    $("#work").focus();

  });

  $(".return-arrow").click(function(){
    var which_slide = $(this).data("slide");
    
    $(".slides").removeClass('project-open');
    $(".thumb-slide").removeClass('hidden');
    
    setTimeout(function () {
      $("#slide-"+which_slide).addClass('hidden');
    }, 800);

    $("#work").focus();

    scrollTo("#work");
  });
}


function scrollTo(location) {
  $('html, body').animate({
      scrollTop: $(location).offset().top
  }, 800);
}