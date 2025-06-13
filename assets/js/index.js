document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.carousel-wrapper');
  const images = document.querySelectorAll('.carousel-wrapper a');
  const dotsContainer = document.querySelector('.carousel-dots');
  const total = images.length;
  let index = 0;

  // 建立點點
  for (let i = 0; i < total; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      index = i;
      updateCarousel();
    });
    dotsContainer.appendChild(dot);
  }

  const dots = document.querySelectorAll('.dot');

  function updateCarousel() {
    wrapper.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
  }

  // 自動輪播
  setInterval(() => {
    index = (index + 1) % total;
    updateCarousel();
  }, 5000); // 每 5 秒切換一次
});