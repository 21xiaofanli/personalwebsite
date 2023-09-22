import React, { useRef } from 'react';
import { Carousel } from 'react-bootstrap';
import Description from './description';
import { FaGithubAlt } from 'react-icons/fa';
export default function Listing({ title, text, github, tools, carouselItems }) {
  const carouselRef = useRef(null);

  return (
    <div className="flex flex-col flex-wrap ml-auto pr-[5%]">

      <div className=" w-full rounded-2xl mx-[5%] justify-right ">
      <Carousel fade interval={null} ref={carouselRef} controls = {false} >
  {carouselItems.map((item, index) => (
    <Carousel.Item key={index} className="rounded h-[450px] ">
      {item.image ? (
        <img src={item.image} alt={item.title} className="rounded-2xl w-[100%] h-[450px] border"/>
        
      ) : item.video ? (
        <video src={item.video} controls muted className="rounded-2xl w-full h-450px border" />
      ) : (
          <iframe
            title={item.title}
            src={item.url}
            width="100%"
            height="450"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
            className="rounded-2xl border bg-white"
          />      )}
      <Carousel.Caption>


      <div className="flex flex-col items-center">
  <div className="w-fit transform hover:scale-110 transition duration-300 ease-in-out p-2 bg-black shadow-xl rounded-xl bg-opacity-50 mb-0" style={{ maxWidth: '100%' }}>
    <a href={item.url} className="w-fit text-white no-underline" target="_blank" rel="noopener noreferrer">
      {item.desc}
    </a>
  </div>
</div>


      </Carousel.Caption>
    </Carousel.Item>
  ))}
</Carousel>
     
      <Description className = "w-[100%]  text-black">
            <div>
              <div class="flex justify-between mb-2">
                <span class="order-1 text-xl font-semibold">{title}</span>
                {github && (<span class="order-2"><div className="w-fit transform hover:scale-125 transition duration-300 ease-in-out" style={{ maxWidth: '100%' }}><a href={github} target="_blank" rel="noopener noreferrer"><FaGithubAlt className = "scale-150 text-black "/> </a></div></span>) 
                }
              </div>
              <div className = "text-md">{text[0]}</div>
            </div>
            <div className = "italic" >More about the project:</div>
            <div className = "text-sm pl-8"> {text[1]}</div>
            <div className = "text-xs flex justify-end"> {text[2]}</div>
            <div className = "inline-flex flex-wrap justify-end">
            {tools.map((tool) => (
              <div className = "rounded-2xl bg-cyan-50 border-2 border-cyan-100 mx-1 p-1 px-2 text-sm text-cyan-700 mt-2"> {tool}</div>
            ))}
            </div>
         </Description>
     </div>
    </div>
  );
}
