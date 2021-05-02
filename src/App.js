import logo from "./logo.svg";
import "./App.css";
import ChildComponet from "./child.js";

function App() {
  const text = "오늘도 내일도 공부합시다 ㅜㅜ";
  const sayHello = function () {
    return <h3>오늘 너무 빡쌤</h3>;
  };
  const sayHello2 = function () {
    alert("안녕하세요!");
  };
  return (
    <div>
      <h1>안녕하세용!</h1>
      <h2>{text}</h2>
      {sayHello()}
      <div onClick={sayHello2}>클릭해 주세요</div>
      <ChildComponet />
      <ChildComponet />
      <ChildComponet />
      <ChildComponet />
    </div>
  );
}

export default App;
