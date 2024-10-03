import fs from 'fs';
import imageSize from 'image-size';

const getImageSizes = (imagePath) => {
  if (fs.existsSync(imagePath)) {
    return imageSize(imagePath);
  }
  return { width: 0, height: 0 };
};

export default getImageSizes