        var swiper = new Swiper(".mySwiperTesti", {
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
      });  
        var swiper = new Swiper(".mySwiper", {

        grabCursor: true,
        slidesPerView: 4,
        spaceBetween: 50,
        navigation: {
        nextEl: ".bxs-chevron-right-circle",
        prevEl: ".bx-chevron-left-circle",
        },

      });

// let action = document.querySelector('menu-link')

// menuLink.addEventListener('click', function() {
//   action.classList.toggle('active')

// });

let menuOpen = document.querySelector('.menu-toogle')
let active = document.querySelector('.menu-wrapper')

menuOpen.addEventListener('click', function () {
  menuOpen.classList.toggle('bxs-x-square')
  active.classList.toggle('active')
})

body.removeEventListener('click', function () {
  active.classList.toggle('active')
})
