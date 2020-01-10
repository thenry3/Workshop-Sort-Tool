import React from "react";
import styled from "styled-components";

import Overlay from "./Overlay";

const Card = styled("ul")`
  display: flex;
  flex-direction: column;
  width: 30%;
  border: 3px solid black;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
  transition: 0.2s;
  padding-left: 3vw;
  padding-right: 3vw;
  margin: 6vh 3vw;
  position: relative;
  &:hover {
    border: 3px solid #00b4f5;
    background: rgba(0, 180, 245, 0.1);
    transform: translateY(-1.5vh);
  }
  @media only screen and (max-width: 700px) {
    width: 80%;
  }
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;

const CardTitle = styled("p")`
  text-align: center;
  font-size: 1.7vw;
  align-self: center;
  @media only screen and (max-width: 1000px) {
    font-size: 23px;
  }
`;

const Point = styled("li")`
  margin-bottom: 1.5vh;
  font-size: 1vw;
  @media only screen and (max-width: 1000px) {
    font-size: 11px;
  }
`;

interface CardProps {
  title: string;
  points: string[];
  overlay: any;
}

export default class GuideCard extends React.Component<CardProps> {
  openClose() {
    document.getElementById(this.props.title).style.height =
      document.getElementById(this.props.title).style.height == "0vh"
        ? "100vh"
        : "0vh";
  }

  render() {
    return (
      <>
        <Card onClick={this.openClose.bind(this)}>
          <CardTitle>{this.props.title}</CardTitle>
          {this.props.points.map(point => (
            <Point>{point}</Point>
          ))}
        </Card>
        <Overlay src={this.props.overlay} id={this.props.title}></Overlay>
      </>
    );
  }
}
