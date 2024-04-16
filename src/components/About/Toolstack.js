import React from "react";
import { Col, Row } from "react-bootstrap";
import  daVinciResolve  from "../../Assets/daVinciResolve.png";
import excel from "../../Assets/excel.png"
import audacity from "../../Assets/audacity.png"
import canva from "../../Assets/canva.webp"
import finalCutPro from "../../Assets/finalCutPro.png"

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <img src = {canva} width={"100px"} height={"40px"}></img>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src = {audacity} width={"80px"} height={"80px"} ></img>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title={"Excel"}>
      <img src = {excel} width={"80px"} height={"80px"} ></img>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src = {daVinciResolve} width={"80px"} height={"80px"} ></img>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src = {finalCutPro} width={"80px"} height={"80px"} ></img>
      </Col>
    </Row>
  );
}

export default Toolstack;
