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
})
