import { useState } from "react";

function Ex01Filter() {
  const [fruitList, setFruitList] = useState([]);
  const [inputFruit, setInputFruit] = useState();

  return (
    <>
      <h1>우리가게에 있는 과일</h1>

      <input onChange={(e) => setInputFruit(e.target.value)}></input>
      <button onClick={() => setFruitList(fruitList.concat(inputFruit))}>
        과일추가!
      </button>
      <br></br>
      <input onChange={(e) => setInputFruit(e.target.value)}></input>
      <button
        onClick={() =>
          setFruitList(fruitList.filter((data) => data != inputFruit))
        }
      >
        과일삭제!
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

export default Ex01Filter;
