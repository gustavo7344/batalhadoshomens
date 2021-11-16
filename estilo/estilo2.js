var swiper = new Swiper(".mySwiper", {
    effect: "flip",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  function real() {
      alert('Você está sendo direcionado para o Mercado Pago, caso você tenha o aplicativo do Mercado Pago o mesmo será aberto.')
  }