import * as React from 'react';
import { Chrono } from "react-chrono";  
const items = [{
    title: "February 2023 - Current",
    cardTitle: "AI @ UIUC",
    cardSubtitle:
      "Machine Learning Integration Developer",
    cardDetailedText: ["I joined AI @ UIUC as a Machine Learning Integration Developer. I worked with 3 other members to build out the AI portion of a personalized chatbot.","AI @ UIUC is a club at UIUC that is dedicated towards creating AI related projects to spread awareness about AI to the community. During my time on AI @ UIUC, I was able to learn how to use Python and PyTorch to build out a machine learning model that would be able to classify the sentiment of a user's message. I was able to learn how to use a machine learning model to integrate it into a chatbot that would be able to respond to a user's message with a personalized response."],
    // timelineContent: <div>Custom content</div>,
    cardHeight: '100px',
  }, {
    title: "September 2022 - Current",
    cardTitle: "Hack4Impact @ UIUC",
    cardSubtitle:
      "Full-Stack Developer",
    cardDetailedText: ["I joined Hack4Impact as a Software Developer. Hack4Impact is a club at UIUC that is dedicated towards helping non-profits build web applications to help further their cause. I was placed on the team 7000 Languages for my Fall Semester, and joined TORRIS for my Spring Semester.","7000 Languages is a non-profit dedicated towards preserving and teaching endangered languages. During my time on 7000 Languages, I was able to learn a complex tech-stack and build out a full-stack web application for a non-profit organization. I was able to learn how to use React, Node.js, and MongoDB to build out a web application that would allow users to learn languages from native speakers.","TORRIS is a club on campus dedicated to spread awaremenss about environmental pollution related to the university. During my time on TORRIS, I was able to learn how to use TypeScript, React.js, Prisma, MongoDB, and Contentful to build out a mobile application for a non-profit organization. I was able to heavily contribute to the application by applying my previous semester's knowledge to build out the front-end and back-end of the application."],
    // timelineContent: <div>Custom content</div>,
    cardHeight: '100px',
  },
  {
    title: "June 2022 - August 2022",
    cardTitle: "Optum - UnitedHealth Group",
    cardSubtitle:
      "Software Engineering Intern",
    cardDetailedText: ["I joined Optum as a Technology Development Intern! I was placed on a team with 4 other interns to create a journaling web application.", "Optum is a branch of UnitedHealth Group that provides healthcare services and solutions to improve the healthcare industry. During my time at Optum, I was able to build a full-stack website that would allow users to journal their thoughts and feelings as a medium to connect with their therapist. I was able to learn how to work with a team of interns to build out a full-stack web application using React, Node.js, and ElasticSearch."],
    // timelineContent: <div>Custom content</div>,
    cardHeight: '100px',
  },
  {
    title: "November 2020 - April 2021",
    cardTitle: "Code Society @ IMSA",
    cardSubtitle:
      "Project Manager",
    cardDetailedText: ["I joined Code Society @ IMSA as a Project Manager! I led 5 of my peers to build a google extension that served to consolidate classes, extracurriculars, and schedules for 600+ students into a unified and convenient space.", "Code Society is a club at my high school dedicated to creating projects that would benefit my high school community. During my time as a Project Manager, I was able to learn how to use technologies I was comfortable with to teach others about how to create an application. I learned a lot about how to teach others effectively and how to manage a team of people to create a product that would benefit the community."],
    // timelineContent: <div>Custom content</div>,
    cardHeight: '100px',
  },
  {
    title: "November 2019 - April 2020",
    cardTitle: "WeSolv",
    cardSubtitle:
      "Data Analyst Intern",
    cardDetailedText: ["I joined WeSolv as a Data Intern! I worked with another intern to analyze WeSolv's clients and help them understand their customer base", "WeSolv is a startup that aims to help companies find diverse talent through case competitions. Given their extensive database of information gathered from these competitions, I was entrusted with the task of extracting meaningful trends from the data to assist WeSolv in identifying ideal companies and clients within their respective industries. I mainly performed basic statistical analysis, but I was able to see how statistics can be used firsthand to create a better product for a company, which led me to also pursue statistics in college."],
    // timelineContent: <div>Custom content</div>,
    cardHeight: '100px',
  },
  {
    title: "June 2019 - August 2019",
    cardTitle: "Purple Ant",
    cardSubtitle:
      "Software Engineering Intern",
    cardDetailedText: ["I joined Purple Ant as a Software Developer! I worked closely with the founders to help them build out specific tech aspects of their company.", "Purple Ant is an insurance startup that aims to protect users against crypto scams. I didn't have much experience in CS and this was my first internship, so the founders helped guide me on the protocols of CS and how to use the command line and Visual Studio. Throughout the summer, I ended up writing an automated phone system for their customers using Java and Twilio API. This experience is the hallmark of when I started to learn CS." ],
    // timelineContent: <div>Custom content</div>,
    cardHeight: '100px',
  },
]
export default function CustomizedTimeline() {
  return (
    <div className = "my-20">
<Chrono items={items} mode="VERTICAL_ALTERNATING" slidesShow >
    <div className="chrono-icons">
    {/* <img src= {require("./icons/ai.png")} alt = "hi"/>
    <img src= {require("./icons/h4i.png")} alt = "hi" className = "scale-125"/>
    <img src= {require("./icons/optum.png")} alt = "hi" className = "scale-125"/>
    <img src= {require("./icons/imsa.png")} alt = "hi" className = "scale-125"/>
    <img src= {require("./icons/wesolv.png")} alt = "hi" className = "scale-125"/>
    <img src= {require("./icons/purpleant.png")} alt = "hi" className = "scale-125 my-2"/> */}
    </div>
</Chrono>
</div>
  );
}