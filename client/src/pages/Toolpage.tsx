import React from "react";
import styled from "styled-components";

const PageWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Montserrat", sans-serif;
`;

const Header = styled("p")`
  font-size: 3vw;
  font-weight: bold;
`;

export default class Toolpage extends React.Component {
  render() {
    return (
      <>
        <PageWrapper>
          <Header>Welcome back, HSC/SEA Admit Workshop Coords!</Header>
        </PageWrapper>
      </>
    );
  }
}
