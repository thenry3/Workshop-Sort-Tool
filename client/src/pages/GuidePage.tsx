import React from "react";
import styled from "styled-components";

import Spread from "../images/spreadsheet.png";
import Form from "../images/form.png";

import GuideCard from "../components/GuideCard";

const Wrapper = styled("div")`
  display: flex;
  justify-content: center;
`;

const spread = [
  "Use Google Forms to make the spreadsheet with preferences!",
  "First three columns must be Timestamp, Name, and Email, respectively."
];

const form = [];

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
          <GuideCard title="Google Form Format" points={form} overlay={Form} />
        </Wrapper>
      </>
    );
  }
}
