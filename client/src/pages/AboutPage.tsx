import React from "react";
import styled from "styled-components";
import Henry from "../images/henry.jpg";

const Page = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfilePic = styled("div")`
  width: 20vw;
  height: 20vw;
  background: url(${Henry});
  background-position-x: 70%;
  background-position-y: 50%;
  background-size: cover;
  margin-top: 5vh;
  border-radius: 50%;
`;

export default class AboutPage extends React.Component {
  render() {
    return (
      <>
        <Page>
          <ProfilePic></ProfilePic>
        </Page>
      </>
    );
  }
}
