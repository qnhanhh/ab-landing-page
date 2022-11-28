import * as dataA from '../../data/dataA';
import Banner from '../banner';
import GradeFilter from '../grade-filter';
import HotContent from '../hot-content';
import Popup from '../popup';

const PageA = () => {
  return (
    <>
      <Banner data={dataA.bannerData} />
      <HotContent content={dataA.contentData} />
      <GradeFilter header={dataA.gradeHeader} />
      <Popup />
    </>
  );
};

export default PageA;
