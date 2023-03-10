useEffect(() => {
  const image = document.querySelector('img');
  image &&
    image.addEventListener('mousemove', (event) => {
      console.log(event);
      const { top, bottom, left, right } = event.target.getBoundingClientRect();

      const middleX = (right - left) / 2;
      const middleY = (bottom - top) / 2;

      const clientX = event.clientX;
      const clientY = event.clientY;

      const offsetX = (clientX - middleX) / middleX;
      const offsetY = (middleY - clientY) / middleY;

      event.target.style.transform = `perspective(1000px) rotateY(${
        offsetX * 5
      }deg) rotateX(${offsetY * 5}deg) scale3d(1, 1, 1)`;
    });

  image.addEventListener('mouseleave', (event) => {
    event.target.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
  });
});
