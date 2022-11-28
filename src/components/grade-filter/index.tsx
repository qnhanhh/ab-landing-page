import { gradeData } from '../../data/dataA';
import GradeItem from '../grade-item';
import { GradeContainer, GradeHeader } from './styles';

const GradeFilter = ({ header }: { header: string }) => {
  return (
    <GradeContainer>
      <GradeHeader>{header}</GradeHeader>
      {gradeData.map((item, index) => (
        <GradeItem item={item} key={index} />
      ))}
    </GradeContainer>
  );
};

export default GradeFilter;
