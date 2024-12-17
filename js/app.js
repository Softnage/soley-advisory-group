document.addEventListener("DOMContentLoaded", function () {
  const sliderWrapper = document.querySelector(".slider-wrapper");
  const offeringCards = document.querySelectorAll(".offering-card");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentIndex = 0;
  const cardWidth = offeringCards[0].offsetWidth;
  const visibleCards = 3; // Number of cards visible at a time

  function updateSliderPosition() {
    sliderWrapper.style.transform = `translateX(-${
      currentIndex * cardWidth
    }px)`;
  }

  prevBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateSliderPosition();
    }
  });

  nextBtn.addEventListener("click", function () {
    if (currentIndex < offeringCards.length - visibleCards) {
      currentIndex++;
      updateSliderPosition();
    }
  });

  // Initialize slider position
  updateSliderPosition();
});

document.addEventListener("DOMContentLoaded", function () {
  const sliderWrapper = document.querySelector(".expertise-slider-wrapper");
  const scrollIndicator = document.querySelector(".scroll-indicator");

  let isDown = false;
  let startX;
  let scrollLeft;

  sliderWrapper.addEventListener("scroll", function () {
    // Hide the scroll indicator when scrolling
    scrollIndicator.style.display = "none";
  });

  sliderWrapper.addEventListener("mouseenter", function (event) {
    // Show the scroll indicator on hover
    scrollIndicator.style.display = "block";
    updateScrollIndicatorPosition(event);
  });

  sliderWrapper.addEventListener("mousemove", function (event) {
    // Update the position of the scroll indicator as the mouse moves
    updateScrollIndicatorPosition(event);
  });

  sliderWrapper.addEventListener("mouseleave", function () {
    // Hide the scroll indicator when not hovering
    scrollIndicator.style.display = "none";
  });

  sliderWrapper.addEventListener("mousedown", (e) => {
    isDown = true;
    sliderWrapper.classList.add("active");
    startX = e.pageX - sliderWrapper.offsetLeft;
    scrollLeft = sliderWrapper.scrollLeft;
  });

  sliderWrapper.addEventListener("mouseleave", () => {
    isDown = false;
    sliderWrapper.classList.remove("active");
  });

  sliderWrapper.addEventListener("mouseup", () => {
    isDown = false;
    sliderWrapper.classList.remove("active");
  });

  sliderWrapper.addEventListener("mousemove", (e) => {
    if (!isDown) return; // Only run if the mouse is down
    e.preventDefault();
    const x = e.pageX - sliderWrapper.offsetLeft;
    const walk = (x - startX) * 3; // Adjust the scroll speed
    sliderWrapper.scrollLeft = scrollLeft - walk;
  });

  function updateScrollIndicatorPosition(event) {
    const rect = sliderWrapper.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    scrollIndicator.style.left = `${offsetX}px`;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".nav-item.dropdown");

  dropdown.addEventListener("mouseenter", function () {
    const menu = this.querySelector(".dropdown-menu");
    menu.style.display = "block";
    setTimeout(() => (menu.style.opacity = "1"), 0);
  });

  dropdown.addEventListener("mouseleave", function () {
    const menu = this.querySelector(".dropdown-menu");
    menu.style.opacity = "0";
    // setTimeout(() => menu.style.display = 'none', 300);
  });
});




