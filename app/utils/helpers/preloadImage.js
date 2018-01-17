/**
 * Preload an image
 * @param {url} URL - The url of the image to preload
 */
const preloadImage = (url) => new Promise((resolve, reject) => {
  const image = new Image();
  image.src = url;
  image.onload = resolve;
  image.onerror = reject;
});

export default preloadImage;
