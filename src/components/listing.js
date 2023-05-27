import React, { useRef } from 'react';
import { Carousel } from 'react-bootstrap';
import Funfacts from './funfacts';
import Description from './description';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

export default function Listing({ title, text, links, src, video, carouselItems }) {
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
      <div className=" w-[700px] rounded-2xl mx-[7%] ">
      <Carousel fade interval={null} ref={carouselRef} controls = {false} >
  {carouselItems.map((item, index) => (
    <Carousel.Item key={index} className="rounded">
      {item.image ? (
        <img src={item.image} alt={item.title} style={{ height: "400px" }} />
      ) : (
        <div className="relative">
          <span aria-hidden="true" className="carousel-control-next-icon" />
          <iframe
            title={item.title}
            src={item.url}
            width="700"
            height="450"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
            className="rounded-2xl"
          />
        </div>
      )}
      <Carousel.Caption>
        <div className="flex flex-col items-center">
          <p className="h-fit p-2 bg-black shadow-xl rounded-xl bg-opacity-50 w-fit mb-0">
            {item.desc}
          </p>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
  ))}
</Carousel>
     
      <Description className = "w-[30%]">
            <div>
              <div class="flex justify-between">
                <span class="order-1">{title}</span>
                <span class="order-2">Github</span>
              </div>
            </div>
            <p> {text} </p>
         </Description>
     </div>
    </div>
  );
}
