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
        <div className = "flex justify-center items-center ">
            <div className = "flex flex-wrap justify-around items-center px-[4%] py-[6%] ">
                <div className = "mr-[1%] w-[85%] md:w-[40%]">
                 <style>{`.carousel-inner > .carousel-item > img {border-radius: 25px;}`}</style>
                 <UncontrolledCarousel items={carouselItems} className="w-full"/>
                 </div>
                 <div className = "w-[100%] md:w-[50%] ml-[2%]">
                     <br/>
                     <h2> A bit about me!</h2>
                     <br/>
                     <p> My name is Xiaofan Li, and I am a graduate in Computer Science and Statistics from the University of Illinois Urbana-Champaign. I have previously interned as a Software Engineer Intern at AWS Bedrock and Optum. During my time at school, I also developed projects with Hack4Impact and AI@UIUC.</p>
                     <p> In my freetime, I like to play tennis, cards, and boulder. I have played cards since I was in elementary school, so I know a plethora of games such as Bridge, Poker, and Tractor. I have also played competitive tennis all throughout high school, and continue to play a bit during my free time in college. I recently picked up running as a hobby a few months ago, and I plan on running the half marathon in a couple of months! </p>
                     <p> If you have any questions or would like to see my resume, please reach out to me via LinkedIn or email. Thanks for checking out my website and I hope to hear from you soon :) </p>
                     <p>  - Xiaofan Li </p>
                     </div>
                     </div>
         </div>

    </div>
    )
}