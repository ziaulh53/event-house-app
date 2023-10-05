export const getAvatar = (url) => {
  let image = url;
  if (!image) {
    image = "/img/avatar-default.webp";
  }
  return image;
};
export const getProductImage = (url) => {
  let image = url;
  if (!image) {
    image = "/img/product-default.png";
  }
  return image;
};
