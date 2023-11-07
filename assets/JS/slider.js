
  let slideIndex = 0;
  const slides = document.getElementsByClassName('slide');

  function showSlide(n) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove('active');
    }
    if (n >= slides.length) {
      slideIndex = 0;
    }
    if (n < 0) {
      slideIndex = slides.length -1;
    }
    slides[slideIndex].classList.add('active');
  }

  function changeSlide(n) {
    showSlide(slideIndex += n);
  }

  setInterval(function() {
    changeSlide(1);
  }, 5000);
