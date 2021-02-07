import React from "react";
import Intro from '../component/intro/index';
import Educational from '../component/education/index';
import Experience from '../component/skill/index';
import Work from '../component/work/index';
import Work_Experience from '../component/wrkexp/index'
import Footer from '../component/footer/index';
import "./style.css";

function index() {
  return (
    <div id="Container">
      <Intro />
      <Educational />
      <Experience />
      <Work />
      <Work_Experience />
      <Footer />
    </div>
  );
}

export default index;
