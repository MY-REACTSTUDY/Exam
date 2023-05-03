import { useRef } from "react";

function Join() {
  const useId = useRef();
  const usePw = useRef();
  const useNick = useRef();

  function reset() {
    useId.current.value = "";
    usePw.current.value = "";
    useNick.current.value = "";
    useId.current.focus();
  }

  return (
    <>
      <h1>회원가입 페이지 입니다</h1>
      <form action="/login">
        ID : <input ref={useId} name="id"></input>
        <br></br>
        PW : <input ref={usePw} name="pw"></input>
        <br></br>
        NICK : <input ref={useNick} name="nick"></input>
        <br></br>
        <button type="submit">JOIN</button>
        <button type="button" onClick={reset}>
          초기화
        </button>
      </form>
    </>
  );
}

export default Join;
