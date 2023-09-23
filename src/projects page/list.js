import React from 'react'
import Listing from '../components/listing';
import './animation.css';
import { useState, useEffect, useCallback, useRef } from 'react';
const items = [
  {
    title: "Be+",
    text: ["As a Machine Learning Integration Developer at AI@UIUC, I was part of the ML team collaborating with YouTuber Daxflame to create Be+. Be+ is an app that generates a chatbot representing a digital version of yourself.",'AI @ UIUC teamed up with the tech youtuber Dax Flame to create Be+, an app designed to generate a chatbot called a "+". This chatbot serves as a digital version of yourself, providing a personalized and interactive virtual presence. Overtime through conversations and personality surveys with Be+, it will gain the ability to mimic your mannerisms and answer questions about yourself.As a member of the ML team on this project, my responsibilities included generating responses for the chatbot. This involved several tasks such as creating classes to generate individual embedded user models, integrating them with OpenAI\'s API, and developing a Flask server to host each model.', 'Note: Not out yet, currently in development!'],
    tools: ["Python", "OpenAI", "FAISS", "SentenceTransformers", "Flask", "Node.js"],
    type: "Previous Work",
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
    text: ["On Hack4Impact, I worked as a software developer for the 7000 Languages nonprofit. Our team developed a mobile app aimed at preserving and educating people about endangered languages.",'H4I collaborated with 7000 Languages to develop a mobile app to enable users to create and access language learning courses for various languages that would otherwise be undocumented. This app is primarily catered towards language course contributers to preserving the languages before they die out, but also has the functionality to empower individuals to develop their language skills and provides a platform for sharing and learning a diverse range of language courses. As a software developer on this project, I worked on creating the update functionality and pages on the contributor side using React Native, Redux, and Express.js, implementing navigation, and developing Express.js API endpoints using a MongoDB aggregation pipeline that incorporates pagination and fuzzy search.', "Note: This project has been handed off to the client, awaiting its release!"],
    tools: ["React Native", "Redux", "Node.js","Express.js", "MongoDB", "Expo", "AWS S3"],
    github: "https://github.com/hack4impact-uiuc/7000-languages",
    type: "Previous Work",
    carouselItems: [
      {
        url: ("https://uiuc.hack4impact.org/projects/7000-languages"),
        desc: "7000 Languages Description on H4I's Website",
      },
      {
        url: ("https://www.7000.org/"),
        desc: "7000 Languages's Website",
      },
    ],
  },
  {
    title: "TORRIS",
    text: ["On Hack4Impact, I worked as a software developer on SECS to create a website, TORRIS, to bring awareness to people about UIUC's environmental sustainability involvement.", "Hack4Impact collaborated with UIUC's environmental club SECS to create TORRIS, a website that aims to bring awareness to the environmental sustainability efforts of the University of Illinois at Urbana-Champaign. It provides a platform for students to learn about the university's sustainability initiatives and get involved with them. As a software developer on this project, I focused on implementing the functionality to grant specific access permissions for administrators using TRPC procedures and Prisma, creating data visualizations with Apex Charts, and developing divestment sections on the website using TypeScript and Contentful."],
    tools: ["TypeScript", "Prisma", "tRPC", "Apex Charts", "Next.js","Tailwind CSS", "NextAuth.js", "Contentful", "MongoDB Atlas" ],
    github: "https://github.com/toriis-portal/toriis",
    type: "Previous Work",
    carouselItems: [
      {
        url: ("https://www.toriis.earth/home"),
        desc: "TORRIS",
      },
      {
        url: ("https://secsatuiuc.web.illinois.edu/about-us/"),
        desc: "SECS's Website",
      },
      {
        url: ('https://uiuc.hack4impact.org'),
        desc: "Hack4Impact's Website",
      }
    ],
  },
  {
    title: "Phrenwork",
    text: ["During my time as a Technology Development Intern at Optum, I worked on a team to devlop Phrenwork, and mental health application that aims to bridge the gap between mental health professionals and patients.", "Phrenwork is a mental health application that aims to bridge the gap between mental health professionals and patients. Phrenkwork aims to provide a platform for patients to track their mental health by enabling them to log diary entries and emotions which creates a mood map, which visualizes their emotional history for better understanding. Additionally, the platform offers a summarization feature that facilitates therapists in reviewing patient progress more efficiently. As a technology development intern on this project, I worked on creating the Flask REST API, implementing the summarization feature with OpenAI's API, and designing and developing the front-end of the application with React.js."],
    tools: ["React.js", "OpenAI", "ElasticSearch", "Flask", "Node.js"],
    type: "Previous Work",
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
    text: ["Illini Threads is a web application that allows students to buy and sell clothes from other students at their respective college.", "For the HackIllinois 2023 submission, my friends and I created Illini Threads, a web application to  create a platform to allow students to buy and sell clothes from one another. Illini Threads aims to foster a sense of security by ensuring that students rent to fellow students, providing a platform for students to earn quick cash and conveniently connect with renters/rentees in public college spaces. This initiative contributes to the growth and cohesion of the fashion community among students. I mainly worked on creating the UI of the application with React.js."],
    tools: ["MongoDB", "Express.js", "React.js", "Node.js", "Axios", "Tailwind CSS"],
    github: "https://github.com/szhuang21/IlliniThreads",
    type: "Projects",
    carouselItems: [
      {
        url: ("https://www.youtube.com/embed/zKYw2CJstt8"),
        desc: "Illini Threads Demo & Description",
      },
    ],
  },
  // {
  //   title: "Automated Phone System",
  //   text: ["During my time as a Software Engineering Intern at Purple Ant, I created an automated phone system for the company.", "Purple Ant is a software development company that specializes in insuring people against crypto scams. This was my first official experience learning CS! During my time as a software engineering intern at Purple Ant, I created an automated phone system for the company for their clients. This system allows clients to call the company and be redirected to the appropriate department based on their input. I worked on this project using Twilio's API and Java."],
  //   tools: ["Java", "Twilio"],
  //   type: "Previous Work",
  //   carouselItems: [
  //     {
  //       url: ("https://www.purpleant.io/"),
  //       desc: "Purple Ant's Website",
  //     },
     
  //   ],
  // },
  {
    title: "Band Buddies",
    text: ["Band Buddies is a web application that allows musicians to promote their work to their local community.", "Band Buddies is a web application that allows musicians to promote their work to their local community. It aims to provide a platform for musicians to connect with other musicians and venues to find gigs and jam with other musicians. As the lead software developer on this project, I worked on creating the UI of the application with React.js and dividing up tasks within the team."],
    tools: ["React.js", "Node.js", "Express.js", "MongoDB", "Axios", "Tailwind CSS"],
    github: "https://github.com/CS222-UIUC/course-project-team-7",
    type: "Projects",
    carouselItems: [
      {
        video: require("./images/bandbuddies.mp4"),
        desc: "Band Buddies Demo",
        url: ("https://github.com/CS222-UIUC/course-project-team-7"),
      },
     
    ],
  },
  {
    title: "Healthy & Wealthy",
    text: [" Healthy & Wealthy is a webapp that promotes healthy eating habits by rewarding students with coupons at healthy restaurants which they can redeem with points. Won 1st place at the Pygmalion Hackathon.", "Healthy & Wealthy was the very first project I've ever done in college! For the 2021 Pygmalion Hackathon, my friends and I a webapp that promotes healthy eating habits by rewarding UIUC students with coupons to healthy local restaurants which they can redeem with points from logging student's food eaten from the dining hall. As a software developer on this project, I worked on creating the UI of the application with vanilla HTML and CSS, and also worked on scraping the UIUC dining hall website for food data using Beautiful Soup and Python."],
    tools: ["HTML", "CSS", "Python", "Beautiful Soup"],
    type: "Projects",
    carouselItems: [
      {
        video: require("./images/healthyandwealthy.mp4"),
        desc: "Healthy & Wealthy Demo",
        url: ("https://github.com/21xiaofanli/UIUC-Healthy-and-Wealthy"),
      },
     
    ],
  },
  ];

  const buttons = [
    {type: "All"},
    {type: "Previous Work"},
    {type: "Projects"},
  ]

  export default function ScrollingList() {
    const [filteredItems, setFilteredItems] = useState(items);
    const [selectedType, setSelectedType] = useState("All");
    const [selectedButton, setSelectedButton] = useState("All");
    const [initialLoad, setInitialLoad] = useState(true); // Flag to track initial load
    const filteredItemsRef = useRef(null);
  
    const updateFilteredItems = useCallback(() => {
      let newFilteredItems = items.filter((item) =>
        selectedType === "All" || item.type === selectedType
      );
      setFilteredItems(newFilteredItems);
      setSelectedButton(selectedType);
  
      // Scroll the filtered items section to the top if a filter is selected and not on initial load
      if (filteredItemsRef.current && selectedType !== "All" && !initialLoad) {
        filteredItemsRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, [selectedType, initialLoad]);
  
    useEffect(() => {
      updateFilteredItems();
      setInitialLoad(false); // Set the initialLoad flag to false after the first render
    }, [updateFilteredItems]);
  
    const handleFilter = (e) => {
      const buttonType = e.target.value;
      setSelectedType(buttonType);
    };
  
    return (
      <div className="pb-20">
        <hr style={{ backgroundColor: 'grey', height: '2px', width: '60%', margin: '0 auto' }} />
        <h2 className="mx-[5%] my-[2%] pt-10">Projects</h2>
        <div className="mx-[4%] flex flex-wrap">
          <div className="flex flex-col md:w-[30%] w-[100%] h-[90%] md:sticky md:top-1/3">
            {buttons.map((button, index) => (
              <button
                key={index}
                value={button.type}
                onClick={handleFilter}
                className={`rounded mx-1 py-3 px-2 text-xl mt-2 ${
                  selectedButton === button.type ? 'bg-blue-500 text-white' : 'bg-transparent text-cyan-700'
                }`}
              >
                {button.type}
              </button>
            ))}
          </div>
          <div className="inline-block w-[90%] md:w-[70%] justify-end" ref={filteredItemsRef}>
            {filteredItems.map((item, index) => (
              <Listing
                key={index}
                title={item.title}
                text={item.text}
                tools={item.tools}
                carouselItems={item.carouselItems}
                github={item.github}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
  