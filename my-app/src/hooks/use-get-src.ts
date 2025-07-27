import { StaticImageData } from "next/image";

type ImageType = StaticImageData | string;

export const getImageUrl = (image: ImageType): string => {
  if (typeof image === "string") {
    return image;
  }
  return image.src;
};
