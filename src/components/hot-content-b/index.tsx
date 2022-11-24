import { ContentContainer, ContentHeader, ContentSpan } from "./styles";
import { ReactComponent as RightVector } from "../../assets/right_vector.svg";
import { ReactComponent as PremiumIcon } from "../../assets/premium.svg";
import { ContentType } from "../../data/dataB";
import Video from "../video";

const HotContentB = ({ content }: { content: ContentType }) => {
  return (
    <ContentContainer>
      <ContentHeader>
        <ContentSpan>
          <PremiumIcon />
          <span>Nội dung hot nhất</span>
        </ContentSpan>
        <RightVector />
      </ContentHeader>

      <Video content={content} />
    </ContentContainer>
  );
};

export default HotContentB;
