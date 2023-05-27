import React, { useRef } from 'react';
import { Carousel } from 'react-bootstrap';
import Funfacts from './funfacts';
import Description from './description';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { FaGithubAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function Listing({ title, text, github, carouselItems }) {
  const carouselRef = useRef(null);

  // const handleIframeClick = () => {
  //   const iframe = carouselRef.current.querySelector('iframe');
  //   if (iframe) {
  //     const player = new window.YT.Player(iframe);
  //     player.pauseVideo();
  //   }
  // };
  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const CustomPrevIcon = () => (
    <div className="prev-icon" onClick={handlePrevClick}>
      {/* Custom previous icon */}
    </div>
  );

  const CustomNextIcon = () => (
    <div className="next-icon" onClick={handleNextClick}>
      {/* Custom next icon */}
    </div>
  );
  return (
    <div className="flex flex-col flex-wrap justify-end items-end px-[4%]">
      <div className=" w-[60%] rounded-2xl mx-[5%] ">
      <Carousel fade interval={null} ref={carouselRef} controls = {false} >
  {carouselItems.map((item, index) => (
    <Carousel.Item key={index} className="rounded h-[450px]">
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
            className="rounded-2xl border"
          />      )}
      <Carousel.Caption>


      <div className="flex flex-col items-center">
  <div className="w-fit transform hover:scale-110 transition duration-300 ease-in-out p-2 bg-black shadow-xl rounded-xl bg-opacity-50 mb-0" style={{ maxWidth: '100%' }}>
    <Link to={item.url} className="w-fit text-white no-underline" target="_blank" rel="noopener noreferrer">
      {item.desc}
    </Link>
  </div>
</div>


      </Carousel.Caption>
    </Carousel.Item>
  ))}
</Carousel>
     
      <Description className = "w-[100%]">
            <div>
              <div class="flex justify-between mb-2">
                <span class="order-1 text-xl font-semibold">{title}</span>
                {github && <span class="order-2"><FaGithubAlt className = "scale-125"/></span> }
              </div>
              <div className = "text-md">{text[0]}</div>
            </div>
            <div className = "italic" >A more detailed description of the app:</div>
            <div className = "text-sm pl-8"> {text[1]}</div>
            <div className = "italic">My contributions:</div>
            <div className = "text-sm pl-8" > {text[2]}</div>
         </Description>
     </div>
    </div>
  );
}
