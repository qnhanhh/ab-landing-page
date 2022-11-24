import { useRecoilValue } from "recoil";
import { GradeType } from "../../data/dataA";
import { gradeOpenState } from "../../states";
import ClickHandler from "../click-handler";
import SubjectFilter from "../subject-filter";
import ToggleVector from "../toggle-vector";
import { ItemContainer } from "./styles";

type ItemProps = {
  item: GradeType;
};

const GradeItem = ({ item }: ItemProps) => {
  const isOpen = useRecoilValue(gradeOpenState);

  return (
    <>
      <ItemContainer>
        <p>{item.grade}</p>
        {item.grade === "Lớp 12" ? (
          <ToggleVector />
        ) : (
          <ClickHandler>
            <ToggleVector />
          </ClickHandler>
        )}
      </ItemContainer>
      {isOpen &&
        item.subjects &&
        item.subjects.map((item, index) => (
          <SubjectFilter item={item} index={index} key={index} />
        ))}
    </>
  );
};

export default GradeItem;
