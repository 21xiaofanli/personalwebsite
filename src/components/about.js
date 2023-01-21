import React from "react";
import {Row, Col, Container, UncontrolledCarousel} from "reactstrap";
const carouselItems = [
    {
      src: require("../pictures/pfp.png"),
      header: " ",
      caption: "Me!"
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
                    <p> My name is Xiaofan Li, and I am currently a Computer Science & Statistics Student at the University of Illinois Urbana-Champaign. I am currently a Software Developer in Hack4Impact, but I have completed internships Optum, WeSolv, and Purple Ant. Throughout these experiences,  I have learned many invaluable programming and analytics skills. My mission in programming is to create change one program at a time!</p>
                    <p> In my freetime, I like to play tennis, cards, and boulder. I have played cards since I was in elementary school, so I know a plethora of games such as bridge, poker, and ERS! I have also played competitive tennis all throughout high school, and continue to play a bit during my free time in college. I also have just picked up bouldering a few months ago, but I hope to get better! </p>
                    <p> If you have any questions for me, please reach out at xl121@illinois or click any the email or LinkedIn button the top right corner! Thanks for exploring my website and I hope to hear from you soon! </p>
                    <p> - Xiaofan Li</p>
                </Col>
            </Row>

        </Container>
    </>
    )
}