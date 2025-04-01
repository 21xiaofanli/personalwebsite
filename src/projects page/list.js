import React from 'react'
import Listing from '../components/listing';
import './animation.css';
import { useState, useEffect, useCallback, useRef } from 'react';
const items = [
  {
    title: "AWS Bedrock",
    text: ["As a Software Developer Intern at AWS Bedrock, I worked on an AI agent for kdb+ time-series databases, enabling users to ask English questions about their data via the Bedrock platform while automating backend query translation and execution."],
    tools: ["Python", "TypeScript", "AWS CDK", "AWS Bedrock", "AWS Lambda", "AWS S3", "AWS FinSpace"],
    type: "Previous Work",
    carouselItems: [
      {
        url: ("https://aws.amazon.com/bedrock/"),
        desc: "AWS Bedrock",
      }

    ],
  },
  {
    title: "Be+",
    text: ["As a Machine Learning Integration Developer at AI@UIUC, I was part of the ML team collaborating with YouTuber Daxflame to create Be+. Be+ is an app that generates a chatbot representing a digital version of yourself."],
    tools: ["Python", "OpenAI", "FAISS", "SentenceTransformers", "Flask", "Node.js"],
    type: "Previous Work",
    carouselItems: [
      {
        url: ("https://www.youtube.com/embed/M_3lDhhSqJw?start=3378&end=3414"),
        desc: "Dax Flame Describing Be+",
      },
      {
        url: ("https://www.uiuc.ai/"),
        desc: "AI@UIUC's Website",
      },

    ],
  },
  {
    title: "7000 Languages",
    text: ["On Hack4Impact, I worked as a software developer for the 7000 Languages nonprofit. Our team developed a mobile app aimed at preserving and educating people about endangered languages."],
    tools: ["React Native", "Redux", "Node.js","Express.js", "MongoDB", "Expo", "AWS S3"],
    github: "https://github.com/hack4impact-uiuc/7000-languages",
    type: "Previous Work",
      carouselItems: [
        {
          url: ("https://uiuc.hack4impact.org/projects/7000-languages"),
          desc: "Hack4Impact's Description",
        }

      ],
  },
  {
    title: "TORRIS",
    text: ["On Hack4Impact, I worked as a software developer on SECS to create a website, TORRIS, to bring awareness to people about UIUC's environmental sustainability involvement.", ],
    tools: ["TypeScript", "Prisma", "tRPC", "Apex Charts", "Next.js","Tailwind CSS", "NextAuth.js", "Contentful", "MongoDB Atlas" ],
    github: "https://github.com/toriis-portal/toriis",
    type: "Previous Work",
    carouselItems: [
      {
        url: ("https://www.toriis.earth/home"),
        desc: "TORRIS",
      },
      {
        url: ('https://uiuc.hack4impact.org/projects/students-for-environmental-concerns'),
        desc: "Hack4Impact's Description",
      }
    ],
  },
  {
    title: "Phrenwork",
    text: ["During my time as a Technology Development Intern at Optum, I worked on a team to develop Phrenwork, and mental health application that aims to bridge the gap between mental health professionals and patients."],
    tools: ["React.js", "OpenAI", "ElasticSearch", "Flask", "Node.js"],
    type: "Previous Work",
    carouselItems: [
      {
        image: require("./images/optum.png"),
        desc: "Optum",
        url: ("https://www.optum.com/"),
      },
    ],
  },
  {
    title: "Illini Threads",
    text: ["Illini Threads is a web application that allows students to buy and sell clothes from other students at their respective college."],
    tools: ["MongoDB", "Express.js", "React.js", "Node.js", "Axios", "Tailwind CSS"],
    github: "https://github.com/szhuang21/IlliniThreads",
    type: "Projects",
    carouselItems: [
      {
        url: ("https://www.youtube.com/embed/zKYw2CJstt8"),
        desc: "Illini Threads Demo",
      },
    ],
  },
 
  {
    title: "Band Buddies",
    text: ["Band Buddies is a web application that allows musicians to promote their work to their local community."],
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
    text: [" Healthy & Wealthy is a webapp that promotes healthy eating habits by rewarding students with coupons at healthy restaurants which they can redeem with points. Won 1st place at the Pygmalion Hackathon."],
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
  