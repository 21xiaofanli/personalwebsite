import React from 'react'
import Listing from '../components/listing';
const items = [
  {
    title: "Be+",
    text: ["I was part of the ML team as a Machine Learning Integration Developer on AI@UIUC in partnership with youtuber Dax Flame to create Be+, an app that will generate a chatbot of a digital version of yourself.",'AI @ UIUC teamed up with the tech youtuber Dax Flame to create Be+, an app designed to generate a chatbot called a "+". This chatbot serves as a digital version of yourself, providing a personalized and interactive virtual presence.The app will start with a login and signup page then go to short personality test and then to a surface level questionnaire (e.g. job, family, hobbies, etc). Afterwards the app will allow access to the "+". Overtime through conversations with the "+", it will gain the ability to mimic your mannerisms and answer questions about yourself.', 'As part of the ML team on this project, I was responsible for creating the ML model that would generate the responses for the chatbot. I mainly focused on creating a class to store everyone\'s personal machine learning model, which captures your previous text and conversations, using all-mpnet-base-v2 Sentence Transformers NLP model and FAISS. Additionally, I developed a Python script that combines the personalized ML model with ChatGPT\'s API to automate message generation and create customized and context-aware responses. Lastly, my team and I created a Flask API that would allow the model to be used in the app.'],
    links: [""],
    carouselItems: [
      {
        url: ("https://www.youtube.com/embed/M_3lDhhSqJw?start=3378&end=3414"),
        desc: "Dax Flame Describing Be+",
      },
      {
        image: require("./images/daxflame.png"),
        desc: "Dax Flame's Youtube Channel",
        url: ("https://www.youtube.com/@daxflame"),
      },
      {
        url: ("https://www.uiuc.ai/"),
        desc: "AI@UIUC's Website",
      },

    ],
  },
  {
    title: "7000 Languages",
    text: ["During Hack4Impact, I was a software developer on 7000 Languages to create a mobile app to store and teach people about endangered languages."],
    links: [""],
    github: "https://github.com/hack4impact-uiuc/7000-languages",
    carouselItems: [
      {
        url: ("https://uiuc.hack4impact.org/projects/7000-languages"),
        desc: "7000 Languages Mobile App Description",
      },
      {
        url: ("https://www.7000.org/"),
        desc: "7000 Languages's Website",

      },
    ],
  },
  {
    title: "TORRIS",
    text: ["During Hack4Impact, I was a software developer on SECS to create a website, TORRIS, to bring awareness to people about UIUC's sustainability efforts."],
    links: [""],
    github: "https://github.com/toriis-portal/toriis",
    carouselItems: [
      {
        url: ("https://www.toriis.earth/home"),
        desc: "TORRIS",
      },
      {
        url: ("https://secsatuiuc.web.illinois.edu/about-us/"),
        desc: "SECS's Website",
      },
    ],
  },
  {
    title: "Phrenwork",
    text: ["During Hack4Impact, I was a software developer on 7000 Languages to create a mobile app to store and teach people about endangered languages."],
    links: [""],
    carouselItems: [
      {
        image: require("./images/optum.png"),
        desc: "Optum's Website",
        url: ("https://www.optum.com/"),
      },
    ],
  },
  {
    title: "Illini Threads",
    text: ["During Hack4Impact, I was a software developer on 7000 Languages to create a mobile app to store and teach people about endangered languages."],
    links: [""],
    github: "https://github.com/szhuang21/IlliniThreads",
    carouselItems: [
      {
        url: ("https://www.youtube.com/embed/zKYw2CJstt8"),
        desc: "Illini Threads Demo",
      },
      {
        image: require("./images/illinithreads.png"),
        desc: "Illini Threads Devpost Submission",
        url: ("https://devpost.com/software/illini-threads"),
      },
    ],
  },
  {
    title: "Automated Phone System",
    text: ["During Hack4Impact, I was a software developer on 7000 Languages to create a mobile app to store and teach people about endangered languages."],
    links: [""],
    carouselItems: [
      {
        url: ("https://www.purpleant.io/"),
        desc: "Purple Ant's Website",
      },
     
    ],
  },
  {
    title: "Band Buddies",
    text: ["Band Buddies is a web application that allows musicians to find other musicians to jam with."],
    links: [""],
    github: "https://github.com/CS222-UIUC/course-project-team-7",
    carouselItems: [
      {
        video: require("./images/bandbuddies.mp4"),
        desc: "Band Buddies Demo",
        url: ("https://github.com/CS222-UIUC/course-project-team-7"),
      },
     
    ],
  },
  ];


export default function ScrollingList() {
    return (
        <div>
            {items.map((item) => (
            <Listing title={item.title} text={item.text} links={item.links} carouselItems={item.carouselItems}/>
        ))}
        </div>
    );
}