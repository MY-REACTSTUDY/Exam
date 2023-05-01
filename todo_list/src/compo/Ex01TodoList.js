import { useState } from "react";

function Ex01TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [inputList, setInputList] = useState();

  function deleteList(num) {
    console.log(num);

    setTodoList(todoList.filter((data, index) => num != index));
  }

  return (
    <>
      <h1>2023 올해는 꼭!! 할 수 있다!</h1>

      <input onChange={(e) => setInputList(e.target.value)}></input>
      <button onClick={() => setTodoList(todoList.concat(inputList))}>
        계획추가
      </button>
      <h1>ToDo_List</h1>
      <ul>
        {todoList.map(function (data, index) {
          return (
            <li>
              {data}
              <button onClick={() => deleteList(index)}>삭제</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Ex01TodoList;
