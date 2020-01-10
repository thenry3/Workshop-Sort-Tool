import React from "react";
import styled from "styled-components";
import Henry from "../images/henry.jpg";

const Page = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Montserrat", sans-serif;
`;

const ProfilePic = styled("div")`
  width: 300px;
  height: 300px;
  background: url(${Henry});
  background-position-x: 70%;
  background-position-y: 50%;
  background-size: cover;
  margin-top: 4.5vh;
  border-radius: 50%;
  @media only screen and (max-width: 1000px) {
    width: 250px;
    height: 250px;
  }
  @media only screen and (max-width: 700px) {
    width: 225px;
    height: 225px;
  }
`;

const Quote = styled("p")`
  width: 35%;
  margin-top: 3vh;
  text-align: center;
  font-size: 16px;
  @media only screen and (max-width: 700px) {
    font-size: 11px;
    width: 50%;
  }
  @media only screen and (max-width: 600px) {
    font-size: 11px;
    width: 60%;
  }
`;

const Name = styled("p")`
  font-size: 24px;
  text-align: right;
  width: 40%;
  margin-top: 0px;
  @media only screen and (max-width: 700px) {
    font-size: 20px;
    width: 60%;
  }
  @media only screen and (max-width: 600px) {
    font-size: 16px;
    width: 75%;
  }
`;

export default class AboutPage extends React.Component {
  render() {
    return (
      <>
        <Page>
          <ProfilePic></ProfilePic>
          <Quote>
            "This website is the story of how two High School Conference
            workshop coordinators made their fellow Computer Science friend do
            beep boop beep"
          </Quote>
          <Name>- Henry Trinh '22</Name>
        </Page>
      </>
    );
  }
}
