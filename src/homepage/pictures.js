import React, { useState } from "react";
import "react-visual-grid/dist/react-visual-grid.css";

const images = [
  {
    src: require("./pictures/fam.jpg"),
    caption: "08-20-22",
    subtext: "My mom, sister, and I's last meal in Amsterdam after visiting my sister for her work abroad!",
  },
  {
    src: require("./pictures/caterpillarhack.jpg"),
    caption: "04-10-23",
    subtext: "Sophia and I holding our prize from winning 2nd place at the Code in the Dark Hackathon with other Hack4Impact members!",
  },
  {
    src: require("./pictures/unofficial.jpeg"),
    width: 320,
    height: 212,
    caption: "03-12-23",
    subtext: "A crossover between WashU x UIUC when Chris's WashU friends stayed at my apartment for unofficial!",
  },
  {
    src: require("./pictures/h4i.jpg"),
    width: 320,
    height: 212,
    caption: "03-21-23",
    subtext: "Rustom, Ayan, Jason, Chris, and I in Times Square for spring break!"
  },
  {
    src: require("./pictures/doge.jpg"),
    caption: "08-20-22",
    subtext: "Xiaopan waiting to be let back into the house after playing in the snow :)",
  },
  {
    src: require("./pictures/chris.jpg"),
    caption: "03-23-23",
    subtext: "Chris and I waiting in line for pork buns at Mei Li Wah Bakery in NYC!",
  },
  {
    src: require("./pictures/rooftoproomies.jpg"),
    caption: "05-03-23",
    subtext: "A picture I took of Ashley and Natalie on the rooftop of our apartment!"
  },
  {
    src: require("./pictures/hackathon.jpg"),
    caption: "09-27-21",
    subtext: "Louis, Ishaan, Adelia, Devak, and I after we won 1st place at the Pygmalion Hackathon!"
  },
  {
    src: require("./pictures/ai.jpg"),
    caption: "05-07-23",
    subtext: "Me, Justin, and Ethan (my ML team for AI @ UIUC) at WashU for the WILD festival!"
  },
];
export default function App() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="bg-[#080c1f] pt-5 text-center text-white">
      <h2> People in my Life 💞</h2>
      <p className="text-white">
        I wouldn't be where I am if it weren't for the people around me, so I
        wanted to showcase the ones who've helped me grow &lt;3
      </p>
      <div className="flex flex-wrap justify-around">
        {images.map((image, index) => (
          <div
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className="p-5 filter hover:opacity-100 transition duration-200 relative"
          >
            <img
              src={image.src}
              alt={image.alt}
              className={`w-[22.5rem] h-fit rounded-lg filter transition duration-100 ${
                hoveredIndex === index ? "opacity-50 blur-[4px]" : ""
              }`}
            />
            {hoveredIndex === index && (
              <div className="absolute inset-0 flex flex-col justify-center text-left text-white px-20 z-10">
                <h2 className="text-2xl font-bold">
                  {image.caption || "Your text here"}
                </h2>
                {image.subtext && <p className="text-sm">{image.subtext}</p>}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
