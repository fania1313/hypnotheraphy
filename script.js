const container = document.querySelector(".service-container");
const btnLeft = document.querySelector(".left");
const btnRight = document.querySelector(".right");

// BUTTON SLIDE
btnLeft.addEventListener("click", () => {
  container.scrollBy({ left: -300, behavior: "smooth" });
});

btnRight.addEventListener("click", () => {
  container.scrollBy({ left: 300, behavior: "smooth" });
});

// DRAG / SWIPE LAPTOP
let isDown = false;
let startX;
let scrollLeft;

container.addEventListener("mousedown", (e) => {
  isDown = true;
  container.classList.add("active");
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});

container.addEventListener("mouseleave", () => {
  isDown = false;
  container.classList.remove("active");
});

container.addEventListener("mouseup", () => {
  isDown = false;
  container.classList.remove("active");
});

container.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const walk = (x - startX) * 1.5;
  container.scrollLeft = scrollLeft - walk;
});

// DRAG / SWIPE MOBILE
container.addEventListener("touchstart", (e) => {
  isDown = true;
  startX = e.touches[0].pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});

container.addEventListener("touchend", () => {
  isDown = false;
});

container.addEventListener("touchmove", (e) => {
  if(!isDown) return;
  const x = e.touches[0].pageX - container.offsetLeft;
  const walk = (x - startX) * 1.5;
  container.scrollLeft = scrollLeft - walk;
});
