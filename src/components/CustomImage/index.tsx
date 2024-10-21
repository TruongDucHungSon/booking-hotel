import Image from 'next/image';
import { FC } from 'react';
interface CustomImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  classNameImg?: string;
}

const CustomImage: FC<CustomImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  classNameImg,
}) => {
  if (!src) {
    return null;
  }

  return (
    <div className={`image-container ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={100}
        priority
        className={`h-full w-full object-cover ${classNameImg}`}
      />
    </div>
  );
};

export default CustomImage;
