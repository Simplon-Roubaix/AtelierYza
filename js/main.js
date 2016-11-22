
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


// crossfade_JB

function cycleImages(){
    var $active = $('#cycler .active');
    var $next = ($active.next().length > 0) ? $active.next() : $('#cycler img:first');
    $next.css('z-index',2);//move the next image up the pile
    $active.fadeOut(1500,function(){//fade out the top image
        $active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
        $next.css('z-index',3).addClass('active');//make the next image the top one
    });
}

$(document).ready(function(){
// run every 7s
    setInterval('cycleImages()', 7000);
})