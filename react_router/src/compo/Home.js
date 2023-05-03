import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

function Home() {
  const [params, setParams] = useSearchParams();
  const nick = params.get("nick");

  return (
    <>
      {nick == null ? (
        <h1>여기는 홈페지입니당</h1>
      ) : (
        <h1>{nick}님 환영합니다</h1>
      )}

      <ul>
        <li>
          <h1>
            <Link to="/login">로그인</Link>
          </h1>
        </li>
        <li>
          <h1>
            <Link to="/join">회원가입</Link>
          </h1>
        </li>
        <li>
          <h1>
            <Link to="todoList">TodoList</Link>
          </h1>
        </li>
      </ul>
    </>
  );
}

export default Home;
