import React from "react";
import Funfacts from "../components/funfacts";
import {UncontrolledCarousel} from "reactstrap";
const carouselItems = [
    {
      src: require("./pictures/pfp.png"),
      header: " ",
      caption: "Me!"
    },
    {
      src: require("./pictures/web.jpeg"),
      header: " ",
      caption: "Bouldering a V3"
    },
    {
        src: require("./pictures/seals.jpeg"),
        header: " ",
        caption: "Sea Lions in San Diego"
      },
  ];


export default function About() {
    return(
       
        <div className = "h-fit w-screen">
        <div className = "flex justify-center items-center pt-20 ">
            <div className = "flex flex-wrap justify-around items-center px-[4%]">
                <div className = "mr-[1%] w-[85%] md:w-[40%]">
                 <style>{`.carousel-inner > .carousel-item > img {border-radius: 25px;}`}</style>
                 <UncontrolledCarousel items={carouselItems} className="w-full"/>
                 </div>
                 <div className = "w-[100%] md:w-[50%] ml-[2%]">
                     <br/>
                     <h2> A bit about me!</h2>
                     <br/>
                     <p> My name is Xiaofan Li, and I am currently a Computer Science & Statistics Student at the University of Illinois Urbana-Champaign. I am currently a Software Developer at Hack4Impact, but have completed internships at Optum, WeSolv, and Purple Ant. Along the way, I have gained experience in full-stack web development, algorithms, data analysis, and more. My mission is to create change one program at a time!</p>
                     <p> In my freetime, I like to play tennis, cards, and boulder. I have played cards since I was in elementary school, so I know a plethora of games such as Bridge, Poker, and Tractor. I have also played competitive tennis all throughout high school, and continue to play a bit during my free time in college. I recently picked up bouldering as a hobby a few months ago, and I hope to get better! </p>
                     <p> If you have any questions or would like to see my resume, please reach out to me via LinkedIn or email. Thanks for checking out my website and I hope to hear from you soon :) </p>
                     <p>  - Xiaofan Li </p>
                     </div>
                     </div>
         </div>
         <h4 className = "pt-[3%] pl-[5%]"> Two of my favorite songs at the  moment:</h4>
         <div className = "grid grid-cols-2 gap-4">
            <div className = "pl-[10%]">
                    <iframe title = "hiiii" src="https://open.spotify.com/embed/track/1gH1h30wkQdd9zhY3j7a8T?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                     </div>
            <div className = "pr-[10%]">
                     <iframe title = "hii"  src="https://open.spotify.com/embed/track/29Qre8uUWCuPUz8Oem2MYI?utm_source=generator" width="100%" height="152" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                     </div>
         </div>
         <div className = "flex flex-wrap justify-around p-7 px-5 ">
         <Funfacts className = "border-[3px]">
            <div>
            <h4>Funfact 1: </h4>
            <h5> When did I start coding?</h5>
            </div>
            <p> I began my coding journey in high school, starting with HTML and CSS to create my first website for a startup I pursued. It was a fun experience, but coding was just a hobby back then. It wasn't until college that I started taking it more seriously. During freshman year, I only just started to understand the CS world, and began to learn Github protocols and new technologies like React.js and PyTorch. So to answer the question, I guess you could say both high school and college! </p>
         </Funfacts>
         <Funfacts className = "border-[3px]">
         <div>
            <h4>Funfact 2: </h4>
            <h5> What is my favorite project?</h5>
            </div>
            <p> One of my favorite projects has to be creating a mobile app to store and teach people about endangered languages for the non-profit 7000 languages while on Hack4Impact. It was incredible to see how my code directly impacted thousands of people, especially when we received testing feedback from Algerian communities during client calls. This was one of the moments where it dawned on me at how code can be used for the greater good.</p>
         </Funfacts>
         <Funfacts className = "border-[3px]">
         <div>
            <h4>Funfact 3: </h4>
            <h5> What's my plan for the future?</h5>
            </div>
            <p> Not sure! I've had diverse interests over the years, including entrepreneurship, programming, and math. However, one thing remains constant: my desire to use my skills to make a positive impact on my community. As I progressed through college, my love for coding grew stronger, and it became evident that coding is something I want to hold close to my heart for a long time. Looking ahead, my goal is to merge these two passions and create meaningful change in the future! </p>
         </Funfacts>
         </div>

    </div>
    )
}