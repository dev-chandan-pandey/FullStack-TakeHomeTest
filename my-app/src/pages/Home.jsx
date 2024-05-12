import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import hearoImg from "../assets/images/hero-img01.jpg";
import hearoImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import Subtitle from "../components/shared/Subtitle";
import worldImg from "../assets/images/world.png";
import SearchBar from "../components/shared/SearchBar";
function Home() {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-align-items-center">
                <Subtitle Subtitle={"know before you go"} />
                <img src={worldImg} alt="" />
              </div>
              <h1>
                {" "}
                travling opens the door to creating{" "}
                <span className="highlight"> memories</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                lectus arcu bibendum at varius vel. Mattis vulputate enim nulla
                aliquet. Morbi leo urna molestie at elementum eu facilisis sed
                odio. Adipiscing elit duis tristique sollicitudin nibh.
                Consectetur libero id faucibus nisl tincidunt eget. Lorem ipsum
                dolor sit amet consectetur adipiscing elit pellentesque.
                Volutpat blandit aliquam etiam erat velit. Gravida rutrum
                quisque non tellus. Purus gravida quis blandit turpis cursus in
                hac habitasse platea. Viverra aliquet eget sit amet tellus cras
                adipiscing enim. Mi sit amet mauris commodo quis. Tincidunt
                tortor aliquam nulla facilisi. Scelerisque fermentum dui
                faucibus in ornare. Morbi blandit cursus risus at. Interdum
                posuere lorem ipsum dolor. In massa tempor nec feugiat nisl
                pretium fusce.
              </p>
            </div>
          </Col>
          <Col lg="2">
             <div className="hero__img-box">
             <img src={hearoImg} alt=""/>
             </div>
          </Col>
          <Col lg="2">
             <div className="hero__img-box mt-4">
             <video src={heroVideo} alt="" controls/>
             </div>
          </Col>
          <Col lg="2">
             <div className="hero__img-box mt-5">
             <img src={hearoImg02} alt=""/>
             </div>
          </Col>
          <SearchBar/>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
