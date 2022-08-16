function initCarousel() {
  //images
  const image1 = document.querySelectorAll('.carousel__slide');
  
  console.log(image1);

  //carusel
  const slider = document.querySelector(".carousel__inner");

  const images = document.querySelectorAll(".carousel__inner img");
  console.log(images[0]);

  //buttons
  const arrow = document.querySelector('.carousel__arrow');

  const right = document.querySelector(".carousel__arrow_right");

  const left = document.querySelector(".carousel__arrow_left");

  //counter

  let counter = 0;

  const stepSize = images[0].offsetWidth;

  console.log(stepSize);

  // slider.style.transform = "translateX(" + `${-stepSize * counter}px)`;

  right.addEventListener("click", () => {
    if (counter >= 3) counter = -1;

    counter++;

    slider.style.transform = "translateX(" + `${-stepSize * counter}px)`;
  });

  left.addEventListener("click", () => {
    if (counter <= 0) counter = 4;

    counter--;

    slider.style.transform = "translateX(" + `${-stepSize * counter}px)`;
  });

  image1[0] ? (left.style.display = "none") : (left.style.display = ' ');
}

