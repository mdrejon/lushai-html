
(function ($) {
    "use strict";
  
  
  // Ticker..........................................start
  
    $(document).ready(function () {
 
  
  // Slider.......................................... start
          $('.hero-section').owlCarousel({
                         items: 1,
                          margin: 20,
                          loop: true,
                          autoplay: true,
                          animateOut: 'fadeOut',
                          autoplayTimeout: 5000,
                          dots: false,
                          nav: true,
                          //lazyLoad: true,
                          // autoplayTimeout: 3000,
                          //  autoplaySpeed: 3000,
                      //     responsive: {
                      //     0: {
                      //         items: 1,
                      //         nav: false
                      //     },
                      //     600: {
                      //         items: 1,
                      //         nav: false
                      //     },
                      //     1000: {
                      //         items: 1,
                      //         nav: true,
                      //         loop: true, 
                      //     }
                      // }
            });
          $('.client-slider').owlCarousel({
                         items: 5,
                          margin: 20,
                          loop: true,
                          autoplay: true,
                          animateOut: 'fadeOut',
                          autoplayTimeout: 5000,
                          dots: false,
                          nav: false,
                          //lazyLoad: true,
                          // autoplayTimeout: 3000,
                          //  autoplaySpeed: 3000,
                          responsive: {
                          0: {
                              items: 1,
                              nav: false
                          },
                          600: {
                              items: 3,
                              nav: false
                          },
                          1000: {
                              items: 5,
                              nav: true,
                              loop: true, 
                          }
                      }
            });
          $('.team-slider').owlCarousel({
                         items: 4,
                          margin: 20,
                          loop: true,
                          autoplay: true,
                          animateOut: 'fadeOut',
                          autoplayTimeout: 5000,
                          dots: false,
                          nav: false,
                          //lazyLoad: true,
                          // autoplayTimeout: 3000,
                          //  autoplaySpeed: 3000,
                          responsive: {
                          0: {
                              items: 1,
                              nav: false
                          },
                          600: {
                              items: 3,
                              nav: false
                          },
                          1000: {
                              items: 4,
                              nav: false,
                              loop: false, 
                          }
                      }
            });
          $('.blog-slider').owlCarousel({
                         items: 3,
                          margin: 20,
                          loop: true,
                          autoplay: true,
                          animateOut: 'fadeOut',
                          autoplayTimeout: 5000,
                          dots: false,
                          nav: false,
                          //lazyLoad: true,
                          // autoplayTimeout: 3000,
                          //  autoplaySpeed: 3000,
                          responsive: {
                          0: {
                              items: 1,
                              nav: false
                          },
                          600: {
                              items: 3,
                              nav: false
                          },
                          1000: {
                              items: 3,
                              nav: false,
                              loop: false, 
                          }
                      }
            });
  // Slider.......................................... end
 
  // Stikey Menu.......................................... Start
  $('#stikey_header').spSticyheader({
          hideHeaderTarget: '.middel-header, .triker-section',
          scrollHeader: 200,
          customClass: 'make-small',
          mobileHeader: false
      })
  // Stikey Menu.......................................... end
  // Data Table.......................................... start
        $('#example').DataTable();
  // Data Table.......................................... end
  });
  
  // Mobile-menu Trigger hover.......................................... start
    $(".mobile-close").on('click', function(){
          $(".nav-menu").removeClass("active");
      }); 
    $(".mobile-menu").on('click', function(){
          $(".nav-menu").addClass("active");
  
    });
  // Mobile-menu Trigger hover.......................................... end
  
  }(jQuery));
  
  