import {
  BannerContainer,
  BannerSubtitle,
  BannerText,
  BannerTitle,
} from './styles';
import { BannerType } from '../../data/dataA';
import images from '../../assets/banner-img';

const Banner = ({ data }: { data: BannerType }) => {
  return (
    <BannerContainer>
      <BannerText>
        <BannerSubtitle>{data.subtitle}</BannerSubtitle>
        <BannerTitle>{data.title}</BannerTitle>
      </BannerText>
      <img src={images[data.id]} alt="" />
    </BannerContainer>
  );
};

export default Banner;
