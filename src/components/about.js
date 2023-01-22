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
      caption: "Team Photo after Pygmalion Hackathon"
    },
    {
      src: require("../pictures/web.jpeg"),
      header: " ",
      caption: "Bouldering a V3"
    },
    {
        src: require("../pictures/h4i.jpg"),
        header: " ",
        caption: "Hack4Impact Retreat Group Photo"
      },
    {
        src: require("../pictures/seals.jpeg"),
        header: " ",
        caption: "Sea Lions in San Diego"
      },
    {
        src: require("../pictures/doge.jpg"),
        header: " ",
        caption: "My Husky Xiaopan"
      },
  ];

  const styles = {
    grid: {
        paddingLeft: 20,
        paddingRight: 0
    },
    right: {
        marginLeft: 0,
        marginRight: 25
    },
    left: {
        paddingLeft: 20,
        paddingRight: 0
    }
};

export default function About() {
    return(
        <>
        <Container>
            <Row >
                <Col style ={styles.left}>
                    <br></br>
                    <UncontrolledCarousel items={carouselItems} />
                </Col>
                <Col style ={styles.right} >
                    <br></br>
                    <br></br>
                    <h3> Hi everybody!</h3>
                    <br></br>
                    <p> My name is Xiaofan Li, and I am currently a Computer Science & Statistics Student at the University of Illinois Urbana-Champaign. I am currently a Software Developer in Hack4Impact, but have completed internships at Optum, WeSolv, and Purple Ant. Along the way, I have gained experience in full-stack web development, data analysis, and more. My mission is to create change one program at a time!</p>
                    <p> In my freetime, I like to play tennis, cards, and boulder. I have played cards since I was in elementary school, so I know a plethora of games such as Bridge, Poker, and Tractor. I have also played competitive tennis all throughout high school, and continue to play a bit during my free time in college. I recently picked up bouldering as a hobby a few months ago, and I hope to get better! </p>
                    <p> If you have any questions or would like to see my resume, please reach out to me via LinkedIn or email. Thanks for checking out my website and I hope to hear from you soon! </p>
                    <p>  - Xiaofan Li</p>
                </Col>
            </Row>

        </Container>
    </>
    )
}