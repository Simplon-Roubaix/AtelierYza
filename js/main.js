
$(document).ready(function(){
  $(".button-collapse").sideNav();
});


$(document).ready(function(){
          $('.carousel').carousel();
          $('.carousel').carousel({
    padding: 200
});
autoplay()
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
}


});
