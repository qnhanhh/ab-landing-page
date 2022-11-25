import Banner from "../banner";
import GradeFilterB from "../grade-filter-b";
import HotContentB from "../hot-content-b";
import * as dataB from "../../data/dataB";
import Popup from "../popup";

const PageB = () => {
  return (
    <>
      <Banner data={dataB.bannerData} />
      <HotContentB content={dataB.contentData} />
      <GradeFilterB header={dataB.gradeHeader} />
      <Popup />
    </>
  );
};

export default PageB;
