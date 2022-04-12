function carouselHandler(carousel) {
  //let carousel = document.querySelector(".carousel");
  let slides = carousel.querySelectorAll(".slides > *");
  let indicators;
  let currentSlide = 0;

  let intervalHandler;
  carousel.addEventListener("mouseover", pause);
  carousel.addEventListener("mouseout", autoplay);
  carousel
    .querySelector(".arrow.left")
    .addEventListener("click", previousSlide);
  carousel.querySelector(".arrow.right").addEventListener("click", nextSlide);

  carousel.querySelector(".indicators").innerHTML = "<span></span>".repeat(
    slides.length
  );

  indicators = carousel.querySelectorAll(".indicators > span");

  indicators.forEach((element, index) => {
    //function (element) { }
    element.addEventListener("click", function () {
      setSlide(index);
    });
  });

  setSlide(currentSlide);
  autoplay();

  function autoplay() {
    intervalHandler = setInterval(nextSlide, carousel.dataset.interval);
  }

  function pause() {
    clearInterval(intervalHandler);
  }
  function nextSlide() {
    index = (currentSlide + 1) % slides.length;
    setSlide(index);
  }
  function previousSlide() {
    index = (slides.length + currentSlide - 1) % slides.length;
    setSlide(index);
  }

  function setSlide(index) {
    console.log(index);
    let activeSlide = carousel.querySelector(".slides > .active");

    activeSlide.classList.remove("active");
    indicators[currentSlide].classList.remove("active");

    slides[index].classList.add("active");
    indicators[index].classList.add("active");
    currentSlide = index;
  }

  function getElementIndex(element) {
    return [...element.parentNode.children].indexOf(element);
  }
}

document.querySelectorAll(".carousel").forEach((carousel) => {
  carouselHandler(carousel);
});
