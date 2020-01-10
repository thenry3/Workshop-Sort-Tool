import React from "react";
import styled from "styled-components";

import GuideCard from "../components/GuideCard";

const Wrapper = styled("div")`
  display: flex;
  justify-content: center;
`;

const spread = ["Use Google Forms to make the spreadsheet with preferences!"];

export default class GuidePage extends React.Component {
  render() {
    return (
      <>
        <Wrapper>
          <GuideCard title="Spreadsheet Format" points={spread}></GuideCard>
        </Wrapper>
      </>
    );
  }
}
