/* ========== SCROLL ==========*/
$(document).ready(function(){
  $("a").on('click', function(event) {

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
});

/* ========== NAV ==========*/

function animateElements() {
  var elementsToAnimate = ['.list li' ,'.logo img', '.socialmedialogo img','.buttoncontact','.Greeting', '.hobbies','.sentence', '.designbox img', '.socialmedia','.Greeting1', '.hobbies1','.sentence1', '.designbox1 img', '.socialmedia1','.intro','.container1','.intro1','.container2','.titleskill h1','.titleskill h2','.titleskill p','.skills','.titleskill1 h1','.titleskill1 h2','.titleskill1 p','.skills1'
,'.personalinfo','.contact'];

  elementsToAnimate.forEach(function (element) {
      anime({
          targets: element,
          opacity: [0, 1],
          translateY: [20, 0],
          easing: 'easeInOutQuad',
          duration: 1000,
          delay: anime.stagger(200),
      });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  animateElements();
});

  