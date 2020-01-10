import React from "react";
import styled from "styled-components";

const DarkBack = styled("div")`
  background: rgba(0, 0, 0, 0.65);
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Pic = styled("img")`
  max-width: 75%;
  max-height: 75%;
  @media only screen and (max-width: 600px) {
    max-width: 85%;
    max-height: 85%;
  }
`;

interface OverlayProps {
  src: any;
  id: string;
}

export default class Overlay extends React.Component<OverlayProps> {
  close(e) {
    if (e.target == e.currentTarget)
      document.getElementById(this.props.id).style.height = "0vh";
  }
  render() {
    return (
      <>
        <DarkBack
          id={this.props.id}
          onClick={this.close.bind(this)}
          style={{ height: "0vh" }}
        >
          <Pic src={this.props.src}></Pic>
        </DarkBack>
      </>
    );
  }
}
