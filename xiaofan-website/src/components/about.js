import React, { useSyncExternalStore } from "react";
import {Row, Col, Container, UncontrolledCarousel} from "reactstrap";
const carouselItems = [
    {
      src: require("../pictures/pfp.png"),
      header: " ",
      caption: "Me"
    },
    {
      src: require("../pictures/hackathon.jpg"),
      header: " ",
      caption: "Team Photo after Hackathon"
    },
    {
      src: require("../pictures/web.jpeg"),
      header: " ",
      caption: "Bouldering"
    },
    {
        src: require("../pictures/h4i.jpg"),
        header: " ",
        caption: "Hack4Impact Group Photo"
      },
    {
        src: require("../pictures/doge.jpg"),
        header: " ",
        caption: "My dog Xiaopan"
      },
  ];

export default function About() {
    return(
        <>
        <Container>
            <Row >
                <Col>
                    <UncontrolledCarousel items={carouselItems} />
                </Col>
                <Col >
                    <h3> Hi everybody!</h3>
                    <br></br>
                    <p> My name is Xiaofan Li, and I am currently a Computer Science & Statistics Student at the University of Illinois Urbana-Champaign. I am currently a Software Developer in Hack4Impact, but I have completed an internship during the Summer at Optum, WeSolv, and Purple Ant. During these internships, I have learned many invaluable programming and analytics skills. My mission in programming is to make the world better!</p>
                    <p> In my freetime, I like to play tennis, cards, and boulder. I am currently a Software Developer in Hack4Impact, but I have completed an internship during the Summer at Optum, WeSolv, and Purple Ant. During these internships, I have learned many invaluable programming and analytics skills. My mission in programming is to make the world better!</p>
                    <p> please dm me if you have any questions!</p>
                </Col>
            </Row>

        </Container>
    </>
    )
}