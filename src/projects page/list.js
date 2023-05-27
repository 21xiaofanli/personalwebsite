import React from 'react'
import Listing from '../components/listing';
const items = [
  {
    title: "Be+: Create a Digital Version of Yourself",
    text: ["I was part of the ML team on AI@UIUC to create Be+, an app that will generate a chatbot, called a +, that can serve as a digital version of yourself.","Be+ is an app that will generate a chatbot, called a +, that can serve as a digital version of yourself. The app will start with a login and signup page then go to short personality test and then to a surface level questionnaire (e.g. job, family, hobbies, etc). Afterwards the app will allow access to the +. Overtime through conversations with the +, it will gain the ability to mimic your mannerisms and answer questions about yourself."],
    links: [""],
    carouselItems: [
      {
        url: ("https://www.uiuc.ai/"),
        desc: "AI@Illinois Website",
      },
      {
        url: ("https://www.youtube.com/embed/M_3lDhhSqJw?start=3378&end=3414"),
        desc: "Dax Flame describing Be+",
      },
    ],
  },
  {
    title: "7000 Languages",
    text: ["Be+ is an app that will generate a chatbot, called a +, that can serve as a digital version of yourself. The app will start with a login and signup page then go to short personality test and then to a surface level questionnaire (e.g. job, family, hobbies, etc). Afterwards the app will allow access to the +. Overtime through conversations with the +, it will gain the ability to mimic your mannerisms and answer questions about yourself."],
    links: [""],
    carouselItems: [
      {
        url: ("https://uiuc.hack4impact.org/projects/7000-languages"),
        desc: "7000 Languages Description Page",
      },
      {
        url: ("https://uiuc.hack4impact.org/projects/7000-languages"),

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