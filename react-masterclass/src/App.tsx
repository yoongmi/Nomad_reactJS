import Circle from "./components/Circle";
import Form from "./components/Form";
import Styled from "./components/Styled";
import Themes from "./components/Themes";

function App() {
  return (
    <>
      <Form />
      <hr />
      <Circle borderColor="blue" bgColor="teal" />
      <Circle text="i'm tomato" bgColor="tomato" />
      <hr />
      <Themes />
      <hr />
      <Styled />
    </>
  );
}

export default App;
