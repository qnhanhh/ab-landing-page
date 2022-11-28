import {
  ContentBody,
  ContentContainer,
  ContentHeader,
  ContentSpan,
} from './styles';
import { ReactComponent as RightVector } from '../../assets/right_vector.svg';
import { ReactComponent as PremiumIcon } from '../../assets/premium.svg';
import contentImg from '../../assets/content-body';
import ClickHandler from '../click-handler';

const HotContent = ({ content }: { content: string[] }) => {
  return (
    <ClickHandler>
      <ContentContainer>
        <ContentHeader>
          <ContentSpan>
            <PremiumIcon />
            <span>Nội dung hot nhất</span>
          </ContentSpan>
          <RightVector />
        </ContentHeader>

        <ContentBody>
          {content.map((item, index) => (
            <div key={index}>
              <img src={contentImg[index]} alt="" />
              <span>{item}</span>
              <br />
            </div>
          ))}
        </ContentBody>
      </ContentContainer>
    </ClickHandler>
  );
};

export default HotContent;
