import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import SortingVisualiser from "../../Assets/Projects/sortingvisualiser.png"
import Ecommerce from "../../Assets/Projects/ecommerce.png"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SortingVisualiser}
              isBlog={false}
              title="Sorting Visualiser"
              description="A sorting visualizer project showcases sorting algorithms in action through a user-friendly interface. Users can input or generate data and observe real-time sorting processes, aiding in understanding algorithms like bubble sort, insertion sort, and merge sort. It's an interactive tool for learning sorting techniques efficiently."
              ghLink="https://github.com/VaibhavAgarwal452/Sorting-Visualizer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecommerce}
              isBlog={false}
              title="Ecommerce"
              description="I have used technologies like Node.js, Express, React.js, and MongoDB, I engineered robust backend functionalities and crafted an intuitive frontend interface. The result? An engaging and secure platform facilitating seamless transactions and enhancing user experience."
              ghLink="https://github.com/VaibhavAgarwal452/Ecommerce-Website"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
