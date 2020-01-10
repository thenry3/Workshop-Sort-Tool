import React from "react";
import styled from "styled-components";

const DarkBack = styled("div")`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0vh;
  width: 100%;
`;

const Pic = styled("img")`
  max-width: 65%;
  max-height: 65%;
`;

interface OverlayProps {
  src: any;
  id: string;
}

export default class Overlay extends React.Component<OverlayProps> {
  close(e) {
    if (e.target != this) return;
    document.getElementById(this.props.id).style.height = "0vh";
  }
  render() {
    return (
      <>
        <DarkBack id={this.props.id} onClick={this.close.bind(this)}>
          <Pic src={this.props.src}></Pic>
        </DarkBack>
      </>
    );
  }
}
