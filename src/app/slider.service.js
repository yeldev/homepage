class SliderService {
  constructor() {
    this.dots = document.getElementsByClassName("dot");
    this.dotsArea = document.getElementById('dots-block');
    this.slides = document.getElementsByClassName('slider-item');
    this.prev = document.getElementById('prev-btn');
    this.next = document.getElementById('next-btn');
    this.resume = document.getElementById("resume");
    this.slideIndex = 1;
    this.backdrop = document.querySelector(".backdrop");
    this.modal = document.querySelector(".modal");
  }

  showSlides(n) {
    if (n < 1) {
      this.slideIndex = this.slides.length;
    } else if (n > this.slides.length) {
        this.slideIndex = 1;
    }
    for (let i = 0; i < this.slides.length; i++) {
        this.slides[i].style.display = 'none';
    }
    for (let i = 0; i < this.dots.length; i++) {
      this.dots[i].classList.remove('dot-active');
    }
    this.slides[this.slideIndex - 1].style.display = 'block';
  }

  plusSlides (n) {
    console.log(n);
    this.showSlides(this.slideIndex += n);
  }

  currentSlide (n) {
    this.showSlides(this.slideIndex = n)
  }

  onPrevClick(cb) {
    this.prev.addEventListener("click", cb);
  }

  onNextClick(cb) {
    this.next.addEventListener("click", cb);
  }

  onOpenSlider(cb) {
    this.resume.addEventListener("click", cb);
  }

  getBackdrop() {
    return this.backdrop;
  }

  getModal() {
    return this.modal;
  }

  closeSlider(cb) {
    this.backdrop.addEventListener("click", cb);
  }

}

export default SliderService;