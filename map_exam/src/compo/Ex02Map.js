import { CHeader, CContainer, CHeaderBrand } from "@coreui/react";
import { useState } from "react";
function Ex02Map() {
  const [fruitList, setFruitList] = useState([]);
  const [inputName, setInputName] = useState();

  return (
    <>
      <CHeader>
        <CContainer>
          <CHeaderBrand>
            <h1>우리가게에 있는 과일</h1>
          </CHeaderBrand>
        </CContainer>
      </CHeader>
      <input onChange={(e) => setInputName(e.target.value)}></input>
      <button onClick={() => setFruitList(fruitList.concat(inputName))}>
        과일추가!
      </button>
      <h1>메뉴판</h1>
      <ul>
        {fruitList.map(function (data, index) {
          return <li>{data}</li>;
        })}
      </ul>
    </>
  );
}

export default Ex02Map;
