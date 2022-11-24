import { ContentType } from "../../data/dataB";
import subjectImg from "../../assets/subject-img";
import { VideoIframe, VideoImg, VideoTagList, VideoTitle } from "./styles";

const Video = ({ content }: { content: ContentType }) => {
  const { title, url, tags, id, subtitle } = content;
  return (
    <>
      {subtitle && <VideoTitle>{subtitle}</VideoTitle>}
      {id?(
        <VideoImg src={subjectImg[id-1]} alt={title} />
      ):(
        <VideoIframe
          width="330"
          src={url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></VideoIframe>
      )}
      <VideoTitle>{title}</VideoTitle>
      <VideoTagList>
        {tags && tags.map((item, index) => <li key={index}>{item}</li>)}
      </VideoTagList>
    </>
  );
};

export default Video;
