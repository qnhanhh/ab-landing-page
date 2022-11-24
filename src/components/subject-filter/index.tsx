import { useState } from "react";
import { SubjectsType } from "../../data/dataA";
import SubjectItem from "../subject-item";
import { SubjectContainer } from "./styles";

type FilterProps = {
  item: SubjectsType;
  index: number;
};
const background = ["#F3F7FF", "#F3FFFB", "#FDF3FF", "#F3FCFF", "#FFF3F4"];

const SubjectFilter = ({ item, index }: FilterProps) => {
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
          <SubjectItem item={item} key={index} />
        ))}
    </>
  );
};

export default SubjectFilter;
