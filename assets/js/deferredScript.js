const images = document.querySelectorAll('img');
images.forEach(img => {
  img.addEventListener('error', function handleError() {
    const defaultImage =
      'https://bobbyhadz.com/images/blog/javascript-show-div-on-select-option/banner.webp';

    img.src = defaultImage;
    img.alt = 'default';
  });
});

