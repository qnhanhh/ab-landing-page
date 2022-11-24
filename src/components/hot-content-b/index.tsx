import { ContentContainer, ContentHeader, ContentSpan } from "./styles";
import { ReactComponent as RightVector } from "../../assets/right_vector.svg";
import { ReactComponent as PremiumIcon } from "../../assets/premium.svg";
import { ContentType } from "../../data/dataB";
import Video from "../video";
import ClickHandler from "../click-handler";

const HotContentB = ({ content }: { content: ContentType }) => {
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

        <Video content={content} />
      </ContentContainer>
    </ClickHandler>
  );
};

export default HotContentB;
