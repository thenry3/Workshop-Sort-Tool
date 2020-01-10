import React from "react";
import styled from "styled-components";

import Spread from "../images/spreadsheet.png";

import GuideCard from "../components/GuideCard";

const Wrapper = styled("div")`
  display: flex;
  justify-content: center;
`;

const spread = [
  "Use Google Forms to make the spreadsheet with preferences!",
  "First three columns must be Timestamp, Name, and Email, respectively."
];

export default class GuidePage extends React.Component {
  render() {
    return (
      <>
        <Wrapper>
          <GuideCard
            title="Spreadsheet Format"
            points={spread}
            overlay={Spread}
          ></GuideCard>
        </Wrapper>
      </>
    );
  }
}
