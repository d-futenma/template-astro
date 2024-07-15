import { getImage } from 'astro:assets';

const optimizeImage = async (path, importedImages, isSvg, format) => {
  try {
    const result = await importedImages[path]();
    return isSvg ? result.default : await getImage({ src: result.default, format });
  } catch (error) {
    console.error(`image not found: ${path}`);
    return null;
  }
};

export default optimizeImage