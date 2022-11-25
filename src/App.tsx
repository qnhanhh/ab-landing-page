import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import PageA from "./components/page-a";
import PageB from "./components/page-b";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Router>
          <Routes>
            <Route path="a" element={<PageA />} />
            <Route path="b" element={<PageB />} />
          </Routes>
        </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;
