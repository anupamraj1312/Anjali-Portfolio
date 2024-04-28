import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col className="footer-copywright">
          <h3>Designed and Developed by Anjali Singh</h3>
        </Col>
        <Col className="footer-copywright">
          <h3>Copyright © {year} AS</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
