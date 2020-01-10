import React from "react";
import styled from "styled-components";
import XLSX from "xlsx";
import { saveAs } from "file-saver";

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Downloads = styled("div")`
  display: flex;
  justify-content: space-between;
`;

const DownloadButton = styled("div")`
  margin-top: 3vh;
  border: black 1.5px solid;
  text-align: center;
  padding: 1vh 1vw;
  align-self: center;
  cursor: pointer;
  transition: 0.1s;
  margin: auto 2vw;
  &:hover {
    border: #00b4f5 1.5px solid;
    color: #00b4f5;
  }
`;

interface ResultsProps {
  data: any;
}

export default class Results extends React.Component<
  ResultsProps,
  { loading: any; blob: any }
> {
  constructor(props) {
    super(props);
    this.makeXLSX = this.makeXLSX.bind(globalThis);
  }

  makeXLSX() {
    let arr = this.props.data["columns"];
    let matches = [];
    for (let obj in this.props.data["matches"]) {
      matches.push([obj["Name"], obj["Email"]] + obj["Matches"]);
    }
    arr += matches;

    // let ws = XLSX.utils.aoa_to_sheet(arr);
    // let wb = XLSX.utils.book_new();
    // wb.SheetNames.push("Workshop Assignments");
    // wb.Sheets["Workshop Assignments"] = ws;
    // let wbout = XLSX.write(wb, { bookType: "xlsx", type: "binary" });
    // var buf = new ArrayBuffer(wbout.length); //convert s to arrayBuffer
    // var view = new Uint8Array(buf); //create uint8array as viewer
    // for (var i = 0; i < wbout.length; i++) view[i] = wbout.charCodeAt(i) & 0xff; //convert to octet
    // this.setState({
    //   loading: false,
    //   blob: new Blob([buf], { type: "application/octet-stream" })
    // });
  }

  componentWillMount() {
    this.setState({
      loading: true
    });
    this.makeXLSX();
    console.log(this.props.data);
  }

  downloadXLSX() {
    saveAs(this.state.blob, "wsAssignments.xlsx");
  }

  render() {
    if (this.state.loading) return <p>LOADING MORE DICK!!!</p>;
    return (
      <>
        <Wrapper>
          <Downloads>
            <DownloadButton>Download CSV</DownloadButton>
            <DownloadButton onClick={this.makeXLSX}>
              Download Excel
            </DownloadButton>
          </Downloads>
        </Wrapper>
      </>
    );
  }
}
