import React from "react";
import styled from "styled-components";

import Overlay from "./Overlay";

const Card = styled("ul")`
  display: flex;
  flex-direction: column;
  width: fit-content;
  border: 2px solid black;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
`;

const CardTitle = styled("p")`
  text-align: center;
  font-size: 1.7vw;
  align-self: center;
`;

const Point = styled("li")``;

interface CardProps {
  title: string;
  points: string[];
  overlay: any;
}

export default class GuideCard extends React.Component<CardProps> {
  openClose() {
    document.getElementById(this.props.title).style.opacity = parseInt(
      document.getElementById(this.props.title).style.opacity
    )
      ? "0"
      : "1";
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
