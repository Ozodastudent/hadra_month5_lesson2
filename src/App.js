import Head from "./components/Header";
import BodyEl from "./components/Body";
import MainEl from "./components/Main";
import "./app.css";
function App() {
  return (
    <div className="container">
      <Head />
      <BodyEl />
      <ul className="list">
        <MainEl />
        <MainEl />
        <MainEl />
        <MainEl />
        <MainEl />
        <MainEl />
        <MainEl />
        <MainEl />
      </ul>
    </div>
  );
}
export default App;
