import React from 'react';

export const getColor = percent => {
  const value = parseInt(percent);
  if (value >= 90) {
    return { r: 146, g: 200, b: 26 };
  }
  if (value >= 75) {
    return { r: 185, g: 237, b: 94 };
  }
  if (value >= 50) {
    return { r: 195, g: 225, b: 94 };
  }
  if (value >= 25) {
    return { r: 244, g: 104, b: 11 };
  }
  if (value >= 10) {
    return { r: 230, g: 100, b: 11 };
  }
  return { r: 180, g: 35, b: 19 };
};

export const getColorClassNes = percent => {
  const value = parseInt(percent);
  if (value > 70) {
    return "is-success";
  }
  if (value > 45) {
    return "is-warning";
  }
  return "is-error";
}

export const Image = (image, alt, styles) => {
  return (
    <img
      src={image}
      className="rounded mx-auto d-block"
      alt={alt || "image"}
      style={{
        padding: 8,
        height: 60,
        width: 60,
        objectFit: "contain",
        imageRendering: "pixelated",
        ...styles,
      }}
    />
  );
};

export const ImageGenerator = (path) => {
  const image = require('../images/' + path);;
  return image;
}

