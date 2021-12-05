$(document).ready(() => {
  $(window).scroll(() => {
    if (this.scrollY > 80) {
      $('.navbar').addClass('scrollActive')
    } else {
      $('.navbar').removeClass('scrollActive')
    }
  })

  /* altenar menu-btn */
  $('.menu-btn').click(() => {
    $('.navbar .menu').toggleClass('active')
    $('.fa-bars').toggleClass('fa-times')
    $('.fa-times').toggleClass('fa-bars')
  })

  /* fechar menu ao clicar */
  $('.navbar .menu li a').click(() => {
    $('.navbar .menu').toggleClass('active')
    $('.fa-bars').toggleClass('fa-times')
    $('.fa-times').toggleClass('fa-bars')
  })

  /* owl corousel */
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  })
})
