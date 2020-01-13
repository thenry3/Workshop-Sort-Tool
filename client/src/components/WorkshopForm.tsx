import React from "react";
import styled from "styled-components";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { EOL } from "os";

import Results from "./Results";

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  border: black solid 2px;
  padding: 2vw;
  font-family: "Montserrat", sans-serif;
  width: 40%;
  @media only screen and (max-width: 700px) {
    width: 65%;
  }
  @media only screen and (max-width: 550px) {
    width: 75%;
  }
`;

const Guide = styled("p")`
  text-align: center;
  align-self: center;
  font-size: 20px;
  margin-top: 0px;
  @media only screen and (max-width: 1000px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 700px) {
    font-size: 12px;
  }
`;

const UploadDiv = styled("div")`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media only screen and (max-width: 350px) {
    flex-direction: column;
  }
`;
const UploadInput = styled("input")`
  text-align: center;
`;

const UploadWarning = styled("p")`
  font-size: 1vw;
  margin-right: 2vw;
  @media only screen and (max-width: 800px) {
    font-size: 10px;
  }
`;

const Separator = styled("hr")`
  color: black;
  width: 100%;
`;

const SeriesInputDiv = styled("div")`
  display: flex;
  flex-direction: column;
`;

const SeriesTitle = styled("p")`
  @media only screen and (max-width: 800px) {
    font-size: 12px;
  }
`;

const Series = styled("div")`
  display: flex;
  margin-bottom: 1vh;
  justify-content: space-between;
  width: 25%;
  @media only screen and (max-width: 1100px) {
    width: 30%;
  }
  @media only screen and (max-width: 900px) {
    width: 35%;
  }
  @media only screen and (max-width: 500px) {
    width: 40%;
  }
  @media only screen and (max-width: 400px) {
    width: 50%;
  }
`;

const SeriesLabel = styled("p")`
  font-size: 1vw;
  margin: auto 0px;
  @media only screen and (max-width: 800px) {
    font-size: 10px;
  }
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
  @media only screen and (max-width: 800px) {
    height: 20px;
    width: 20px;
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
  @media only screen and (max-width: 800px) {
    height: 20px;
    width: 20px;
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
  @media only screen and (max-width: 800px) {
    font-size: 13px;
  }
`;

const ErrorButton = styled("div")`
  border: black 1.5px solid;
  text-align: center;
  padding: 1vh 1vw;
  width: 20vw;
  align-self: center;
  cursor: pointer;
  transition: 0.1s;
  margin-top: 20px;
  &:hover {
    border: #00b4f5 1.5px solid;
    color: #00b4f5;
  }
  @media only screen and (max-width: 800px) {
    font-size: 13px;
  }
`;

export default class WorkshopForm extends React.Component<
  {},
  {
    numSeries: number;
    PrefFile: any;
    matches: any;
    loading: boolean;
    error: any;
  }
> {
  constructor(props) {
    super(props);
    this.renderseries = this.renderseries.bind(this);
    this.updateSeries = this.updateSeries.bind(this);
    this.addSeries = this.addSeries.bind(this);
    this.deleteSeries = this.deleteSeries.bind(this);
    this.storeFile = this.storeFile.bind(this);
    this.parseAndSend = this.parseAndSend.bind(this);
    this.set = this.set.bind(this);
  }

  series = [1];

  componentWillMount() {
    this.setState({
      numSeries: 1,
      PrefFile: null,
      loading: false
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

  reset() {
    this.setState({
      error: null,
      matches: null
    });
    this.series = this.series.map(() => 1);
  }

  set(value, state) {
    switch (state) {
      case "matches":
        this.setState({
          matches: value
        });
        break;
      case "loading":
        this.setState({
          loading: value
        });
        break;
      case "error":
        this.setState({
          error: value
        });
      default:
        break;
    }
  }

  parseAndSend() {
    let reader = new FileReader();
    let arr = this.series;
    let set = this.set;
    this.setState({
      loading: true
    });
    reader.onload = async function() {
      await fetch("https://thenry3.pythonanywhere.com/api/sort", {
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
      })
        .then(response =>
          response.json().then(data => ({
            data: data,
            status: response.status
          }))
        )
        .then(res => {
          set(false, "loading");
          if (res.status === 400) set(res.data["error"], "error");
          else {
            set(res.data, "matches");
          }
        });
    };
    reader.readAsBinaryString(this.state.PrefFile);
  }

  render() {
    if (this.state.matches)
      return <Results data={this.state.matches}></Results>;

    if (this.state.loading)
      return <p>LOADING A FUCKLOAD OF PEANUT FUCKING BUTTER</p>;

    if (this.state.error)
      return (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p
            style={{
              textAlign: "center",
              fontSize: "2vw",
              marginBottom: "0px"
            }}
          >
            ERROR
          </p>
          <p style={{ textAlign: "center", width: "70%" }}>
            {this.state.error}
          </p>
          <ErrorButton onClick={this.reset.bind(this)}>
            I Understand
          </ErrorButton>
        </div>
      );

    return (
      <>
        <Wrapper>
          <Guide>
            if y'all haven't read the guidelines
            <br />
            <strong>FUCKING READ IT</strong>
          </Guide>
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
