import { useRecoilValue } from "recoil";
import { GradeType } from "../../data/dataB";
import { gradeOpenState } from "../../states";
import SubjectFilterB from "../subject-filter-b";
import ToggleVector from "../toggle-vector";
import { ItemContainer } from "./styles";

type ItemProps = {
  item: GradeType;
};

const GradeItemB = ({ item }: ItemProps) => {
  const isOpen = useRecoilValue(gradeOpenState);
  return (
    <>
      <ItemContainer>
        <p>{item.grade}</p>
        <ToggleVector />
      </ItemContainer>
      {isOpen &&
        item.subjects &&
        item.subjects.map((item, index) => (
          <SubjectFilterB item={item} index={index} key={index} />
        ))}
    </>
  );
};

export default GradeItemB;
