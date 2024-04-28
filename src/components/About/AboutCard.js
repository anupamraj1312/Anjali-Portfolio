import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anjali Singh </span>
            from <span className="purple"> Delhi, India.</span> I am a Journalism and Mass Communication student at Bennett University with a passion for advertising. 
            Beyond the classroom, I immerse myself in diverse experiences, constantly seeking to broaden my horizons. 
            Through leadership roles in extracurricular activities, I've honed my organizational skills and developed a collaborative mindset. 
            Driven by curiosity and a hunger for excellence, I'm committed to making a meaningful impact in the dynamic world of communication.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to find things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Anjali</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
