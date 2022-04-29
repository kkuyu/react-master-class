import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box1 = styled.div`
  width: 100px;
  height: 100px;
  background-color: teal;
`;

const Box2 = styled.div`
  width: 100px;
  height: 100px;
  background-color: tomato;
`;

const Text = styled.span`
  color: white;
`;

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <div style={{ display: "flex" }}>
        <div style={{ width: 100, height: 100, backgroundColor: "teal" }}>
          <span style={{ color: "white" }}>Hi</span>
        </div>
        <div style={{ width: 100, height: 100, backgroundColor: "tomato" }}>
          <span style={{ color: "white" }}>Hi</span>
        </div>
      </div>
      <Father>
        <Box1>
          <Text>Hi</Text>
        </Box1>
        <Box2>
          <Text>Hi</Text>
        </Box2>
      </Father>
    </div>
  );
}

export default App;
