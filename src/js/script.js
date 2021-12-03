$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 100) {
      $('.navbar').addClass('scrollActive')
    } else {
      $('.navbar').removeClass('scrollActive')
    }
  })
})
