import React from "react";
import styled from "styled-components";

const Card = styled("ul")`
  display: flex;
  flex-direction: column;
  width: fit-content;
  border: 2px solid black;
  font-family: "Montserrat", sans-serif;
`;

const CardTitle = styled("p")`
  text-align: center;
  font-size: 1.7vw;
`;

const Point = styled("li")``;

interface CardProps {
  title: string;
  points: string[];
}

export default class GuideCard extends React.Component<CardProps> {
  render() {
    return (
      <>
        <Card>
          <CardTitle>{this.props.title}</CardTitle>
          {this.props.points.map(point => (
            <Point>{point}</Point>
          ))}
        </Card>
      </>
    );
  }
}
