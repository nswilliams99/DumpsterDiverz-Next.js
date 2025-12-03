import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { cn } from '@/lib/utils';
import { getPlaceholder, type PlaceholderType } from '@/utils/placeholders';

interface ImageProps extends Omit<NextImageProps, 'src'> {
  src?: string;
  alt: string;
  placeholderType?: PlaceholderType;
  fallbackSrc?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down' | 'none';
  objectPosition?: string;
  blurDataURL?: string;
}

const Image = ({
  src,
  alt,
  className,
  priority = false,
  sizes,
  width,
  height,
  fill,
  objectFit = 'cover',
  objectPosition,
  placeholderType = 'default',
  fallbackSrc,
  onError,
  quality = 85,
  blurDataURL,
  ...props
}: ImageProps) => {
  const finalSrc = src || fallbackSrc || getPlaceholder(placeholderType);
  
  const shouldUseFill = fill || (!width || !height);
  
  const imageClassNames = cn(
    'transition-opacity duration-300',
    objectFit === 'cover' && 'object-cover',
    objectFit === 'contain' && 'object-contain',
    objectFit === 'fill' && 'object-fill',
    objectFit === 'scale-down' && 'object-scale-down',
    objectFit === 'none' && 'object-none',
    className
  );

  const imageStyle = {
    ...(objectPosition && { objectPosition }),
  };

  const imageProps: any = {
    src: finalSrc,
    alt,
    className: imageClassNames,
    style: imageStyle,
    priority,
    sizes,
    quality,
    onError,
    ...props,
  };

  if (shouldUseFill) {
    imageProps.fill = true;
  } else {
    imageProps.width = width;
    imageProps.height = height;
  }

  if (blurDataURL) {
    imageProps.placeholder = 'blur';
    imageProps.blurDataURL = blurDataURL;
  }

  return <NextImage {...imageProps} />;
};

export default Image;
