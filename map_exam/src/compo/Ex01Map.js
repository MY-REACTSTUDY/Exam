import { CHeader, CContainer, CHeaderBrand } from "@coreui/react";
import { useState } from "react";

function Ex01Map() {
  const googoo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [inputDan, setInputDan] = useState();
  const [result, setResult] = useState([]);

  function makeGooGoo() {
    setResult(
      googoo.map(function (data, index) {
        return (
          <tr>
            <td>{inputDan}</td>
            <td>*</td>
            <td>{data}</td>
            <td>={inputDan * data}</td>
          </tr>
        );
      })
    );
  }

  return (
    <>
      <CHeader>
        <CContainer>
          <CHeaderBrand>
            <h1>구구단 게임</h1>
          </CHeaderBrand>
        </CContainer>
      </CHeader>
      <h1>
        몇단?<input onChange={(e) => setInputDan(e.target.value)}></input>
        <button onClick={makeGooGoo}>출력</button>
      </h1>
      <table border={1}>
        <tbody border={1}>{result}</tbody>
      </table>
    </>
  );
}
export default Ex01Map;
