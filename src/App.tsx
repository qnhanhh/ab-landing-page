import React from "react";
import Banner from "./components/banner";
import GradeFilter from "./components/grade-filter";
import HotContent from "./components/hot-content";
import { RecoilRoot } from "recoil";
import Popup from "./components/popup";
import * as dataA from "./data/dataA";
import * as dataB from "./data/dataB";
import HotContentB from "./components/hot-content-b";
import GradeFilterB from "./components/grade-filter-b";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        {/* <Banner data={dataA.bannerData} />
        <HotContent content={dataA.contentData} />
        <GradeFilter header={dataA.gradeHeader} />
        <Popup /> */}

        <Banner data={dataB.bannerData} />
        <HotContentB content={dataB.contentData} />
        <GradeFilterB header={dataB.gradeHeader} />
        <Popup />
      </RecoilRoot>
    </div>
  );
}

export default App;
