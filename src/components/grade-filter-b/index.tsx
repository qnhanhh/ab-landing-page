import { gradeData } from '../../data/dataB';
import GradeItemB from '../grade-item-b';
import { GradeContainer, GradeHeader } from './styles';

const GradeFilterB = ({ header }: { header: string }) => {
  return (
    <GradeContainer>
      <GradeHeader>{header}</GradeHeader>
      {gradeData.map((item, index) => (
        <GradeItemB item={item} key={index} />
      ))}
    </GradeContainer>
  );
};

export default GradeFilterB;
