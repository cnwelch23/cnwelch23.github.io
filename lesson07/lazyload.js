const imagesToLoad = document.querySelectorAll('img[data-src]');

const imagOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {image.removeAttribute('data-src');};
};

if('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observers) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                loadImages(item.target);
                observers.unobserve(item.target);
            }
        });
}, imagOptions);

imagesToLoad.forEach((img) => {
    imgObserver.observe(img);
  });
}
else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
      });
}