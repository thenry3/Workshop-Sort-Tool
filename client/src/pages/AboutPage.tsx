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
  width: 22vw;
  height: 22vw;
  background: url(${Henry});
  background-position-x: 70%;
  background-position-y: 50%;
  background-size: cover;
  margin-top: 4vh;
  border-radius: 50%;
`;

const Quote = styled("p")`
  width: 35%;
  margin-top: 3vh;
  text-align: center;
`;

const Name = styled("p")`
  font-size: 1.8vw;
  text-align: right;
  width: 40%;
  margin-top: 0px;
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
