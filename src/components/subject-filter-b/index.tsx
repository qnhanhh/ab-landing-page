import { useState } from 'react';
import { SubjectsType } from '../../data/dataB';
import Video from '../video';
import { SubjectContainer } from './styles';

type FilterProps = {
  item: SubjectsType;
  index: number;
};
const background = ['#F3F7FF', '#F3FFFB', '#FDF3FF', '#F3FCFF', '#FFF3F4'];

const SubjectFilterB = ({ item, index }: FilterProps) => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <SubjectContainer
        onClick={handleClick}
        backgroundColor={`${background[index % 5]}`}
      >
        <p>{item.subjectName}</p>
      </SubjectContainer>
      {isOpen &&
        item.subjectList &&
        item.subjectList.map((item, index) => (
          <Video content={item} key={index} />
        ))}
    </>
  );
};

export default SubjectFilterB;
