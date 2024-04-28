import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import hunger from "../../Assets/Projects/hunger2.png";
import rasna from "../../Assets/Projects/rasna.png";
import iitf from "../../Assets/Projects/iitf.png";
import suicide from "../../Assets/Projects/suicide.png";
import bookFair from "../../Assets/Projects/bookFair.png";
import bodyShop from "../../Assets/Projects/bodyShop.png";
import foodCrisis from "../../Assets/Projects/foodCrisis.png";
import asianatimes from "../../Assets/Projects/asianaTimes.png";

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
              imgPath={asianatimes}
              buttonText="Articles"
              title="Articles on Asiana Times"
              description="Asiana Times, media wing of Asiana Tech Private Limited, founded in 2020 is media company with a unique vision of truth, committed to bringing you the most common and uncommon worldly happenings"
              demoLink="https://asianatimes.com/author/anjali-singh-2/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iitf}
              buttonText="Full Video"
              title="International Trade Fair, India 2023"
              description="The India International Trade Fair, ever since its inception in 1980, has evolved as a major event for the business community. It is a premier event organized by the India Trade Promotion Organization, the nodal trade promotion agency of the Government of India."
              demoLink="https://bennettu-my.sharepoint.com/personal/t22mceu0035_bennett_edu_in/_layouts/15/stream.aspx?id=%2Fpersonal%2Ft22mceu0035%5Fbennett%5Fedu%5Fin%2FDocuments%2FAnjaliSingh%5FPackage%2Emov&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookFair}
              buttonText="Full Video"
              title="World Book Fair, New Delhi 2023"
              description="The 31st edition of New Delhi World Book Fair (NDWBF), held for the past 50 years, is a major calendar event in the publishing world. NDWBF 2023 is scheduled from 25 February to 5 March 2023 in newly constructed Halls 2-5 GF at the centrally located Pragati Maidan, New Delhi. "
              demoLink="https://bennettu-my.sharepoint.com/:v:/g/personal/t22mceu0035_bennett_edu_in/EddxuAMwFqZGiJVj01MxfB8Bz_JwYw6xkoA0tusLoL_05g?e=z5tiwT"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rasna}
              buttonText="Demo"
              title="Brand Strategy - Rasna Fruit Plus"
              description="Rasna Fruit Plus: Instant Drink Mix Powder is pre-sweetened, enriched with fruit powder and offers 21 Vitamins (Calcium & Minerals) with No Artificial Preservatives and No Added Sugar."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hunger}
              buttonText="Full Video"
              title="Documentary on Zero Hunger "
              description="Zero Hunger is one of the most important SDGs for India, where a significant proportion of the population is still undernourished. Based on 2022 Global Hunger Index, India ranks 107th out of 121 countries. This means that around 224.3 million people in India are undernourished."
              demoLink="https://bennettu-my.sharepoint.com/personal/t22mceu0035_bennett_edu_in/_layouts/15/stream.aspx?id=%2Fpersonal%2Ft22mceu0035%5Fbennett%5Fedu%5Fin%2FDocuments%2FCV%5Fassignment%2FZero%20hungerr%2Emp4&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bodyShop}
              buttonText="Demo"
              title="The Body Shop analysis"
              description="The Body Shop is a well-known company that has revolutionized the beauty industry by fusing moral principles with high-quality skincare and cosmetics products."
              demoLink="https://bennettu-my.sharepoint.com/:b:/g/personal/t22mceu0035_bennett_edu_in/ERyvbRd3FNpDr1K6ODEn6ooB2vk2b6EPHkMkYnLCBJE3fA?e=GVcnvi"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
