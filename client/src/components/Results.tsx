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

const Preview = styled("div")`
  overflow: scroll;
  margin-top: 3vh;
`;

const Table = styled("table")`
  border: 1px solid black;
  border-collapse: collapse;
`;

const Trow = styled("tr")`
  border: 1px solid black;
`;

interface ResultsProps {
  data: any;
}

export default class Results extends React.Component<
  ResultsProps,
  { blob: any; rows: any }
> {
  constructor(props) {
    super(props);
    this.downloadXLSX = this.downloadXLSX.bind(this);
    this.downloadCSV = this.downloadCSV.bind(this);
  }

  componentWillMount() {
    let arr = [this.props.data["columns"]];
    let matches = [];

    for (let i = 0; i < this.props.data["matches"].length; i++) {
      let obj = this.props.data["matches"][i];
      let tempArr = [obj["Name"], obj["Email"]];
      for (let j = 0; j < obj["Matches"].length; j++)
        tempArr.push(obj["Matches"][j]);
      matches.push(tempArr);
    }
    arr = arr.concat(matches);

    // convert to xlsx
    let ws = XLSX.utils.aoa_to_sheet(arr);
    let wb = XLSX.utils.book_new();
    wb.SheetNames.push("Workshop Assignments");
    wb.Sheets["Workshop Assignments"] = ws;

    let wbout = XLSX.write(wb, { bookType: "xlsx", type: "binary" });
    var buf = new ArrayBuffer(wbout.length); //convert s to arrayBuffer
    var view = new Uint8Array(buf); //create uint8array as viewer
    for (var i = 0; i < wbout.length; i++) view[i] = wbout.charCodeAt(i) & 0xff; //convert to octet

    this.setState({
      blob: new Blob([buf], { type: "application/octet-stream" }),
      rows: matches
    });
  }

  downloadXLSX() {
    saveAs(this.state.blob, "wsAssignments.xlsx");
  }

  downloadCSV() {
    var csv = this.props.data["columns"].join(",") + "\r\n";
    this.state.rows.forEach(row => {
      csv += row.join(",") + "\r\n";
    });

    var hiddenLink = document.createElement("a");
    hiddenLink.href = "data:text/csv;charset=utf-8," + encodeURI(csv);
    hiddenLink.target = "_blank";
    hiddenLink.download = "wsAssignments.csv";
    hiddenLink.click();
  }

  render() {
    return (
      <>
        <Wrapper>
          <Downloads>
            <DownloadButton onClick={this.downloadCSV}>
              Download CSV
            </DownloadButton>
            <DownloadButton onClick={this.downloadXLSX}>
              Download Excel
            </DownloadButton>
          </Downloads>
          <Preview>
            <Table>
              <Trow>
                {this.props.data["columns"].map(column => (
                  <th
                    style={{
                      border: "1px solid black",
                      borderCollapse: "collapse",
                      padding: "5px 15px"
                    }}
                  >
                    {column}
                  </th>
                ))}
              </Trow>
              {this.state.rows.map(row => (
                <Trow>
                  {row.map(item => (
                    <td
                      style={{
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        paddingTop: "3px",
                        paddingBottom: "3px"
                      }}
                    >
                      {item}
                    </td>
                  ))}
                </Trow>
              ))}
            </Table>
          </Preview>
        </Wrapper>
      </>
    );
  }
}
