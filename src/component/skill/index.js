import React from "react";
import "./style.css";

function index() {
  return (
    <div className='section' id="experience">
      <h1 className="title" ><span>Technical Skills</span><br />AND INTERESTS</h1>
      <div id="skill">
        <ul>
          <h4>Languages & Frameworks</h4>
          {lang.map((skill)=><li>{skill}</li>)}
        </ul>
        <ul>
        <h4>Designing Tools</h4>
          {tools.map((skill)=><li>{skill}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default index;

const lang = ['html',"css",'javascript','bootstrap','jquery','react'];
const tools = ['adobe xd','figma']