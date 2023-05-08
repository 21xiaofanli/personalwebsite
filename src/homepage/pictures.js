import React, { useState } from "react";
import "react-visual-grid/dist/react-visual-grid.css";

const images = [
  {
    src: require("./pictures/fam.jpg"),
    caption: "08-20-22",
    subtext: "My mom, sister, and I ate at an Indonesian restaurant in Amsterdam. My sister went on a work trip to Amsterdam, and my mom and I decided to tag along. The picture was taken my last night there before flying back to the US. It was my first time traveling to Europe, and I had a blast!",
  },
  {
    src: require("./pictures/caterpillarhack.jpg"),
    caption: "04-10-23",
    subtext: "Sophia and I won 2nd place at the Code in the Dark Hackathon with a bunch of other Hack4Impact members! We weren't planning on attending the event since we were busy working on our hackathon submission, but decided to go last minute. ",
  },
  {
    src: require("./pictures/unofficial.jpeg"),
    width: 320,
    height: 212,
  },
  {
    src: require("./pictures/h4i.jpg"),
    width: 320,
    height: 212,
  },
  {
    src: require("./pictures/doge.jpg"),
    caption: "08-20-22",
    subtext: "Just a picture of my dog, Xiaopan. No other explanation needed.",
  },
  {
    src: require("./pictures/chris.jpg"),
  },
  {
    src: require("./pictures/rooftoproomies.jpg"),
  },
  {
    src: require("./pictures/hackathon.jpg"),
  },
  {
    src: require("./pictures/ai.jpg"),
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
      <h2> My People 💞</h2>
      <p className="text-white">
        I wouldn't be where I am if it weren't for the people in my life, so I
        wanted to showcase the ones who've helped me grow &lt;3
      </p>
      <div className="grid grid-cols-3 gap-4 p-5">
        {images.map((image, index) => (
          <div
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className="col-span-1 rounded mx-[10%] py-2 w-fit h-fit filter hover:opacity-100 transition duration-500"
          >
            {hoveredIndex === index ? (
              <div className="relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="rounded-lg filter opacity-50 blur-[4px] transition duration-500"
                />
                <div className="absolute px-5 top-0 left-0 w-full h-full flex flex-col justify-center text-left text-white">
                  <h2 className="text-2xl font-bold">
                    {image.caption || "Your text here"}
                  </h2>
                  {image.subtext && (
                    <p className="text-sm">{image.subtext}</p>
                  )}
                </div>
              </div>
            ) : (
              <img
                src={image.src}
                alt={image.alt}
                className="rounded-lg filter transition duration-500"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
