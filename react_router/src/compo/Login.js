import { useNavigate, useSearchParams } from "react-router-dom";
import { useRef } from "react";

function Login() {
  const useId = useRef();
  const usePw = useRef();

  const nav = useNavigate();
  const [params, setParams] = useSearchParams();

  const id = params.get("id");
  const pw = params.get("pw");
  const nick = params.get("nick");

  function loginTry() {
    let inputId = useId.current.value;
    let inputPw = usePw.current.value;
    if (inputId == id && inputPw == pw) {
      nav("/?nick=" + nick);
    } else {
      alert("잘못입력했습니다");
      useId.current.value = "";
      usePw.current.value = "";
      useId.current.focus();
    }
  }

  return (
    <>
      ID : <input ref={useId}></input>
      <br></br>
      PW : <input ref={usePw}></input>
      <button onClick={loginTry}>로그인 시도</button>
    </>
  );
}

export default Login;
