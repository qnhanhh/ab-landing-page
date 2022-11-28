import { ContentType } from '../../data/dataB';
import subjectImg from '../../assets/subject-img';
import { VideoImg, VideoTagList, VideoTitle } from './styles';
import YouTube, { YouTubeProps } from 'react-youtube';
import ClickHandler from '../click-handler';

const Video = ({ content }: { content: ContentType }) => {
  const { title, videoId, tags, id, subtitle } = content;

  const opts: YouTubeProps['opts'] = {
    width: '330',
    height: '180',
  };

  const style: YouTubeProps['style'] = {
    textAlign: 'center',
  };

  return (
    <>
      {subtitle && <VideoTitle>{subtitle}</VideoTitle>}
      {id ? (
        <ClickHandler>
          <VideoImg src={subjectImg[id - 1]} alt={title} />
        </ClickHandler>
      ) : (
        <YouTube
          opts={opts}
          style={style}
          videoId={videoId}
          title="YouTube video player"
        ></YouTube>
      )}
      <VideoTitle>{title}</VideoTitle>
      <VideoTagList>
        {tags && tags.map((item, index) => <li key={index}>{item}</li>)}
      </VideoTagList>
    </>
  );
};

export default Video;
