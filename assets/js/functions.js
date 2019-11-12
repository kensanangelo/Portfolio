$(document).ready(function(){
  //Hides work slides on load, so they are still accessable without JS
  $(".project-slide").addClass("hidden");

  navScroll();
  workSlide();
});


//Smooth scrolls to selected section from top nav
function navScroll(){
  $("nav a").click(function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800);
    }
  });
}


//Scrolls between work sections by showing and hiding sections 
//while sliding left to right
function workSlide(){
  //For main thumb-slide
  $(".thumb").click(function(){
    //Grabs which slide they are choosing
    var which_slide = $(this).data("order");

    //Slides big slides div to the right
    $(".slides").addClass('project-open');

    $("#slide-"+which_slide).removeClass('hidden');

    //Delays hiding slide, so it's less of a noticible pop
    setTimeout(function () {
      $(".thumb-slide").addClass('hidden');
    }, 800);

    scrollTo("#work"); //Scrolls to top of section (less awkward to start reading from)
    $("#work").focus(); //For accessibility
  });

  //For project slides
  $(".return-arrow").click(function(){
    //Grabs which slide they are on
    var which_slide = $(this).data("slide");
    
    $(".slides").removeClass('project-open');
    $(".thumb-slide").removeClass('hidden');
    
    setTimeout(function () {
      $("#slide-"+which_slide).addClass('hidden');
    }, 800);

    scrollTo("#work");
    $("#work").focus();
  });
}