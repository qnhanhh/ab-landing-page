import { ReactComponent as ItemIcon } from "../../assets/item_icon.svg";
import { ItemContainer } from "./styles";

type ItemProps = {
  item: string;
};

const SubjectItem = ({ item }: ItemProps) => {
  return (
    <ItemContainer>
      <ItemIcon />
      <p>{item}</p>
    </ItemContainer>
  );
};

export default SubjectItem;
