import React from "react";
import styled from "styled-components";
import WorkshopForm from "../components/WorkshopForm";

const PageWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Montserrat", sans-serif;
`;

const Header = styled("p")`
  font-size: 3vw;
  font-weight: bold;
  text-align: center;
  @media only screen and (max-width: 700px) {
    font-size: 20px;
    width: 90%;
  }
`;

export default class Toolpage extends React.Component {
  render() {
    return (
      <>
        <PageWrapper>
          <Header>wow ty for using my shit</Header>
          <WorkshopForm></WorkshopForm>
        </PageWrapper>
      </>
    );
  }
}
