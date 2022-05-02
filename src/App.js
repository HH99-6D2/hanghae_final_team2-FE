import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <div>바꿔보았다</div>

        <div>
          <p>지훈 선생님 감사합니다.</p>
        </div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <h1>수정</h1>
            <h3>develop에서 pull 한다음 새로운 브랜치 생성했음</h3>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </div>
    </>
  );
}

export default App;
