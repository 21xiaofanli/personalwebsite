import * as React from 'react';
import { Chrono } from "react-chrono";  
const items = [{
    title: "February 2023 - Current",
    cardTitle: "AI @ UIUC",
    cardSubtitle:
      "Machine Learning Integration Developer",
    cardDetailedText: ["I joined AI @ UIUC as a Machine Learning Integration Developer! I worked with 3 other members to build out the AI portion of a personalized chatbot."],
    // timelineContent: <div>Custom content</div>,
    cardHeight: '100px',
  }, {
    title: "September 2022 - Current",
    cardTitle: "Hack4Impact @ UIUC",
    cardSubtitle:
      "Full-Stack Developer",
    cardDetailedText: ["I joined AI @ UIUC as a Machine Learning Integration Developer! I worked with 3 other members to build out the AI portion of a personalized chatbot."],
    // timelineContent: <div>Custom content</div>,
    cardHeight: '100px',
  },
  {
    title: "June 2022 - August 2022",
    cardTitle: "Optum - UnitedHealth Group",
    cardSubtitle:
      "Software Engineering Intern",
    cardDetailedText: ["I joined AI @ UIUC as a Machine Learning Integration Developer! I worked with 3 other members to build out the AI portion of a personalized chatbot."],
    // timelineContent: <div>Custom content</div>,
    cardHeight: '100px',
  },
  {
    title: "November 2020 - April 2021",
    cardTitle: "Code Society @ IMSA",
    cardSubtitle:
      "Project Manager",
    cardDetailedText: ["I joined AI @ UIUC as a Machine Learning Integration Developer! I worked with 3 other members to build out the AI portion of a personalized chatbot."],
    // timelineContent: <div>Custom content</div>,
    cardHeight: '100px',
  },
  {
    title: "November 2019 - April 2020",
    cardTitle: "WeSolv",
    cardSubtitle:
      "Data Analyst Intern",
    cardDetailedText: ["I joined AI @ UIUC as a Machine Learning Integration Developer! I worked with 3 other members to build out the AI portion of a personalized chatbot."],
    // timelineContent: <div>Custom content</div>,
    cardHeight: '100px',
  },
  {
    title: "June 2020 - August 2020",
    cardTitle: "Purple Ant",
    cardSubtitle:
      "Software Engineering Intern",
    cardDetailedText: ["I joined AI @ UIUC as a Machine Learning Integration Developer! I worked with 3 other members to build out the AI portion of a personalized chatbot."],
    // timelineContent: <div>Custom content</div>,
    cardHeight: '100px',
  },
]
export default function CustomizedTimeline() {
  return (
    <div className = "my-20">
<Chrono items={items} mode="VERTICAL_ALTERNATING" >
    <div className="chrono-icons">
    <div className = 'scale-150'>
    <img src= {require("./icons/ai.png")} alt = "hi"/>
    </div>
    <img src= {require("./icons/h4i.png")} alt = "hi" className = "scale-150"/>
    <img src= {require("./icons/optum.png")} alt = "hi" className = "scale-150"/>
    <img src= {require("./icons/imsa.png")} alt = "hi" className = "scale-150"/>
    <img src= {require("./icons/wesolv.png")} alt = "hi" className = "scale-150"/>
    <img src= {require("./icons/purpleant.png")} alt = "hi" className = "scale-150 my-2"/>
    </div>
    {/* </div> */}
</Chrono>
</div>
  );
}