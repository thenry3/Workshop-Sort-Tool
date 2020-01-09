import React from "react";
import styled from "styled-components";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { EOL } from "os";

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  border: black solid 2px;
  padding: 2vw;
  font-family: "Montserrat", sans-serif;
  width: 40%;
`;

const UploadDiv = styled("div")`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const UploadInput = styled("input")``;

const UploadWarning = styled("p")`
  font-size: 1vw;
  margin-right: 2vw;
`;

const Separator = styled("hr")`
  color: black;
  width: 100%;
`;

const SeriesInputDiv = styled("div")`
  display: flex;
  flex-direction: column;
`;

const SeriesTitle = styled("p")``;

const Series = styled("div")`
  display: flex;
  margin-bottom: 1vh;
  justify-content: space-between;
  width: 25%;
`;

const SeriesLabel = styled("p")`
  font-size: 1vw;
  margin: auto 0px;
`;

const SeriesNumInput = styled("input")`
  line-height: 1;
`;

const ButtonDiv = styled("div")`
  display: flex;
  width: 100%;
  margin-bottom: 2vh;
`;

const Plus = styled(FaPlusCircle)`
  height: 1.6em;
  width: 1.6em;
  cursor: pointer;
  &:hover {
    color: #00b4f5;
  }
`;

const Minus = styled(FaMinusCircle)`
  height: 1.6em;
  width: 1.6em;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    color: #00b4f5;
  }
`;

const SubmitButton = styled("div")`
  margin-top: 3vh;
  border: black 1.5px solid;
  text-align: center;
  padding: 1vh 1vw;
  width: 30%;
  align-self: center;
  cursor: pointer;
  transition: 0.1s;
  &:hover {
    border: #00b4f5 1.5px solid;
    color: #00b4f5;
  }
`;

export default class WorkshopForm extends React.Component<
  {},
  { numSeries: number; PrefFile: any; matches: any }
> {
  constructor(props) {
    super(props);
    this.renderseries = this.renderseries.bind(this);
    this.updateSeries = this.updateSeries.bind(this);
    this.addSeries = this.addSeries.bind(this);
    this.deleteSeries = this.deleteSeries.bind(this);
    this.storeFile = this.storeFile.bind(this);
    this.parseAndSend = this.parseAndSend.bind(this);
    this.setMatches = this.setMatches.bind(this);
  }

  series = [1];

  componentWillMount() {
    this.setState({
      numSeries: 1,
      PrefFile: null
    });
  }

  updateSeries(e) {
    this.series[e.target.dataset.id] = parseInt(e.target.value);
    console.log(this.series);
  }

  addSeries() {
    this.setState({
      numSeries: this.state.numSeries + 1
    });
    this.series.push(1);
  }

  deleteSeries() {
    if (this.state.numSeries === 1) return;
    this.setState({
      numSeries: this.state.numSeries - 1
    });
    this.series.pop();
  }

  renderseries() {
    let series = [];
    for (let i = 0; i < this.state.numSeries; i++) {
      series.push(
        <Series>
          <SeriesLabel>Series {i + 1}</SeriesLabel>
          <SeriesNumInput
            type="number"
            min="1"
            max="100000"
            data-id={i}
            onChange={this.updateSeries}
          ></SeriesNumInput>
        </Series>
      );
    }
    return series;
  }

  storeFile(e) {
    this.setState({
      PrefFile: e.target.files[0]
    });
  }

  setMatches(matches) {
    this.setState({
      matches: matches
    });
  }

  parseAndSend() {
    let reader = new FileReader();
    let arr = this.series;
    let set = this.setMatches;

    reader.onload = function() {
      console.log(
        reader.result
          .toString()
          .replace(/['"]+/g, "")
          .split("\r" + EOL)
          .map(row => row.split(","))
      );
      fetch("https://thenry3.pythonanywhere.com/api/sort", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          rows: reader.result
            .toString()
            .replace(/['"]+/g, "")
            .split("\r" + EOL)
            .map(row => row.split(",")),
          workshopsToAttend: arr
        })
      }).then(response => {
        console.log(response);
        set(response);
      });
    };
    reader.readAsBinaryString(this.state.PrefFile);
  }

  render() {
    if (this.state.matches) return <p>YAY</p>;
    return (
      <>
        <Wrapper>
          <UploadDiv>
            <UploadWarning>
              File uploaded <strong>MUST</strong> be in CSV format
            </UploadWarning>
            <UploadInput
              type="file"
              accept=".csv"
              required
              onChange={this.storeFile}
            ></UploadInput>
          </UploadDiv>
          <Separator></Separator>
          <SeriesInputDiv>
            <SeriesTitle>
              Input the number of workshops that students will be attending for
              each series
            </SeriesTitle>
            <ButtonDiv>
              <Minus onClick={this.deleteSeries} />
              <Plus onClick={this.addSeries} />
            </ButtonDiv>
            {this.renderseries()}
          </SeriesInputDiv>
          <SubmitButton onClick={this.parseAndSend}>Submit</SubmitButton>
        </Wrapper>
      </>
    );
  }
}
