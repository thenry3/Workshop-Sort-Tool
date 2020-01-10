import React from "react";
import styled from "styled-components";
import { Link, RouteComponentProps } from "react-router-dom";

const NavWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  font-family: "Montserrat", sans-serif;
  align-items: center;
`;

const Item = styled(Link)`
  font-size: 1.1vw;
  letter-spacing: 0.1em;
  color: black;
  text-decoration: none;
`;

const NavLinks = styled("div")`
  display: flex;
  justify-content: flex-end;
`;

const ItemName = styled("p")`
  margin: auto 1vw;
  padding: 4vh 2vw;
  ${Item}:hover & {
    color: #00b4f5;
    border-bottom: solid #00b4f5 1px;
    padding-bottom: 3vh;
  }
`;

const Title = styled("p")`
  margin-left: 2vw;
  text-align: center;
  font-size: 2.2vw;
`;

export default class Navbar extends React.Component<RouteComponentProps> {
  refreshTool() {
    // if (useLocation().pathname == "/") window.location.reload();
    if (this.props.location.pathname === "/") window.location.reload();
  }
  render() {
    return (
      <>
        <NavWrapper>
          <Title>UCLA VSU</Title>
          <NavLinks>
            <Item to="/" onClick={this.refreshTool.bind(this)}>
              <ItemName>Tool</ItemName>
            </Item>
            <Item to="/guidelines">
              <ItemName>Guidelines</ItemName>
            </Item>
            <Item to="/about">
              <ItemName>About</ItemName>
            </Item>
          </NavLinks>
        </NavWrapper>
      </>
    );
  }
}
