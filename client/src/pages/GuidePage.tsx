import React from "react";
import styled from "styled-components";

import Spread from "../images/spreadsheet.png";
import Form from "../images/form.png";

import GuideCard from "../components/GuideCard";

const Wrapper = styled("div")`
  display: flex;
  justify-content: center;
  width: 100%;
  @media only screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

const spread = [
  "Use Google Forms to make the spreadsheet with preferences!",
  "First three columns must be Timestamp, Name, and Email, respectively",
  "Make sure each column is in the format --> Series <#>: <Series Name> [<1st, 2nd, etc.> choice]",
  "Click on this card for an example of a proper google sheets layout"
];

const form = [
  "THIS IS MORE IMPORTANT TO FOLLOW BECAUSE GOOGLE SHEET FORMATS ARE AUTO-GENERATED FROM GOOGLE FORMS",
  "In order of questions: Name, Email, Workshop preferences for each series",
  "Name and Email fields must be short answer text",
  "Each series should be a multiple choice grid",
  "Rows are 1st choice, 2nd choice, 3rd choice, etc. <-- THESE MUST BE IN ORDER TOP TO BOTTOM",
  "Columns are corresponding workshop names for each series",
  "Click on this card for an example of a proper google form layout"
];

export default class GuidePage extends React.Component {
  render() {
    return (
      <>
        <Wrapper>
          <GuideCard title="Google Form Format" points={form} overlay={Form} />

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
