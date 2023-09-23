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
       
        <div className = "h-fit w-screen ">
        <div className = "flex justify-center items-center pt-32 ">
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
         <div className = "flex flex-wrap justify-around pb-20 pt-7 px-5 ">
         <Funfacts className = "border-[3px]">
            <div>
            <h4>Funfact 1: </h4>
            <h5> When did I start coding?</h5>
            </div>
            <p> I began my coding journey in high school, starting with HTML and CSS to create my first website. It was a fun experience since I got to play around with designing web pages, marking my first introduction to CS! It was only until college when I started to dive deep into the CS world, where I got to learn new technologies like React.js and Github freshman year!</p>
         </Funfacts>
         <Funfacts className = "border-[3px]">
         <div>
            <h4>Funfact 2: </h4>
            <h5> What is my favorite CS experience ?</h5>
            </div>
            <p> 
              My favorite CS experience is my time on 7000 Languages for Hack4Impact. It marked the first time I witnessed my code being deployed into production and directly affecting thousands of people. Receiving testing feedback from Algerian communities during client calls was especially impactful, making me feel like I was truly making a positive difference in the world.</p>
         </Funfacts>
         <Funfacts className = "border-[3px]">
         <div>
            <h4>Funfact 3: </h4>
            <h5> What's my plan for the future?</h5>
            </div>
            <p> Not sure! I've had diverse interests over the years, including entrepreneurship, programming, and math. Throughout college, I would love to continue to discover and pursue different interests, especially within computer science. For the time being, I am planning on going straight into the tech industry right after I graduate college! </p>
         </Funfacts>
         </div>

    </div>
    )
}