  let slideIndex = 1;
  const slides = document.getElementsByClassName('slide');

  function showSlide(n) {
    for (let i = 1; i < slides.length; i++) {
      slides[i].classList.remove('active');
    }
    if (n >= slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
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
