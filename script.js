/*$('#carouselExampleSlidesOnly').carousel({
  interval :2000000
})

$('.carousel .carousel-item').each(function(){
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0;i<1;i++) {
        next=next.next();
        if (!next.length) {
        	next = $(this).siblings(':first');
      	}
        
        next.children(':first-child').clone().appendTo($(this));
      }
});*/
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      margin: 20,
      loop: true,
      nav: true,
      responsive:{
          0:{
              items:1,
              nav:true,
              dots: true  
          },
          550:{
              items:2,
              nav:true,
              dots: true
          },
         1024:{
            items: 3,
              nav:true,
              dots: false
          }
      }
    })
});