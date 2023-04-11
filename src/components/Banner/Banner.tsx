import { StaticImageData } from 'next/image';
import { BannerContainer, BannerImage } from './styles';

interface Props {
  heigth: string;
  width: string;
  image: StaticImageData;
}

export const Banner = (({ width, heigth, image }: Props): JSX.Element => {
  return (
    <>
      <BannerContainer width={width} height={heigth}>
        <BannerImage url={image.src}></BannerImage>
      </BannerContainer>
    </>
  );
})