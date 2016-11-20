
$(document).ready(function(){
  $(".button-collapse").sideNav();
});


$(document).ready(function(){
          $('.carousel').carousel();
          // $('.carousel.carousel-slider').carousel({full_width: true});
          $('.carousel').carousel({
    // padding: 200
});
autoplay()
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
}


});


function cycleImages(){
      var $active = $('.anim_concept .active');
      var $next = ($active.next().length > 0) ? $active.next() : $('.anim_concept img:first');
      // Pour déplacer l'image suivante vers le premier plan
      $next.css('z-index',2);

      // Décoloré l'image située au premier plan
      $active.fadeOut(1500,function(){

      // Réinitialiser le z-index et afficher l'image
	  $active.css('z-index',1).show().removeClass('active');

      //  Make the next image the top one
          $next.css('z-index',3).addClass('active');
      });
    }

$(document).ready(function(){
// run every 7s
setInterval('cycleImages()', 5000);
})
