import React from "react";
import styled from "styled-components";
import Henry from "../images/henry.jpg";

const Page = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfilePic = styled("div")`
  width: 10vw;
  height: 10vw;
  background: url(${Henry}) cover no-repeat;
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