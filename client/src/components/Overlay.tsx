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
  max-width: 50%;
  /* position: fixed; */
  max-height: 50%;
`;

interface OverlayProps {
  src: any;
  id: string;
}

export default class Overlay extends React.Component<OverlayProps> {
  render() {
    return (
      <>
        <DarkBack id={this.props.id}>
          <Pic src={this.props.src}></Pic>
        </DarkBack>
      </>
    );
  }
}
